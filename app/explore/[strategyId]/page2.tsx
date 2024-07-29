// import { IDetailedStrategy, IStrategies } from "@/lib/models"
// import { algos } from "../page"
// import { TrendingUp } from "lucide-react"
// import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
// import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "rgba(123, 23, 98, 255)",
//   },
// } 

// async function getStrategy(id: string): Promise<IStrategies | null> {
//   return algos.find(x => x.strategyId == id) || null;
// }


// const chartData = [
//   { metric: "CAGR", desktop: 186, mobile: 80 },
//   { metric: "Drawdown %", desktop: 305, mobile: 200 },
//   { metric: "Sharpe", desktop: 237, mobile: 120 },
//   { metric: "History", desktop: 73, mobile: 190 },
//   { metric: "Frequency", desktop: 209, mobile: 130 },
// ]


// export default async function Page({ params, searchParams}) {

//   const strategy = await getStrategy(params.strategyId)  


  
//   if (!strategy) {  
//     return <p> NOTHING FOUND</p>
//   } else {
//     return <>
//       <h1> { strategy.name } </h1>
//       <div>
//         <ChartContainer config={chartConfig}>
//           <RadarChart data={chartData}>
//           </RadarChart> 
//         </ChartContainer>
//       {/* <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <RadarChart data={chartdata}>
//             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//             <PolarAngleAxis dataKey="metric" />
//             <PolarGrid />
//             <Radar
//               dataKey="desktop"
//               fill="rgba(234, 122, 23, 255)"
//               fillOpacity={0.6}
//             />
//           </RadarChart>
//         </ChartContainer> */}

//       </div>
    
    
//     </>


//   }


// }