import { IDetailedStrategy, IStrategies } from "@/lib/models"
import { algos } from "../page"
import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AlgoRadarChart } from "@/components/explore/algo-radar-chart"
import { AlgoPerformanceChart } from "@/components/explore/algo-performance-chart"
import { AlgoOrderTable } from "@/components/explore/algo-order-history"


export default async function StrategyDetailPage({ params, searchParams}) {
  return <div>
    <AlgoPerformanceChart />

  <div className="mx-auto p-8"> 
    HERE SHOULD BE A SUMMARY OF THINGS
  </div>

    <div className="flex flex-row space-x-8 py-16"> 
      <div className="w-3/5">
        <AlgoOrderTable />
      </div>
      <div className="w-2/5">
        <AlgoRadarChart />
      </div>
    </div>
  </div>
}
