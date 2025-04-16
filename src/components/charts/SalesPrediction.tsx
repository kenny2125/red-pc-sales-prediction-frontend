"use client"

import { TrendingUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"
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
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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

interface TrainingProgress {
  iterations: number
  error: number
  errorThreshold: number
}

interface ValidationMetrics {
  mse: string
  mape: string
}

export function SalesPrediction() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [predictionData, setPredictionData] = useState<PredictionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPredicting, setIsPredicting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [monthsAhead, setMonthsAhead] = useState(6);
  
  // Training progress state
  const [trainingProgress, setTrainingProgress] = useState<TrainingProgress | null>(null);
  const [validationMetrics, setValidationMetrics] = useState<ValidationMetrics | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);
  
  // Check if device is mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchAllMonthlySales = async () => {
      try {
        setIsLoading(true);
        // Get all monthly data without year filter
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/monthly`);
        
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
      } catch (err) {
        console.error('Error fetching monthly sales data:', err);
        setError('Failed to load sales data: ' + (err instanceof Error ? err.message : String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMonthlySales();
  }, []);

  // Function to predict future sales using SSE
  const predictFutureSales = async () => {
    try {
      // Clean up any existing event source
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
      
      setIsPredicting(true);
      setError(null);
      setTrainingProgress(null);
      setValidationMetrics(null);
      
      // Updated URL to use the new prediction endpoint with only months_ahead parameter
      const url = `${import.meta.env.VITE_API_URL}/api/predictions/sales?months_ahead=${monthsAhead}`;
      eventSourceRef.current = new EventSource(url);
      
      eventSourceRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        switch (data.type) {
          case 'progress':
            setTrainingProgress({
              iterations: data.iterations,
              error: data.error,
              errorThreshold: data.errorThreshold
            });
            break;
            
          case 'validation':
            setValidationMetrics({
              mse: data.mse,
              mape: data.mape
            });
            break;
            
          case 'complete':
            // Store prediction data
            setPredictionData(data.predictions);
            
            // Define baseData excluding any previous predictions
            const baseData = chartData.filter(item => !item.isPrediction);
            
            // Merge prediction with actual data for chart display
            const mergedData = [...baseData];
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
            
            setChartData(mergedData);
            setIsPredicting(false);
            
            // Close the connection
            if (eventSourceRef.current) {
              eventSourceRef.current.close();
              eventSourceRef.current = null;
            }
            break;
            
          case 'error':
            setError('Error during prediction: ' + data.message);
            setIsPredicting(false);
            
            if (eventSourceRef.current) {
              eventSourceRef.current.close();
              eventSourceRef.current = null;
            }
            break;
        }
      };
      
      eventSourceRef.current.onerror = () => {
        setError('Connection error. Please try again later.');
        setIsPredicting(false);
        
        if (eventSourceRef.current) {
          eventSourceRef.current.close();
          eventSourceRef.current = null;
        }
      };
      
    } catch (err) {
      console.error('Error predicting sales:', err);
      setError('Failed to predict sales: ' + (err instanceof Error ? err.message : String(err)));
      setIsPredicting(false);
    }
  };

  // Cleanup event source on component unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

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
          </CardDescription>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <label className="flex items-center gap-1 text-sm">
            Months Ahead:
            <input
              type="number"
              min="1"
              max="12"
              value={monthsAhead}
              onChange={(e) => setMonthsAhead(parseInt(e.target.value))}
              className="px-2 py-1 border rounded w-16"
            />
          </label>
          <Button 
            onClick={predictFutureSales} 
            disabled={isLoading || isPredicting}
            variant="outline"
          >
            {isPredicting ? "Predicting..." : "Predict Future Sales"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Training Progress Display */}
        {isPredicting && trainingProgress && (
          <Dialog open>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Training Neural Network</DialogTitle>
              </DialogHeader>
              <div className="flex justify-between mb-1 text-sm">
                <span>Current Iteration: {trainingProgress.iterations.toLocaleString()}</span>
              </div>
              <div className="my-3 h-2 w-full bg-secondary rounded overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ 
                    width: `${Math.min(100, (1 - trainingProgress.error / (trainingProgress.errorThreshold * 10)) * 100)}%` 
                  }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Current Error: {trainingProgress.error.toFixed(6)}
              </p>
              <p className="text-sm text-muted-foreground">
                Target Error Threshold: {trainingProgress.errorThreshold}
              </p>
              <p className="text-sm font-medium mt-2">
                Training will continue until error threshold is met
              </p>
            </DialogContent>
          </Dialog>
        )}
        
        {/* Validation Metrics Display */}
        {validationMetrics && (
          <Alert className="mb-4">
            <AlertTitle>Model Validation Metrics</AlertTitle>
            <AlertDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <span className="font-medium">MSE:</span> {validationMetrics.mse}
                </div>
                <div>
                  <span className="font-medium">MAPE:</span> {validationMetrics.mape}%
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-96">Loading chart data...</div>
        ) : error ? (
          <div className="flex justify-center items-center h-96 ">{error}</div>
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
                {/* <CartesianGrid /> */}
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
                      name="Predicted Sales"
                      stroke="#8884d8"
                      fill="#8884d8"
                      connectNulls
                    />
                    {predictionData.length > 0 && (
                      <Area
                        dataKey="total_sales"
                        type="monotone"
                        name="Actual Sales"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        connectNulls
                      />
                    )}
                  </>
                ) : (
                  <>
                    <Area
                      dataKey="total_sales"
                      type="monotone"
                      name="Actual Sales"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      connectNulls
                    />
                    {predictionData.length > 0 && (
                      <Area
                        dataKey="predicted_sales"
                        type="monotone"
                        name="Predicted Sales"
                        stroke="#8884d8"
                        fill="#8884d8"
                        connectNulls
                      />
                    )}
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {/* Prediction Results Table */}
        {predictionData.length > 0 && (
          <div className="mt-4 border rounded-md p-4">
            <h3 className="font-medium mb-2">Sales Predictions</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Period</th>
                    <th className="text-right py-2">Predicted Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {predictionData.map((pred, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-2">{pred.month_name} {pred.year}</td>
                      <td className="text-right py-2">${pred.predicted_sales.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {trend.isUp ? (
                <span className="text-primary">Trending up by {trend.percentage}% over time <TrendingUp className="inline h-4 w-4" /></span>
              ) : (
                <span className="text-muted-foreground">Trending down by {trend.percentage}% over time</span>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {getDateRangeText()}
              {predictionData.length > 0 && " (includes predictions)"}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
