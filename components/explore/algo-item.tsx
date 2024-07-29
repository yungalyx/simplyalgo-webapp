import Link from "next/link"
import { Post } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { PostOperations } from "@/components/post-operations"

interface AlgoItemProp {
  algo: Pick<Post, "id" | "title" | "published" | "createdAt" | "name">
}

export function AlgoItem({ algo }: AlgoItemProp) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/explore/${algo.id}`}
          className="font-semibold hover:underline"
        >
          {algo.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(algo.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <PostOperations post={{ id: algo.id, title: algo.title }} />
    </div>
  )
}

AlgoItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
