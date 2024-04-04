'use client'

import React from "react";
import { redirect } from 'next/navigation'
import { CgProfile } from "react-icons/cg";

import { cn } from "@/lib/utils";
import BtnDropdown from "../../Button/BtnDropdown";

import { GrLogout } from "react-icons/gr";
import { genKey } from "@/utils/genereteKey";
import Link from "next/link";

const profileItem = [
  {
    key: genKey(),
    icon: <GrLogout/>,
    title: 'logout',
    href: '/'
  },
]


export default function ProfileCard({className}) {
  return (
    <div className={cn("flex items-center gap-x-2 py-3 w-fit", className)}>
      <BtnDropdown icon={<CgProfile className="size-8"/>} classButton='flex flex-row-reverse' title='budi sanjoyo'>
        {profileItem ? profileItem.map(proItem => <Link key={proItem.key} href={proItem.href} onClick={proItem.func} className="stnd-item-dropdown flex items-center gap-x-3">{proItem.icon}{proItem.title}</Link>) : null}
      </BtnDropdown>
    </div>
  )
}