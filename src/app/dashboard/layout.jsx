import React, { Suspense } from "react";
import Sidebar from "@/components/ui/Dashboard/Sidebar/Index";


// components
import NavPath from "@/components/ui/Dashboard/NavPath/Index";
import CurrentPage from "@/components/ui/Dashboard/NavPath/CurrentPage";
import ProfileCard from "@/components/ui/Card/ProfileCard";

import Loading from "../loading";

export default function Layout({ children }) {
  return (
      <div className="flex items-baseline">
        <aside className="bg-slate-800 w-fit px-8 h-screen pl-5 text-white font-medium">
          <Sidebar />
        </aside>
        <main className="pl-5">
          <div className="currentPath gap-x-5 flex items-center mb-5 relative stnd-screen">
            <ProfileCard className='absolute -top-4 right-0' />
            <CurrentPage /> |
            <NavPath />
          </div>
          {children}
        </main>
      </div>
  )
}