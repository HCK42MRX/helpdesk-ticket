'use client'

import React from 'react'

import { cn } from '@/lib/utils'

export default function BtnAction ({ btnName, type, icon, onClick, className, ...props }) {
  return (
    <>
      <button type={type} className={cn('stnd-button', className)} onClick={onClick}>{btnName}{icon}</button>
    </>
  )
}
