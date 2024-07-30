"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function DevFirst() {

  return (
    <div className='container my-36'>
      <div className='mx-auto text-center'>
        <h1 className="text-xl text-accent_purple">
          Developer First Design
        </h1>
        <h2 className='text-6xl font-bold'> 
          Making the switch is as simple as <span className='text-accent_purple'> done </span>
        </h2>
      </div>
    
      <div className='mx-auto mt-20 flex flex-row items-center gap-24'>
        <div className='w-1/3'>
          <h3 className="pb-2 text-xl font-semibold"> Frictionless integration </h3>
          SimplyAlgo provides a single, elegant endpoint that mimics the exchange endpoints that you use, meaning developers can immediately connect their strategies with a single line of code change, and deploy their strategies to exchanges worldwide. 
        </div>
        <div className='w-2/3'>
          <CodeBlock/>
        </div>
      </div> 
  
    </div>
  );
}

const code = {
  okx: `async function placeOrder(symbol, side, type, quantity) {
      // const endpoint = 'https://api.binance.com/api/v3/order';
      const endpoint = https://api.simplyalgo.com/v1/order;
      const signature = signRequest(queryString, secretKey);
      const url = '{endpoint}/{queryString}&signature={signature}';

      try {
        const response = await axios.post(url, null, {
          headers: {
            'X-MBX-APIKEY': apiKey,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }`,
  binance: `async function placeOrder(symbol, side, type, quantity) {
      // const endpoint = 'https://api.binance.com/api/v3/order';
      const endpoint = https://api.simplyalgo.com/v1/order;
      const signature = signRequest(queryString, secretKey);
      const url = '{endpoint}/{queryString}&signature={signature}';

      try {
        const response = await axios.post(url, null, {
          headers: {
            'X-MBX-APIKEY': apiKey,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }`,
    alpaca: `async function placeOrder(symbol, side, type, quantity) {
      // const endpoint = 'https://api.binance.com/api/v3/order';
      const endpoint = https://api.simplyalgo.com/v1/order;
      const signature = signRequest(queryString, secretKey);
      const url = '{endpoint}/{queryString}&signature={signature}';

      try {
        const response = await axios.post(url, null, {
          headers: {
            'X-MBX-APIKEY': apiKey,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }`,
    FIX: `async function placeOrder(symbol, side, type, quantity) {
      // const endpoint = 'https://api.binance.com/api/v3/order';
      const endpoint = https://api.simplyalgo.com/v1/order;
      const signature = signRequest(queryString, secretKey);
      const url = '{endpoint}/{queryString}&signature={signature}';

      try {
        const response = await axios.post(url, null, {
          headers: {
            'X-MBX-APIKEY': apiKey,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }`,
  }

function CodeBlock() {

  return (
    <Tabs defaultValue="okx">
      <TabsList className='grid w-full grid-cols-4'>
        {Object.entries(code).map(([platform, example]) => {
          return <TabsTrigger value={platform}> {platform.toUpperCase()} </TabsTrigger>
        })}
      </TabsList>
      {Object.entries(code).map(([language, example]) => {
        return <TabsContent value={language}>
        <div className='relative mx-auto w-full flex-auto'>
          <pre className='flex min-h-full text-sm leading-6'>
            <div className='hidden w-[3.125rem] flex-none select-none py-4 pr-4 text-right text-accent_purple md:block'>
              {Array(20).fill(0).map((e, i) => {
                return <p> {i} <br></br></p>
              })}
            </div>
            <code className='over-flow-auto relative block flex-auto bg-inherit p-4'>
              {example}
            </code>
          </pre>
        </div>
      </TabsContent>
      })}
    </Tabs>
   
    
  )

}
