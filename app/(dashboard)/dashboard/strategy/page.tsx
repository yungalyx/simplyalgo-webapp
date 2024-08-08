import { notFound, redirect } from "next/navigation"
import { Post, User } from "@prisma/client"

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


async function getStrategiesForUser(userId: User["id"]) {
  return await db.strategy.findMany({
    where: {
      authorId: userId,
    },
  })
}


export default async function EditorPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  // const post = await getPostForUser(params.postId, user.id)

  const strategies = await getStrategiesForUser(user.id)

  return (
    <DashboardShell>
      <DashboardHeader heading="Strategies" text="View your current strategies.">
        {/* <PostCreateButton /> */}
        <StrategyCreateButton />
      </DashboardHeader>
      <div>
        {strategies?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {strategies.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No strategies created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any strategies yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}

