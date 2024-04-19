import React from 'react'

// components
import BtnDropdown from '@/components/ui/Button/BtnDropdown'
import BtnRedirect from '@/components/ui/Button/BtnRedirect'

// utils
import { genKey } from '@/utils/genereteKey'
import { supabase } from '@/utils/supabaseConnect'
// icons
import { AiOutlineUserAdd } from 'react-icons/ai'
import { IoIosArrowDropdown } from 'react-icons/io'
import TitlePage from '@/components/ui/Dashboard/TitlePage'

import UserDataTable from '@/components/ui/Card/UserDataTable'
import { revalidatePath } from 'next/cache'

const dropDownContent = [
  {
    key: genKey(),
    content: 'All departement'
  },
  {
    key: genKey(),
    content: 'HR'
  },
  {
    key: genKey(),
    content: 'Dev Ops'
  }
]

export default async function Staff () {
  const { data, error } = await supabase.from('users').select()
  return (
    <>
      <TitlePage title='Staff Members' description='Here you go can see who are you stuff'/>
      <div className="mt-8 flex items-center justify-between">
        <BtnDropdown title='All department' icon={<IoIosArrowDropdown />} className='text-center bg-slate-300'>{dropDownContent.map(c => <p key={c.key} className="stnd-item-dropdown">{c.content}</p>)}</BtnDropdown>
        <BtnRedirect href='/dashboard/staff/add-user' icon={<AiOutlineUserAdd />} className='btn-green-w-icon stnd-button'>Add User</BtnRedirect>
      </div>
      <div className="mt-10">
        {data ? data.map(d => <UserDataTable src={d.imageUrl} key={d.id} title={d.title} username={d.username} role={d.role} openTicket='0' las/>) : null}
      </div>
    </>
  )
}
