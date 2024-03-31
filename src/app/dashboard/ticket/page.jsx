import TitlePage from "@/components/ui/Dashboard/TitlePage";
import React, {useCallback} from "react";

// component
import ContainerModal from "@/components/ui/ContanierModal";

import { IoFilterOutline } from "react-icons/io5";
import InputOption from "@/components/ui/Input/InputOption";
import BtnAction from "@/components/ui/Button/BtnAction";

// context


export default function Ticket() {
  return (
    <>
      <TitlePage title='Tickets' description='Here you go can see ticket from staff' />
      <ContainerModal btnClose={true} className='mt-8 w-32 justify-center' btnName='Filter' headingModal='Filter Data' icon={<IoFilterOutline />}>
        <div className="flex gap-x-5">
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
          <InputOption label='Departement :' className='mt-5'>
            <option value='odong odong'>odong odng</option>
            <option value="hello world">Hello world</option>
          </InputOption>
        </div>
        <BtnAction className='bg-blue-800 mt-8 text-white' btnName='Submit' />
      </ContainerModal>
    </>
  )
} 