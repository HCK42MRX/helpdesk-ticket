import Image from "next/image";
import React from "react";

// image
import companyLogo from '@/../assets/icons/companyLogo.png'

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Image src={companyLogo} alt="company logo" className="w-52 h-16 object-cover" />
        <ul className="nav-items flex gap-x-10">
          <li className="stnd-button bg-red-500 text-white">Login</li>
        </ul>
      </div>
    </>
  )
} 