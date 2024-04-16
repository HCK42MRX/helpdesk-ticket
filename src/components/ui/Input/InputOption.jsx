'use client'

import React, { isValidElement, Children } from 'react'

import { cn } from '@/lib/utils'

export default function InputOption ({ register, label, name, className, errors, children }) {
  const filteredChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === 'option') {
      return child
    }
    throw new Error('OptionsWithLabel content must be an option')
  })

  return (
    <div className={cn('flex flex-col', className)}>
      {label ? <label htmlFor={label}><span className="error-message">* </span>{label} : </label> : null}
      <select defaultValue='' {...register(name)} className="mt-2 stnd-button bg-transparent border border-black">
        <option value='' disabled>Select Departement</option>
        {filteredChildren}
        {/* this content must be an options */}
        {/* <option></option> */}
      </select>
      {errors[name] ? <p className='error-message'>{errors[name].message}</p> : null}
    </div>
  )
}
