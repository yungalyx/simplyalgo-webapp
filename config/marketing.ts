import { MarketingConfig } from "types"
import SignUpSVG from "@/public/images/marketing/grape-14.svg";
import SubscribeSVG from "@/public/images/marketing/grape-8.svg";
import DoneSVG from "@/public/images/marketing/grape-5.svg";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "How it works",
      href: "/how-it-works"
    },
    // {
    //   title: "Become a Strategist",
    //   href: "/strategist",
    // },
    
    // {
    //   title: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
    // {
    //   title: "Documentation",
    //   href: "/docs",
    // },
  ],
}

// ML Tech works with Institutional Investors. Our investors include Family Offices, Fund of Funds, Custodians and Prime Brokers, Corporate Treasuries, Trading Desks and Traditional Asset Management firms looking for Crypto exposure.

export const solutions: any[] = [
  {
    title: 'Proprietary Trading Firms', 
    description: 
    'Amplify your returns through increased liquidity and performance fees provided by institutional investors. SimplyAlgo can help institutional trading teams access to capital and liquidity across numerous different exchanges.'

  }, 
  {
    title: 'Hedge Funds',
    description: 'Impress your clientele by increasing exposure to strategies and assets that aligns with your business goals'
  },
  {
    title: 'Traders',
    description: 'Gain access to strategies used by trading firms and trade with your own money, on your own platform, your own rules.'
  },
  {
    title: 'Strategist',
    description: 'Prove your skills for free by using your own strategies and compete against our verfied algos to gain additional performance fees'
  },

 
]

export const howItWorks: any[] = [
  {
    title: "Sign Up",
    description: "We learn about your risk tolerance and your investment goals to suggest a suitable strategy just for you.", 
    cta: "Sign Up",
    href: "/sign-up",
    img: SignUpSVG
  },
  {
    title: "Explore",
    description: "Explore more of our strategies with transparent performance tracking and subscribe to one that you like.", 
    cta: "Explore Strategies",
    href: "/explore",
    img: SubscribeSVG
  },
  {
    title: "Sleep soundly",
    description: "Sleep soundly and live comfortably knowing that everything is being handled by the market's best strategies.", 
    cta: "How much can I make?",
    href: "/retirement",
    img: DoneSVG
  }
]