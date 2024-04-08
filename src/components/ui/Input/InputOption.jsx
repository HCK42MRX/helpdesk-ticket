'use client'

import React, { isValidElement, Children } from 'react'

import { cn } from '@/lib/utils'

export default function InputOption ({ label, className, children }) {
  const filteredChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === 'option') {
      return child
    }
    throw new Error('OptionsWithLabel content must be an option')
  })

  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={label}><span className="error-message">* </span>{label} : </label>
      <select id="cars" className="mt-2 w-fit stnd-button bg-transparent border border-black">
        {/* this content must be an options */}
        {/* <option></option> */}
        {filteredChildren}
      </select>
    </div>
  )
}
