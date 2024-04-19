'use client'

import React from 'react'

import { cn } from '@/lib/utils'

export default function BtnAction ({ btnName, type, icon, onClick, className, disabled, ...props }) {
  return (
    <>
      <button type={type} className={cn('stnd-button', className)} onClick={onClick} aria-disabled={disabled || 'false'}>{btnName}{icon}</button>
    </>
  )
}
