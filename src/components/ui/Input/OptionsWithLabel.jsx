import React from "react";

import { cn } from "@/lib/utils";

export default function OptionsWithLabel({ label, className, children}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={label} className="sub-title">{label}</label>
      <select id="cars" className="mt-4 w-fit stnd-button bg-transparent border-2 border-black" defaultChecked=''>
        {children}
      </select>
    </div>
  )
}