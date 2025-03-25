"use client"

import { TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

interface MonthlyData {
  year: number
  month: number
  month_name: string
  total_sales: number
}

interface PredictionData {
  year: number
  month: number
  month_name: string
  predicted_sales: number
}

export function AreaChartView() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [predictionData, setPredictionData] = useState<PredictionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPredicting, setIsPredicting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingCachedData, setUsingCachedData] = useState(false);
  
  // Check if device is mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchAllMonthlySales = async () => {
      try {
        setIsLoading(true);
        // Get all monthly data without year filter
        const response = await fetch(`http://localhost:3000/api/sales/monthly`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch monthly sales data');
        }
        
        const data: MonthlyData[] = await response.json();
        
        // Transform the data to match our chart format
        // Include year in the label for clarity
        const transformedData = data.map(item => ({
          month: `${item.month_name.slice(0, 3)} ${item.year}`,
          total_sales: item.total_sales,
          predicted_sales: null, // Placeholder for prediction data
          year: item.year,
          monthIndex: item.month,
        }));
        
        // Sort by year and month for proper timeline display
        transformedData.sort((a, b) => {
          if (a.year !== b.year) return a.year - b.year;
          return a.monthIndex - b.monthIndex;
        });
        
        setChartData(transformedData);
        
        // Check for cached predictions that match our current data
        checkCachedPredictions(transformedData);
      } catch (err) {
        console.error('Error fetching monthly sales data:', err);
        setError('Failed to load sales data: ' + (err instanceof Error ? err.message : String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMonthlySales();
  }, []);
  
  // Function to check for cached predictions
  const checkCachedPredictions = (actualSalesData: any[]) => {
    try {
      // Try to get cached predictions from localStorage
      const cachedPredictionsJSON = localStorage.getItem('sales_predictions');
      if (!cachedPredictionsJSON) return;
      
      const cachedData = JSON.parse(cachedPredictionsJSON);
      
      // Verify the cache is valid and not expired
      if (!cachedData || !cachedData.timestamp || !cachedData.predictions || !cachedData.lastActualDataPoint) {
        return;
      }
      
      // Check if cache is fresh (less than 1 day old)
      const cacheAge = Date.now() - cachedData.timestamp;
      const oneDayInMs = 24 * 60 * 60 * 1000;
      if (cacheAge > oneDayInMs) {
        console.log('Cache expired, will request fresh predictions');
        return;
      }
      
      // Verify the last actual data point matches our current data
      // This ensures we're not using predictions based on outdated actual data
      const lastActual = actualSalesData[actualSalesData.length - 1];
      const cachedLastActual = cachedData.lastActualDataPoint;
      
      if (lastActual.year === cachedLastActual.year && 
          lastActual.monthIndex === cachedLastActual.monthIndex &&
          lastActual.total_sales === cachedLastActual.total_sales) {
        
        console.log('Using cached predictions');
        
        // Use the cached predictions
        setPredictionData(cachedData.predictions);
        
        // Merge cached predictions with actual data
        const mergedData = [...actualSalesData];
        cachedData.predictions.forEach((prediction: any) => {
          mergedData.push({
            month: `${prediction.month_name.slice(0, 3)} ${prediction.year}`,
            total_sales: null,
            predicted_sales: prediction.predicted_sales,
            year: prediction.year,
            monthIndex: prediction.month,
            isPrediction: true,
          });
        });
        
        setChartData(mergedData);
        setUsingCachedData(true);
      }
    } catch (error) {
      console.error('Error parsing cached predictions:', error);
      // Continue without using cache if there's an error
    }
  };

  // Function to predict future sales
  const predictFutureSales = async () => {
    try {
      setIsPredicting(true);
      setError(null);
      setUsingCachedData(false);
      
      // Get the base data without predictions
      const baseData = chartData.filter(item => !item.isPrediction);
      
      // Determine window size based on data (minimum 3, or 1/4 of available data)
      const windowSize = Math.max(3, Math.floor(baseData.length / 4));
      
      // Call the prediction API
      const response = await fetch(
        `http://localhost:3000/api/sales/predict?months_ahead=6&window_size=${windowSize}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch prediction data');
      }
      
      const data = await response.json();
      
      if (!data.predictions || !Array.isArray(data.predictions)) {
        throw new Error('Invalid prediction data format');
      }
      
      // Store prediction data
      setPredictionData(data.predictions);
      
      // Save predictions to localStorage with timestamp
      const lastActualDataPoint = baseData[baseData.length - 1];
      localStorage.setItem('sales_predictions', JSON.stringify({
        predictions: data.predictions,
        timestamp: Date.now(),
        lastActualDataPoint: {
          year: lastActualDataPoint.year,
          monthIndex: lastActualDataPoint.monthIndex,
          total_sales: lastActualDataPoint.total_sales
        }
      }));
      
      // Merge prediction with actual data for chart display
      const mergedData = [...baseData];
      
      // Add prediction data as new points
      data.predictions.forEach((prediction: PredictionData) => {
        mergedData.push({
          month: `${prediction.month_name.slice(0, 3)} ${prediction.year}`,
          total_sales: null, // No actual data for future months
          predicted_sales: prediction.predicted_sales,
          year: prediction.year,
          monthIndex: prediction.month,
          isPrediction: true,
        });
      });
      
      // Update chart data with the merged data
      setChartData(mergedData);
      
    } catch (err) {
      console.error('Error predicting sales:', err);
      setError('Failed to predict sales: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsPredicting(false);
    }
  };

  // Calculate overall trend
  const calculateTrend = () => {
    if (chartData.length < 2) return { percentage: 0, isUp: true };
    
    // Compare first and last 3 months to determine trend
    const firstThreeMonths = chartData.slice(0, 3);
    const lastThreeMonths = chartData.slice(-3);
    
    const firstThreeAvg = firstThreeMonths.reduce((sum, item) => sum + (item.total_sales || 0), 0) / firstThreeMonths.length;
    const lastThreeAvg = lastThreeMonths.reduce((sum, item) => sum + (item.total_sales || item.predicted_sales || 0), 0) / lastThreeMonths.length;
    
    const percentChange = ((lastThreeAvg - firstThreeAvg) / firstThreeAvg) * 100;
    
    return {
      percentage: Math.abs(Math.round(percentChange * 10) / 10),
      isUp: percentChange > 0
    };
  };

  const trend = calculateTrend();

  // Get date range for display
  const getDateRangeText = () => {
    if (chartData.length < 2) return "All time sales data";
    const firstItem = chartData[0];
    const lastItem = chartData[chartData.length - 1];
    return `${firstItem.month} to ${lastItem.month}`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Complete Sales Overview</CardTitle>
          <CardDescription>
            Total sales aggregated by month across all available data
            {usingCachedData && " (using cached predictions)"}
          </CardDescription>
        </div>
        <Button 
          onClick={predictFutureSales} 
          disabled={isLoading || isPredicting}
          variant={usingCachedData ? "secondary" : "outline"}
        >
          {isPredicting ? "Predicting..." : usingCachedData ? "Refresh Predictions" : "Predict Future Sales"}
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-96">Loading chart data...</div>
        ) : error ? (
          <div className="flex justify-center items-center h-96 text-red-500">{error}</div>
        ) : (
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 10,
                  bottom: 30,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={true}
                  axisLine={true}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={true}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    value ? `$${Number(value).toLocaleString()}` : 'N/A', 
                    name === 'total_sales' ? 'Actual Sales' : 'Predicted Sales'
                  ]}
                />
                <Legend />
                
                {/* On mobile, prioritize showing predicted sales */}
                {isMobile ? (
                  <>
                    <Area
                      dataKey="predicted_sales"
                      type="monotone"
                      fill="#8884d8"
                      fillOpacity={0.4}
                      stroke="#8884d8"
                      strokeWidth={2}
                      name="Predicted Sales"
                      connectNulls
                    />
                    {predictionData.length > 0 && (
                      <Area
                        dataKey="total_sales"
                        type="monotone"
                        fill="#82ca9d"
                        fillOpacity={0.4}
                        stroke="#82ca9d"
                        strokeWidth={2}
                        name="Actual Sales"
                        connectNulls
                      />
                    )}
                  </>
                ) : (
                  <>
                    <Area
                      dataKey="total_sales"
                      type="monotone"
                      fill="#82ca9d"
                      fillOpacity={0.4}
                      stroke="#82ca9d"
                      strokeWidth={2}
                      name="Actual Sales"
                      connectNulls
                    />
                    {predictionData.length > 0 && (
                      <Area
                        dataKey="predicted_sales"
                        type="monotone"
                        fill="#8884d8"
                        fillOpacity={0.4}
                        stroke="#8884d8"
                        strokeWidth={2}
                        name="Predicted Sales"
                        connectNulls
                      />
                    )}
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {trend.isUp ? (
                <span className="text-green-500">Trending up by {trend.percentage}% over time <TrendingUp className="inline h-4 w-4 text-green-500" /></span>
              ) : (
                <span className="text-red-500">Trending down by {trend.percentage}% over time</span>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {getDateRangeText()}
              {predictionData.length > 0 && ` (includes ${usingCachedData ? 'cached ' : ''}predictions)`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
