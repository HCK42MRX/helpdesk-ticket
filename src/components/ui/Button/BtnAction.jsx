import React from "react";

import { cn } from "@/lib/utils";


export default function BtnAction({ btnName, icon, onClick, className }) {
  return (
    <>
      {btnName ? <button className={cn("stnd-button", className)} onClick={onClick}>{btnName}</button> : <button className={cn("stnd-button", className)} onclick={onClick}>{icon}</button>}
    </>
  )
}