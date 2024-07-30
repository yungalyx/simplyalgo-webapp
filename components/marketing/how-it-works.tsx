import { howItWorks } from "@/config/marketing"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorks() {
  return <section id="how-it-works" className="container bg-pearl p-8 py-24">
    <div className="space-y-48">
      {howItWorks.map((x) => {
        return (
          <div className="flex-cols flex content-center">
            <div className="w-1/3 flex-none space-y-8">
              <h2 className="pt-8 text-3xl"> {x.title} </h2>
              <p> {x.description} </p>
              {/* <Link
                href={x.href}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {" "}
                {x.cta}{" "}
              </Link> */}
              <Button disabled>
                {x.cta}
              </Button>
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
}


// <h3>Create a strategy</h3>
// <h3>Connect your sources</h3>
// <div> 
// <h3>Share with subscribers</h3>
// <p> Get a link to share with your followers! Earn when users subscribe to your strategy! </p>
// </div>
// <div>
// <h3>Get Paid</h3>
// <p> Earn additional rewards from your subscribers when your strategy outperforms the market! </p>

// </div>
