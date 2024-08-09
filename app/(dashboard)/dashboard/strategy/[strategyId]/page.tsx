import { notFound, redirect } from "next/navigation"
import { Post, Strategy, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Editor } from "@/components/editor"
import { StrategyCreationForm } from "@/components/strategy-form"
import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { PostItem } from "@/components/post-item"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { StrategyCreateButton } from "@/components/strategy-create-button"
import { AlgoPerformanceChart } from "@/components/explore/algo-performance-chart"
import { AlgoOrderTable } from "@/components/explore/algo-order-history"
import { AlgoRadarChart } from "@/components/explore/algo-radar-chart"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"


async function getStrategy(strategyId: Strategy["id"], userId: User["id"]) {
  return await db.strategy.findUnique({
    where: {
      id: strategyId
    },
  })
}

interface EditorPageProps {
  params: { strategyId: string }
}


export default async function StrategyDetailPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const post = await getStrategy(params.strategyId, user.id)
 
  return (
    <div>
      <div className="flex flex-row justify-between py-8">
        <h2 className="text-3xl"> {post?.title} </h2>
        <Link href={`/dashboard/editor/${params.strategyId}`} className={cn(buttonVariants({ size: "lg", variant: 'outline' }))}>
            Settings
          </Link>
      </div>
      
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
  )
}

