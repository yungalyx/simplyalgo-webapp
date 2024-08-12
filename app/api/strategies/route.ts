import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { RequiresProPlanError } from "@/lib/exceptions"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { createHmac } from "crypto"
import { env } from "@/env.mjs"

// const generateCreatorKey = (strategyId: string) => {
//   const hash = createHash('sha-256').update(strategyId).digest('hex');
//   return hash;
// }

// Function to generate an API key
const generateApiKey = (strategyID) => {
  return createHmac('sha256', env.SALT).update(strategyID).digest('hex');
};

// Function to validate the API key
const validateApiKey = (apiKey, strategyID) => {
  const validApiKey = generateApiKey(strategyID);
  return apiKey === validApiKey;
};

const strategyCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const posts = await db.strategy.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: user.id,
      },
    })

    return new Response(JSON.stringify(posts))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}


// create strategy and also create the API key 
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const subscriptionPlan = await getUserSubscriptionPlan(user.id)

    // If user is on a free plan.
    // Check if user has reached limit of 3 posts.
    if (!subscriptionPlan?.isPro) {
      const count = await db.post.count({
        where: {
          authorId: user.id,
        },
      })

      if (count >= 3) {
        throw new RequiresProPlanError()
      }
    }

    const json = await req.json()
    const body = strategyCreateSchema.parse(json)
    

    const strategy = await db.strategy.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: session.user.id,
        creatorKey: {
          create: {
          }
        },
      },
      select: {
        id: true,
      },
    })
  
  
    // id          String    @id @default(cuid())
    // strategyId  String    @unique
    // strategy    Strategy  @relation(fields: [strategyId], references: [id])
    // enabled     Boolean   @default(true)

    

    return new Response(JSON.stringify(strategy))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    if (error instanceof RequiresProPlanError) {
      return new Response("Requires Pro Plan", { status: 402 })
    }

    return new Response(null, { status: 500 })
  }
}
