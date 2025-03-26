"use client";

import React, { useState, useEffect } from "react";
import { CartesianGrid, Line, LineChart, XAxis, ReferenceLine } from "recharts";
import { ChartLegend, ChartLegendContent } from "../ui/chart"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

// Data interface for monthly sales
interface MonthlyData {
  year: number;
  month: number;
  month_name: string;
  total_sales: number;
  date?: string;
}

// Interface for prediction data
interface PredictionData {
  year: number;
  month: number;
  month_name: string;
  predicted_sales: number;
  date: string;
}

// Interface for chart data
interface ChartData {
  month: string;
  date: string;
  desktop?: number; // Actual Sales
  mobile?: number;  // Predicted Sales
}

// Interface for model info
interface ModelInfo {
  type: string;
  training_data_points: number;
  mse: number;
  mape: number;
}

const chartConfig = {
  desktop: {
    label: "Actual Sales",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Predicted Sales",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartView() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [monthsAhead, setMonthsAhead] = useState<number>(3);
  const [inputMonthsAhead, setInputMonthsAhead] = useState<string>("3");
  const [actualSalesData, setActualSalesData] = useState<MonthlyData[]>([]);
  const [lastActualMonth, setLastActualMonth] = useState<string>("");
  const [modelInfo, setModelInfo] = useState<ModelInfo | null>(null);

  // Fetch actual sales data
  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/monthly`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch monthly sales data');
        }
        
        const data: MonthlyData[] = await response.json();
        
        // Enhance the data with proper date strings if they don't exist
        const enhancedData = data.map(item => ({
          ...item,
          date: item.date || `${item.year}-${String(item.month).padStart(2, '0')}-01`
        }));
        
        setActualSalesData(enhancedData);
        
        // Get the latest month from actual data
        if (enhancedData.length > 0) {
          const sortedData = [...enhancedData].sort((a, b) => {
            return new Date(b.date!).getTime() - new Date(a.date!).getTime();
          });
          setLastActualMonth(sortedData[0].month_name);
        }
        
        // Initial chart will only show actual data
        const formattedData: ChartData[] = enhancedData.map(item => ({
          month: item.month_name,
          date: item.date!,
          desktop: item.total_sales,
          mobile: undefined
        }));
        
        // Sort by date to ensure correct order
        formattedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        
        setChartData(formattedData);
      } catch (err) {
        console.error('Error fetching monthly data:', err);
        setError('Failed to load sales data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonthlyData();
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers between 1-12
    if (/^([1-9]|1[0-2])$/.test(value) || value === "") {
      setInputMonthsAhead(value);
    }
  };

  // Handle prediction button click
  const handlePredictionClick = () => {
    const months = parseInt(inputMonthsAhead);
    if (months >= 1 && months <= 12) {
      setMonthsAhead(months);
    }
  };

  // Fetch prediction data when monthsAhead changes
  useEffect(() => {
    const fetchPredictions = async () => {
      if (!actualSalesData.length) return;
      
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ml/linear-prediction?months_ahead=${monthsAhead}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch prediction data');
        }
        
        const data = await response.json();
        
        // Extract model information
        if (data.model_info) {
          setModelInfo(data.model_info);
        }
        
        // Use historical_data if available from the API, otherwise use our existing actualSalesData
        const historicalData = data.historical_data || actualSalesData;
        const predictions: PredictionData[] = data.predictions;
        
        // Map historical data to chart format
        const historicalChartData: ChartData[] = historicalData.map(item => ({
          month: item.month_name,
          date: item.date,
          desktop: item.total_sales,
          mobile: undefined
        }));
        
        // Map prediction data to chart format
        const predictionChartData: ChartData[] = predictions.map(pred => ({
          month: pred.month_name,
          date: pred.date,
          desktop: undefined, // No actual data for future months
          mobile: pred.predicted_sales
        }));
        
        // Combine all data
        const combinedData: ChartData[] = [...historicalChartData, ...predictionChartData];
        
        // Sort by date to ensure correct chronological order
        combinedData.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        
        setChartData(combinedData);
      } catch (err) {
        console.error('Error fetching prediction data:', err);
        setError('Failed to load prediction data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPredictions();
  }, [monthsAhead, actualSalesData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales Prediction</CardTitle>
        <CardDescription>
          {new Date().getFullYear()} Sales Data with {monthsAhead} Month{monthsAhead > 1 ? 's' : ''} Prediction
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6 flex items-center gap-4">
          <div className="w-full max-w-xs">
            <Label htmlFor="months-ahead" className="mb-2 block">Months Ahead:</Label>
            <div className="flex gap-2">
              <Input
                id="months-ahead"
                type="number"
                min="1"
                max="12"
                value={inputMonthsAhead}
                onChange={handleInputChange}
                placeholder="1-12 months"
                className="w-24"
              />
              <Button onClick={handlePredictionClick}>Get Prediction</Button>
            </div>
          </div>
          
          {modelInfo && (
            <div className="ml-auto text-sm text-muted-foreground">
              <div className="flex flex-col space-y-1">
                <div className="font-medium">Model Metrics:</div>
                <div>MSE: {modelInfo.mse}</div>
                <div>MAPE: {modelInfo.mape}%</div>
              </div>
            </div>
          )}
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <p>Loading data...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-[300px] text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 20, // Added more top margin for the labels
                bottom: 10,
              }}
            >
              <text
                x="50%"
                y="15"
                textAnchor="middle"
                dominantBaseline="hanging"
                className="fill-muted-foreground"
                style={{ fontSize: '12px' }}
              >
                {modelInfo && `MSE: ${modelInfo.mse} | MAPE: ${modelInfo.mape}%`}
              </text>
              
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value, index) => {
                  // Format month names with year when month is January or for first element
                  const item = chartData[index];
                  if (!item) return value.slice(0, 3);
                  
                  const date = new Date(item.date);
                  const month = value.slice(0, 3);
                  
                  // Show year for January or first month of predictions
                  if (date.getMonth() === 0 || value === lastActualMonth) {
                    return `${month} ${date.getFullYear()}`;
                  }
                  return month;
                }}
              />
              
              {lastActualMonth && (
                <ReferenceLine
                  x={lastActualMonth}
                  stroke="rgba(128, 128, 128, 0.5)"
                  strokeDasharray="3 3"
                  label={{ value: "Prediction Start", position: "top", fill: "gray", fontSize: 10 }}
                />
              )}
              
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
                name="Actual Sales"
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={3}
                dot={true}
                name="Predicted Sales"
                activeDot={{ r: 6, fill: "var(--color-mobile)" }}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter>
        {!isLoading && !error && (
          <div className="text-xs text-muted-foreground">
            Source: Sales database & ML Prediction - Updated on {new Date().toLocaleDateString()}
            {modelInfo && ` | Model: ${modelInfo.type} with ${modelInfo.training_data_points} data points`}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

