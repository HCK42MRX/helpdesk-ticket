"use client"

import React, { useCallback, useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export default function BtnDropdown({ children, title, classChildren, className, icon,...props }) {
  const [itemShow, setItemShow] = useState(false)
  let menuRef = useRef()

  const handleShow = useCallback((e) => {
    setItemShow(!itemShow)
  }, [itemShow])

  // click outside to close
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setItemShow(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  },[])
  return (
    <div className="block" ref={menuRef}>
      <div onClick={handleShow} className={cn("relative cursor-pointer", className)} {...props}>
        <button className="stnd-button bg-slate-300">{title}{icon}</button>
      </div>

      {/* Dropdown content */}
      {itemShow ?
        <div className="bg-white w-72 stnd-item-dropdown mt-1">
          {children}
        </div>
        : null}
    </div>
  )
}