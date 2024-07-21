import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Dashboard",
}

export default async function AccountPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }


  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: "desc",
  //   },
  // })
  return <div> 
    <h1> Accounts </h1>
    <p> Accounts are where your funds are held, it can be your balance on this platform. It can also be external trading accounts where we have your API keys! </p>
    <p> External accounts can only subscribe to a single strategy, where internal accounts can subscribe to any number of algos. </p>
  </div>

 
}
