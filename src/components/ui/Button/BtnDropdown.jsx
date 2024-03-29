"use client"

import React, { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

export default function BtnDropdown({ children, title, classChildren,...props }) {
  const [itemShow, setItemShow] = useState(false)
  const handleShow = useCallback(() => {
    itemShow ? setItemShow(false) : setItemShow(true)
  }, [itemShow])
  return (
    <div className="block">
      <div onClick={handleShow} className="bg-slate-300 w-fit stnd-button relative cursor-pointer" {...props}>
        <button>{title}</button>
      </div>
      {itemShow ?
        <div className="bg-white w-60 stnd-dropdown mt-1">
          {children}
        </div>
        : null}
    </div>
  )
}