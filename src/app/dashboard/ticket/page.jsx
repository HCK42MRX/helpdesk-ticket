import TitlePage from "@/components/ui/Dashboard/TitlePage";
import React from "react";

// component
import ContainerModal from "@/components/ui/ContanierModal";

import { IoFilterOutline } from "react-icons/io5";


export default function Ticket(){
  return (
    <>
      <TitlePage title='Tickets' description='Here you go can see ticket from staff'/>
      <ContainerModal className='mt-8 w-32 justify-center' btnName='Filter' heading='test' icon={<IoFilterOutline />}>
        <h1></h1>
      </ContainerModal>
    </>
  )
} 