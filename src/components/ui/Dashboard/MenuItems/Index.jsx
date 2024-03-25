import Link from "next/link";
import React from "react";

export default function MenuItems({children, href}){
  return(
    <>
      <Link href={href} className="flex items-center gap-x-2 pt-5 font-medium text-lg">{children}</Link>
    </>
  )
}