"use client"
import { useState } from "react"
import { Button } from "./ui/button"


interface APIContainerProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
  id: string
}


export function APIContainer({
  children,
  icon,
  type = "default",
  id
}: APIContainerProps) {

  const [hidden, isHidden] = useState(true)

  return (
    <div className="space-y-8 py-8">
      <div className="flex flex-row justify-between gap-16">
        <div className="space-y-4">
          <div>
            <h3 className="text-l font-bold"> Strategy ID </h3>
            <p> *************************** </p>

          </div>
          <div>
            <h3 className="text-l font-bold"> Sharable Endpoint Link </h3>
            <p>
              https://www.algosimply.com / dwandoinwaid
            </p>

          </div>
          <div>
            <h3 className="text-l font-bold"> Rest API Key </h3>
            <input type={hidden ? 'password' : 'text'} value={id|| ""} onClick={() => isHidden(!hidden)}/> 
          </div>
        </div>
        <div>
          <h3 className="text-l font-bold"> Key Security </h3>

          Treat your API Key like a password!
          Anyone who has your REST API key will be able to send signals to your subscribers from your strategy. 
          Do NOT expose the REST API Key in your application code. 
          DO NOT share it on Github or anywhere else online. 

        </div>
      </div>
      <div className="space-y-4"> 
        <h3 className="text-l font-bold"> Manage This Strategy </h3>
        <Button> Disable Strategy </Button>
        <p>
          You may disable this strategy to prevent new and scheduled notifications from being delivered. 
          Apps you manually disable can be instantly re-enabled at any time. 
        </p>
        {/* <APIToggleButton variant="destructive" params={{
          strategyId: props.strategyId
        }}/> */}
      </div>
    </div>
  )
}
