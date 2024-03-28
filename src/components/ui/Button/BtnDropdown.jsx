import React from "react";


export default function BtnDropdown({ children, ...props }) {
  return (
    <div className="bg-slate-300 w-fit stnd-button" {...props}>
      <button>{children}</button>
    </div>
  )
}