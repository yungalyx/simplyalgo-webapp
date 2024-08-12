import { notFound, redirect } from "next/navigation"
import { Post, Strategy, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Editor } from "@/components/editor"
import { StrategyCreationForm } from "@/components/strategy-form"
import { APIContainer } from "@/components/api-container"

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  })
}

async function getStrategyForUser(strategyId: Post["id"], userId: User["id"]) {
  return await db.strategy.findFirst({
    where: {
      id: strategyId,
      authorId: userId,
    },
  })
}

async function getApiKeyForStrategy(strategyId: Strategy["id"]) {
  return await db.apiKey.findFirst({
    select: {
      id: true
    },
    where: {
      strategyId: strategyId,
    },
  })
}


interface EditorPageProps {
  params: { strategyId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

 // const post = await getPostForUser(params.postId, user.id)

  const strategy = await getStrategyForUser(params.strategyId, user.id)

  const key = await getApiKeyForStrategy(params.strategyId);

  // const post = {
  //   id: "sefniofa",
  //   title: "seomthing",
  //   published: true,
  //   createdAt: new Date(),
  //   content: {
  //     something: "soemthing"
  //   }
  // };

  if (!strategy || !key) {
    notFound()
  }

  return (
    <div>
       <StrategyCreationForm user={user} strategy={strategy}/>
       <APIContainer id={key.id} />
 
    </div>
   
    // <Editor
    //   post={{
    //     id: post.id,
    //     title: post.title,
    //     content: post.content,
    //     published: post.published,
    //   }}
    // />
  )
}
