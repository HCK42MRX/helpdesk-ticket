import TitlePage from "@/components/ui/Dashboard/TitlePage";
import React from "react";

// component
import ContainerModal from "@/components/ui/ContanierModal";

import { IoFilterOutline } from "react-icons/io5";
import OptionsWithLabel from "@/components/ui/Input/OptionsWithLabel";


export default function Ticket(){
  return (
    <>
      <TitlePage title='Tickets' description='Here you go can see ticket from staff'/>
      <ContainerModal className='mt-8 w-32 justify-center' btnName='Filter' headingModal='test' icon={<IoFilterOutline />}>
        <div className="flex flex-col">
          <OptionsWithLabel label='pilih anjing' className='mt-5'/>
        </div>
      </ContainerModal>
    </>
  )
} 