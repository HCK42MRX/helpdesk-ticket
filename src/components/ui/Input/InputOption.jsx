"use client"

import React,{isValidElement, Children, useState} from "react";

import { cn } from "@/lib/utils";

export default function InputOption({ label, className, children}) {

  const filteredChildren = Children.map(children, (child) => {
    if(isValidElement(child) && child.type === 'option'){
      return child
    }
    throw new Error('OptionsWithLabel content must be an option')
  })

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={label} className="">{label}</label>
      <select id="cars" className="mt-2 w-fit stnd-button bg-transparent border border-black">
        {/* this content must be an options */}
        {filteredChildren}
      </select>
    </div>
  )
}