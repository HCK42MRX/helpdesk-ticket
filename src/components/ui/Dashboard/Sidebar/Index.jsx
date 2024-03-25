import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { genKey } from "@/utils/genereteKey";

// components
import MenuItems from "../MenuItems/Index";


const dataMenuItems = [
  {
    key: genKey,
    href: '/dashboard',
    name: 'Dashboard',
    icon: <AiOutlineDashboard />
  },
  {
    key: genKey,
    href: '/',
    name: 'Dashboard',
    icon: <AiOutlineDashboard />
  },
]



export default function Sidebar() {
  return (
    <>
      {dataMenuItems.map(menu => <MenuItems key={menu.key} href={menu.href}>{menu.icon}{menu.name}</MenuItems>)}
    </>
  )
}