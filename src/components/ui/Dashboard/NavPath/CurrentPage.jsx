"use client"

import React from "react"
import { usePathname } from "next/navigation"

export default function CurrentPage(){
  const pathname = usePathname()
  return <h1 className="current-page capitalize">{pathname.replace(/^\/|\/.*$/g, '')}</h1>
}