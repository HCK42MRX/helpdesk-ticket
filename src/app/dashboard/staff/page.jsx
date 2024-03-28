import React, { useCallback } from "react";
import axios from "axios";

// components
import BtnDropdown from "@/components/ui/Button/BtnDropdown";
import BtnRedirect from "@/components/ui/Button/BtnRedirect";
// icons
import { AiOutlineUserAdd } from "react-icons/ai";
import UserDataCard from "@/components/ui/Card/UserDatacard";


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
        <BtnDropdown>All department</BtnDropdown>
        <BtnRedirect href='/add-user' icon={<AiOutlineUserAdd />} className='btn-green-w-icon stnd-button'>Tambah User</BtnRedirect>
      </div>
      <div className="mt-10">
        {getData.map(em => <UserDataCard key={em.id} src={em.image} alt={em.firstName} openTicket='0' closedTicket='0' role={em.company.title} href='/' lastLogin={today} />)}
      </div>
    </>
  )
}