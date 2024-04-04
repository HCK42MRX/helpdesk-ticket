"use client"

import React, { useCallback, useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export default function BtnDropdown({ children, title, className, icon, classButton,...props }) {
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
        <button className={cn("stnd-button", classButton)}>{title}{icon}</button>
      </div>

      {/* Dropdown content */}
      {itemShow ?
        <div className="bg-white w-fit stnd-container-dropdown mt-1">
          {children}
        </div>
        : null}
    </div>
  )
}