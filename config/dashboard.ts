import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    { title: "Explore", 
      href: "/explore",
    }, 
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Explore",
      href: "/explore",
      icon: "laptop"
    },
    {
      title: "Strategies",
      href: "/dashboard/editor",
      icon: "check"
    },
    {
      title: "Accounts",
      href: "/dashboard/accounts"
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
