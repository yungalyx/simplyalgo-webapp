import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { postPatchSchema } from "@/lib/validations/post"
import { strategyPatchSchema } from "@/lib/validations/strategy"

const routeContextSchema = z.object({
  params: z.object({
    strategyId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.strategyId))) {
      return new Response(null, { status: 403 })
    }

    // Delete the post.
    await db.strategy.delete({
      where: {
        id: params.strategyId as string,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToStrategy(params.strategyId))) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const json = await req.json()
    const body = strategyPatchSchema.parse(json)

    // const { title, content, description } = body;

    // Update the post.
    // TODO: Implement sanitization for content.
    await db.strategy.update({
      where: {
        id: params.strategyId,
      },
      data: {
        ...body,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

async function verifyCurrentUserHasAccessToPost(postId: string) {
  const session = await getServerSession(authOptions)
  const count = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user.id,
    },
  })

  return count > 0
}


async function verifyCurrentUserHasAccessToStrategy(strategyId: string) {
  const session = await getServerSession(authOptions)
  const count = await db.strategy.count({
    where: {
      id: strategyId,
      authorId: session?.user.id,
    },
  })

  return count > 0
}
