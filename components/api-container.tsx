import { cn } from "@/lib/utils"
import APIToggleButton from "./api-toggle-button"

interface APIContainerProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function APIContainer({
  children,
  icon,
  type = "default",
  ...props
}: APIContainerProps) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <p> Strategy ID </p>
          <p> *************************** </p>
          <p> REST API Key </p>
          <p> ***************************** </p>
        </div>
        <div>
          Key Security

          Treat your API Key like a password
          Anyone who has your REST API key will be able to send signals to your subscribers from your strategy. 
          Do NOT expose the REST API Key in your application code. 
          DO NOT share it on Github or anywhere else online. 

        </div>
      </div>
      <div> 
        Manage ths App
        <p>
          Disable App
        </p>
        <p>
          You may disable this strategy to prevent new and scheduled notifications from being delivered. 
          Apps you manually disable can be instantly re-enabled at any time. 
        </p>
        <APIToggleButton variant="destructive" params={ } />
      </div>
    </div>
  )
}
