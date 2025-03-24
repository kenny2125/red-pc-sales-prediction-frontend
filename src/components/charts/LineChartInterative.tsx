"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { date: "2024-04-01", actualsales: 222, predictedsales: 150 },
  { date: "2024-04-02", actualsales: 97, predictedsales: 180 },
  { date: "2024-04-03", actualsales: 167, predictedsales: 120 },
  { date: "2024-04-04", actualsales: 242, predictedsales: 260 },
  { date: "2024-04-05", actualsales: 373, predictedsales: 290 },
  { date: "2024-04-06", actualsales: 301, predictedsales: 340 },
  { date: "2024-04-07", actualsales: 245, predictedsales: 180 },
  { date: "2024-04-08", actualsales: 409, predictedsales: 320 },
  { date: "2024-04-09", actualsales: 59, predictedsales: 110 },
  { date: "2024-04-10", actualsales: 261, predictedsales: 190 },
  { date: "2024-04-11", actualsales: 327, predictedsales: 350 },
  { date: "2024-04-12", actualsales: 292, predictedsales: 210 },
  { date: "2024-04-13", actualsales: 342, predictedsales: 380 },
  { date: "2024-04-14", actualsales: 137, predictedsales: 220 },
  { date: "2024-04-15", actualsales: 120, predictedsales: 170 },
  { date: "2024-04-16", actualsales: 138, predictedsales: 190 },
  { date: "2024-04-17", actualsales: 446, predictedsales: 360 },
  { date: "2024-04-18", actualsales: 364, predictedsales: 410 },
  { date: "2024-04-19", actualsales: 243, predictedsales: 180 },
  { date: "2024-04-20", actualsales: 89, predictedsales: 150 },
  { date: "2024-04-21", actualsales: 137, predictedsales: 200 },
  { date: "2024-04-22", actualsales: 224, predictedsales: 170 },
  { date: "2024-04-23", actualsales: 138, predictedsales: 230 },
  { date: "2024-04-24", actualsales: 387, predictedsales: 290 },
  { date: "2024-04-25", actualsales: 215, predictedsales: 250 },
  { date: "2024-04-26", actualsales: 75, predictedsales: 130 },
  { date: "2024-04-27", actualsales: 383, predictedsales: 420 },
  { date: "2024-04-28", actualsales: 122, predictedsales: 180 },
  { date: "2024-04-29", actualsales: 315, predictedsales: 240 },
  { date: "2024-04-30", actualsales: 454, predictedsales: 380 },
  { date: "2024-05-01", actualsales: 165, predictedsales: 220 },
  { date: "2024-05-02", actualsales: 293, predictedsales: 310 },
  { date: "2024-05-03", actualsales: 247, predictedsales: 190 },
  { date: "2024-05-04", actualsales: 385, predictedsales: 420 },
  { date: "2024-05-05", actualsales: 481, predictedsales: 390 },
  { date: "2024-05-06", actualsales: 498, predictedsales: 520 },
  { date: "2024-05-07", actualsales: 388, predictedsales: 300 },
  { date: "2024-05-08", actualsales: 149, predictedsales: 210 },
  { date: "2024-05-09", actualsales: 227, predictedsales: 180 },
  { date: "2024-05-10", actualsales: 293, predictedsales: 330 },
  { date: "2024-05-11", actualsales: 335, predictedsales: 270 },
  { date: "2024-05-12", actualsales: 197, predictedsales: 240 },
  { date: "2024-05-13", actualsales: 197, predictedsales: 160 },
  { date: "2024-05-14", actualsales: 448, predictedsales: 490 },
  { date: "2024-05-15", actualsales: 473, predictedsales: 380 },
  { date: "2024-05-16", actualsales: 338, predictedsales: 400 },
  { date: "2024-05-17", actualsales: 499, predictedsales: 420 },
  { date: "2024-05-18", actualsales: 315, predictedsales: 350 },
  { date: "2024-05-19", actualsales: 235, predictedsales: 180 },
  { date: "2024-05-20", actualsales: 177, predictedsales: 230 },
  { date: "2024-05-21", actualsales: 82, predictedsales: 140 },
  { date: "2024-05-22", actualsales: 81, predictedsales: 120 },
  { date: "2024-05-23", actualsales: 252, predictedsales: 290 },
  { date: "2024-05-24", actualsales: 294, predictedsales: 220 },
  { date: "2024-05-25", actualsales: 201, predictedsales: 250 },
  { date: "2024-05-26", actualsales: 213, predictedsales: 170 },
  { date: "2024-05-27", actualsales: 420, predictedsales: 460 },
  { date: "2024-05-28", actualsales: 233, predictedsales: 190 },
  { date: "2024-05-29", actualsales: 78, predictedsales: 130 },
  { date: "2024-05-30", actualsales: 340, predictedsales: 280 },
  { date: "2024-05-31", actualsales: 178, predictedsales: 230 },
  { date: "2024-06-01", actualsales: 178, predictedsales: 200 },
  { date: "2024-06-02", actualsales: 470, predictedsales: 410 },
  { date: "2024-06-03", actualsales: 103, predictedsales: 160 },
  { date: "2024-06-04", actualsales: 439, predictedsales: 380 },
  { date: "2024-06-05", actualsales: 88, predictedsales: 140 },
  { date: "2024-06-06", actualsales: 294, predictedsales: 250 },
  { date: "2024-06-07", actualsales: 323, predictedsales: 370 },
  { date: "2024-06-08", actualsales: 385, predictedsales: 320 },
  { date: "2024-06-09", actualsales: 438, predictedsales: 480 },
  { date: "2024-06-10", actualsales: 155, predictedsales: 200 },
  { date: "2024-06-11", actualsales: 92, predictedsales: 150 },
  { date: "2024-06-12", actualsales: 492, predictedsales: 420 },
  { date: "2024-06-13", actualsales: 81, predictedsales: 130 },
  { date: "2024-06-14", actualsales: 426, predictedsales: 380 },
  { date: "2024-06-15", actualsales: 307, predictedsales: 350 },
  { date: "2024-06-16", actualsales: 371, predictedsales: 310 },
  { date: "2024-06-17", actualsales: 475, predictedsales: 520 },
  { date: "2024-06-18", actualsales: 107, predictedsales: 170 },
  { date: "2024-06-19", actualsales: 341, predictedsales: 290 },
  { date: "2024-06-20", actualsales: 408, predictedsales: 450 },
  { date: "2024-06-21", actualsales: 169, predictedsales: 210 },
  { date: "2024-06-22", actualsales: 317, predictedsales: 270 },
  { date: "2024-06-23", actualsales: 480, predictedsales: 530 },
  { date: "2024-06-24", actualsales: 132, predictedsales: 180 },
  { date: "2024-06-25", actualsales: 141, predictedsales: 190 },
  { date: "2024-06-26", actualsales: 434, predictedsales: 380 },
  { date: "2024-06-27", actualsales: 448, predictedsales: 490 },
  { date: "2024-06-28", actualsales: 149, predictedsales: 200 },
  { date: "2024-06-29", actualsales: 103, predictedsales: 160 },
  { date: "2024-06-30", actualsales: 446, predictedsales: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
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
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("actualsales")

  const total = React.useMemo(
    () => ({
      actualsales: chartData.reduce((acc, curr) => acc + curr.actualsales, 0),
      predictedsales: chartData.reduce((acc, curr) => acc + curr.predictedsales, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Sales Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total of 6.3% growth over past month
          </CardDescription>
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
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
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
      </CardContent>
    </Card>
  )
}
