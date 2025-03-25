"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Chart config definition
const chartConfig = {
  views: {
    label: "Sale Per Day",
  },
  actualsales: {
    label: "Actual Sales",
    color: "hsl(var(--chart-1))",
  },
  predictedsales: {
    label: "Predicted Sales",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineChartInteractive() {
  const [chartData, setChartData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [activeChart, setActiveChart] = 
    React.useState<keyof typeof chartConfig>("actualsales");
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

  const fetchSalesData = React.useCallback(async () => {
    try {
      setLoading(true);
      
      // Build query parameters for date range
      const params = new URLSearchParams();
      if (startDate) {
        params.append('start_date', format(startDate, 'yyyy-MM-dd'));
      }
      if (endDate) {
        params.append('end_date', format(endDate, 'yyyy-MM-dd'));
      }
      
      const url = `http://localhost:3000/api/sales/chart${params.toString() ? '?' + params.toString() : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch sales data');
      }
      
      const data = await response.json();
      setChartData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching sales data:', err);
      setError('Failed to load sales data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [startDate, endDate]);

  React.useEffect(() => {
    fetchSalesData();
  }, [fetchSalesData]);

  const total = React.useMemo(
    () => ({
      actualsales: chartData.reduce((acc, curr) => acc + (curr.actualsales || 0), 0),
      predictedsales: chartData.reduce((acc, curr) => acc + (curr.predictedsales || 0), 0),
    }),
    [chartData]
  )

  // Calculate growth percentage (if applicable)
  const growthPercentage = React.useMemo(() => {
    if (chartData.length < 2) return 0;
    
    const firstDayActual = chartData[0]?.actualsales || 0;
    const lastDayActual = chartData[chartData.length - 1]?.actualsales || 0;
    
    if (firstDayActual === 0) return 0;
    
    return ((lastDayActual - firstDayActual) / firstDayActual) * 100;
  }, [chartData]);

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Sales Chart - Interactive</CardTitle>
          <CardDescription>
            {loading ? (
              <Skeleton className="h-4 w-[250px]" />
            ) : (
              `Showing total of ${growthPercentage.toFixed(1)}% growth over period`
            )}
          </CardDescription>
          <div className="flex space-x-2 mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[150px] justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Start date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[150px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "End date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button 
              variant="secondary"
              onClick={() => {
                setStartDate(undefined);
                setEndDate(undefined);
              }}
              className="whitespace-nowrap"
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="flex">
          {["actualsales", "predictedsales"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                {loading ? (
                  <Skeleton className="h-8 w-[80px]" />
                ) : (
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[chart as keyof typeof total].toLocaleString()}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        {loading ? (
          <div className="flex justify-center items-center h-[250px]">
            <Skeleton className="h-[200px] w-full" />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
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
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
