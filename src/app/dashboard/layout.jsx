import React from "react";
import Sidebar from "@/components/ui/Dashboard/Sidebar/Index";


// components
import NavPath from "@/components/ui/Dashboard/NavPath/Index";

export default function Layout({ children }) {
  return (
    <div className="flex items-baseline">
      <div className="bg-slate-800 w-[200px] h-screen pl-5 text-white font-medium">
        <Sidebar />
      </div>
      <div className="pl-5 flex gap-x-5 items-center">
        {children} |
        <NavPath/>
      </div>
    </div>
  )
}