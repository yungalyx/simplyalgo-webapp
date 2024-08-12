import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { RequiresProPlanError } from "@/lib/exceptions"
import { getUserSubscriptionPlan } from "@/lib/subscription"

// const strategyCreateSchema = z.object({
//   title: z.string(),
//   content: z.string().optional(),
// })

const routeContextSchema = z.object({
  params: z.object({
    strategyId: z.string(),
  }),
})


export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const session = await getServerSession(authOptions)

    const { params } = routeContextSchema.parse(context)

   console.log(req)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    // TODO: check that this user is the creator of this strategy 
    const key = await db.apiKey.findUnique({
      select: {
        id: true
      },
      where: {
        strategyId: params.strategyId
      },
    })

    console.log(key)

    return new Response(JSON.stringify(key))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
