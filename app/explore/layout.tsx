interface ExploreLayoutProps {
  children: React.ReactNode
}


export default function ExploreLayout({ children }: ExploreLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
