import { AreaChartView } from '@/components/charts/AreaChart'
import { LineChartInteractive } from '@/components/charts/LineChartInterative'
import { LineChartView } from '@/components/charts/LineChartMultiple'

export default function TestView() {
  return (
    <>
    <AreaChartView/>
    <LineChartInteractive/>
    {/* <LineChartView/> */}
    </>
  )
}
