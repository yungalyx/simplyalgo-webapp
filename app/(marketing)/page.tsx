import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import DoneSVG from "@/public/images/marketing/grape-5.svg"
import SubscribeSVG from "@/public/images/marketing/grape-8.svg"
import SignUpSVG from "@/public/images/marketing/grape-14.svg"
import DiagramSVG from "@/public/images/marketing/diagram.svg"

import { env } from "@/env.mjs"
import { faqs } from "@/config/faq"
import { howItWorks, solutions } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Skeleton } from "@/components/ui/skeleton"
import { CardSkeleton } from "@/components/card-skeleton"
import { Icons } from "@/components/icons"
import { MdxCard } from "@/components/mdx-card"
import CodeBlock from "@/components/marketing/codeblock"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export function HoverMe({ trigger, content }) {
  return (
    <HoverCard>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent>{content}</HoverCardContent>
    </HoverCard>
  )
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-8 md:py-48 lg:py-52">
        <div className="mx-auto flex h-full max-w-[64rem] flex-1 flex-col items-center gap-6 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl font-bold text-accent-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Trade smarter. Trade Simply.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Unlock your money&apos;s potential with hedge-fund quality
            algorithms. Curated by top quants in the industry.
          </p>
          <div className="space-x-4">
            <Link
              href="/waitlist"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Join the waitlist
            </Link>
            <Link
              href="/register"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Login &#40;Alpha&#41;
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-8 bg-inherit md:py-24 lg:py-36"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Say some marketing things here.
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <div className="relative flex-1 overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">18,000+ users</h3>
                <p className="text-sm">
                  Trusted by investors and traders around the world
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">25+ Trading Algorithms</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting edge algorithms that have collectively averaged over
                  27% CAGR.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Security</h3>
                <p className="text-sm text-muted-foreground">
                  Our robust risk management protocols ensure your funds are
                  locked down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container bg-pearl p-8 py-24">
        <div className="space-y-48">
          {howItWorks.map((x) => {
            return (
              <div className="flex-cols flex content-center">
                <div className="w-1/3 flex-none space-y-8">
                  <h2 className="pt-8 text-3xl"> {x.title} </h2>
                  <p> {x.description} </p>
                  <Link
                    href={x.href}
                    className={cn(buttonVariants({ size: "lg" }))}
                  >
                    {" "}
                    {x.cta}{" "}
                  </Link>
                </div>
                <div className="w-1/5">
                </div>
                <Image
                  src={x.img}
                  alt={""}
                  width={300}
                  height={300}
                  className="mx-auto text-center"
                />
              </div>
            )
          })}
        </div>
      </section>

      <section id="use-cases" className="space-y-6 bg-inherit py-24">
        <h1 className="pl-20 text-3xl font-semibold">
          {" "}
          Solutions for your sector{" "}
        </h1>
        <div className="flex-no-wrap flex flex-row gap-12 overflow-scroll pl-20">
          {solutions.map((x) => {
            return (
              <MdxCard className="w-1/4 flex-none p-10">
                <h1 className="text-2xl"> {x.title} </h1>
                <p> {x.description} </p>
              </MdxCard>
            )
          })}
        </div>
      </section>

      <section id="code-block">
        <CodeBlock />
      </section>

      <section id="diagram">
        <div className="container mx-auto items-center justify-center"> 
          <Image src={DiagramSVG} alt="diagram" width={800} className="mx-auto duration-700 ease-in-out hover:scale-110" />
        </div>
      </section>

      <section id="call-to-action py-24">
        <div className="flex min-h-screen flex-col items-center justify-center bg-pearl">
          <Head>
            <title>SimplyAlgo Holdings</title>
          </Head>
          <div className="relative m-8 flex items-center justify-center space-x-24">
            <MdxCard>
              {" "}
              <div className="flex flex-col space-y-4">
                <h3 className="text-lg font-semibold">Current Holdings</h3>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    NVDA
                  </span>
                  <span>NVIDIA Corporation</span>
                  <span className="ml-auto">28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    AAPL
                  </span>
                  <span>Apple Inc.</span>
                  <span className="ml-auto">16%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    META
                  </span>
                  <span> Meta Platforms, Inc.</span>
                  <span className="ml-auto">18%</span>
                </div>
              </div>
            </MdxCard>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-black p-4 text-white">
                <span className="text-xl">&#8594;</span>
              </div>
            </div>
            <MdxCard>
              {" "}
              <div className="flex flex-col space-y-4">
                <h3 className="text-lg font-semibold">New Holdings</h3>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    NVDA
                  </span>
                  <span>NVIDIA Corporation</span>
                  <span className="ml-auto">86%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    AAPL
                  </span>
                  <span>Apple Inc.</span>
                  <span className="ml-auto">56%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-black px-2 py-1 font-bold text-white">
                    META
                  </span>
                  <span> Meta Platforms, Inc.</span>
                  <span className="ml-auto">63%</span>
                </div>
              </div>
            </MdxCard>
          </div>
          <p className="mt-12 text-center text-xl font-semibold">
            Why settle for{" "}
            <span className="underline">
              {" "}
              <HoverMe
                trigger={"12% APR"}
                content="12% is the average return of the American stock market"
              />
            </span>
            , when everyone else is getting 24%?
          </p>
          <p className="text-center text-gray-600">
            With over 25+ verified trading strategies, beating the market is
            easy.
          </p>
        </div>
      </section>

      <section id="testimonies">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-12 py-36 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Testimonies
          </h2>
          <div className="m-auto flex w-full flex-row gap-16">
            <Skeleton>
              <CardSkeleton />
            </Skeleton>
            <h2 className="content-center text-left">
              {" "}
              Our business model is simple: put our clients’ interests first.
              Sure, that means never charging commissions on trades and offering
              industry-leading interest on your chequing account, but it also
              means a lot more. Like total transparency into your investments
              and an innovative cost structure that ensures{" "}
              <span className="underline">
                {" "}
                we only do well when you do.{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="min-h-screen p-6">
          <Head>
            <title>Frequently Asked Questions</title>
          </Head>
          <h1 className="mb-6 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <ul className="list-none p-0">
            {faqs.map((faq, index) => (
              <li key={index} className="border-t border-gray-300 py-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <span className="text-xl text-black transition-transform group-open:rotate-180">
                      &gt;
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <section
        id="copytrading"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-row items-center space-x-12 text-center">
          <div>
            <h2 className="text-left font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Outperform the market with industry experts. 
            </h2>
            <p className="max-w-[75%] text-left leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Subscribe to your favourite algorithms with confidence by comparing transparent track record and performance history. 
            </p>
          </div>

          <div> 
            <Image
              src={"/images/marketing/copy.jpg"}
              alt="cow"
              width={804}
              height={452}
              className="rounded-md border bg-muted transition-colors"
            />
          </div>  
        </div>
      </section> */}
      {/* <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Passive investing, active returns.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            With active management from top traders and integrated risk management, you can truly invest and forget with SimplyAlgo.
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section> */}
    </>
  )
}
