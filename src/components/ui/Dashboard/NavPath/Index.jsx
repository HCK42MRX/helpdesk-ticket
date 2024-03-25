"use client"

import { usePathname } from "next/navigation";
import React from "react";


export default function NavPath(){
  const pathname = usePathname();
  return <p className="text-slate-500 text-sm  pointer-events-none">{pathname}</p>
}