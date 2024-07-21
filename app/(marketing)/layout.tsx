import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="absolute top-0 -z-10 h-full w-full bg-pearl">
        <div className="opactiy-80 absolute bottom-auto left-auto right-0 top-0 h-[100%] w-full translate-x-[-40%] translate-y-[60%] rounded-full bg-[rgba(204,108,158,255)] blur-[100px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[100%] w-full translate-x-[30%] translate-y-[40%] rounded-full bg-[rgba(238,164,146,255)] opacity-80 blur-[100px]"></div>
      </div>
      <header className="container z-40 bg-inherit">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
