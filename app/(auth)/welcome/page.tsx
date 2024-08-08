import Link from "next/link"

import { Metadata } from "next"
import React from "react"
import { UserWelcomeForm } from "../../../components/auth/user-welcome-form"

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Let us get to know you a bit better!",
}

export default function WelcomePage() {
  return <div>
    Welcome 
  </div>
}
