'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SidebarItem ({ children, href }) {
  const pathname = usePathname()

  const isActive = href => pathname === href ? 'active-item' : 'sidebar-item'
  return (
    <>
      <Link href={href} className={isActive(href)}>{children}</Link>
    </>
  )
}
