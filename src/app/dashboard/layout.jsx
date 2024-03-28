import React from "react";
import Sidebar from "@/components/ui/Dashboard/Sidebar/Index";


// components
import NavPath from "@/components/ui/Dashboard/NavPath/Index";
import CurrentPage from "@/components/ui/Dashboard/NavPath/CurrentPage";

export default function Layout({ children }) {
  return (
    <div className="flex items-baseline">
      <aside className="bg-slate-800 w-[200px] h-screen pl-5 text-white font-medium">
        <Sidebar />
      </aside>
      <main className="pl-5">
        <div className="currentPath gap-x-5 flex items-center mb-5">
          <CurrentPage /> |
          <NavPath />
        </div>
        {children}
      </main>
    </div>
  )
}