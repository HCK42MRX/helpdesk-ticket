import React from "react";

// utils
import { genKey } from "@/utils/genereteKey";


// icon
import { IoSettingsOutline } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";

// components
import SidebarItem from "./SidebarItem/Index";


const dataMenuItems = [
  {
    key: genKey(),
    href: '/dashboard',
    name: 'Dashboard',
    icon: <MdOutlineSpaceDashboard />
  },
  {
    key: genKey(),
    href: '/dashboard/ticket',
    name: 'Ticket',
    icon: <BsTicketPerforated />
  },
  {
    key: genKey(),
    href: '/dashboard/user',
    name: 'User',
    icon: <FaRegUser />
  },
  {
    key: genKey(),
    href: '/dashboard/staff',
    name: 'Staff',
    icon: <LuUsers />
  },
  {
    key: genKey,
    href: '/dashboard/settings',
    name: 'Settings',
    icon: <IoSettingsOutline />
  },
]

export default function Sidebar() {
  return (
    <>
      {dataMenuItems.map(menu => <SidebarItem key={menu.key} href={menu.href}>{menu.icon}{menu.name}</SidebarItem>)}
    </>
  )
}