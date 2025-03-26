"use client";

import React, { useState, useEffect } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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

// Data interface for monthly sales
interface MonthlyData {
  year: number;
  month: number;
  month_name: string;
  total_sales: number;
}

// Interface for chart data
interface ChartData {
  month: string;
  desktop?: number; // Cash on Delivery/Store
  mobile?: number;  // Online Payment
}

const chartConfig = {
  desktop: {
    label: "Cash on Delivery/Store",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Online Payment",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartView() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        setIsLoading(true);
        // Get current year for filtering
        const currentYear = new Date().getFullYear();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/monthly`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch monthly sales data');
        }
        
        const data: MonthlyData[] = await response.json();
        
        // Transform API data to chart format
        // Randomly split total sales between desktop and mobile for demonstration
        const formattedData: ChartData[] = data.map(item => {
          const desktop = item.total_sales;
          const mobile = 0;
          
          return {
            month: item.month_name,
            desktop,
            mobile
          };
        });
        
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales Distribution</CardTitle>
        <CardDescription>{new Date().getFullYear()} Sales Data</CardDescription>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <p>Loading sales data...</p>
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
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter>
        {!isLoading && !error && (
          <div className="text-xs text-muted-foreground">
            Source: Sales database - updated daily
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

