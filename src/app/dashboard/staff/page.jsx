import React, { useCallback } from "react";
import axios from "axios";

// components
import BtnDropdown from "@/components/ui/Button/BtnDropdown";
import BtnRedirect from "@/components/ui/Button/BtnRedirect";
// icons
import { AiOutlineUserAdd } from "react-icons/ai";
import dynamic from "next/dynamic";
import { genKey } from "@/utils/genereteKey";

const DynamicUserDataCard = dynamic(() => import("@/components/ui/Card/UserDatacard"), { ssr: false })

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
      <h1 className="sub-title">Staff Members</h1>
      <p className="paragraph mt-2">Here you go can see who are you stuff</p>
      <div className="mt-8 flex items-center justify-between stnd-screen">
        <BtnDropdown title='All department'>{dropDownContent.map(c => <p key={c.key} className="border-b-2 py-2 cursor-pointer">{c.content}</p>)}</BtnDropdown>
        <BtnRedirect href='/add-user' icon={<AiOutlineUserAdd />} className='btn-green-w-icon stnd-button'>Tambah User</BtnRedirect>
      </div>
      <div className="mt-10">
        {getData ? getData.map(em => <DynamicUserDataCard key={em.id} src={em.image} alt={em.firstName} openTicket='0' closedTicket='0' role={em.company.title} href='/' lastLogin={today} />) : null}
      </div>
    </>
  )
}