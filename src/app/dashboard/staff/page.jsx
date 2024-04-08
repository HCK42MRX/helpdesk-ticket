import React from "react";
import axios from "axios";

// components
import BtnDropdown from "@/components/ui/Button/BtnDropdown";
import BtnRedirect from "@/components/ui/Button/BtnRedirect";

// utils
import { genKey } from "@/utils/genereteKey";

// icons
import { AiOutlineUserAdd } from "react-icons/ai";
import dynamic from "next/dynamic";
import { IoIosArrowDropdown } from "react-icons/io";
import TitlePage from "@/components/ui/Dashboard/TitlePage";

const DynamicUserDataCard = dynamic(() => import("@/components/ui/Card/UserDatacard"), { ssr: false})

const dropDownContent = [
  {
    key: genKey(),
    content: 'All departement',
  },
  {
    key: genKey(),
    content: 'HR',
  },
  {
    key: genKey(),
    content: 'Dev Ops',
  }
]

async function fetchUserData() {
  const userAPI = 'https://dummyjson.com/users?limit=3&select=firstName,image,company'
  const result = await axios.get(userAPI)
  return result.data.users
}

export default async function Staff() {
  const getData = await fetchUserData()
  const today = new Date().toLocaleDateString()
  return (
    <>
      <TitlePage title='Staff Members' description='Here you go can see who are you stuff'/>
      <div className="mt-8 flex items-center justify-between">
        <BtnDropdown title='All department' icon={<IoIosArrowDropdown />} className='text-center bg-slate-300'>{dropDownContent.map(c => <p key={c.key} className="stnd-item-dropdown">{c.content}</p>)}</BtnDropdown>
        <BtnRedirect href='/dashboard/staff/add-user' icon={<AiOutlineUserAdd />} className='btn-green-w-icon stnd-button'>Add User</BtnRedirect>
      </div>
      <div className="mt-10">
        {getData ? getData.map(em => <DynamicUserDataCard key={em.id} src={em.image} alt={em.firstName} openTicket='0' closedTicket='0' role={em.company.title} href='/' lastLogin={today} />) : null}
      </div>
    </>
  )
}