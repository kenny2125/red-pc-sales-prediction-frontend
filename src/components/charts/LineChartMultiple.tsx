"use client";


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
const chartData = [
  { month: "January", desktop: 180 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237,  },
  { month: "April", desktop: 73,  },
  { month: "May", desktop: 209,  },
  { month: "June", desktop: 214, mobile: 214 },
  { month: "July", mobile: 250 },
  { month: "August",  mobile: 300 },
];

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      
      <CardContent>
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
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}

