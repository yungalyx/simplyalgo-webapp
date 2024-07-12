import { notFound, redirect } from "next/navigation"
import { Post, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Editor } from "@/components/editor"
import { StrategyCreationForm } from "@/components/strategy-form"


interface StrategyCreationFormProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: StrategyCreationFormProps) {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  // const post = await getPostForUser(params.postId, user.id)

 
  return (
    <StrategyCreationForm />

  )
}
