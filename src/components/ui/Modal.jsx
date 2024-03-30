import React, { useCallback, useContext} from "react";

import { RxCross2 } from "react-icons/rx";

import { modalContext } from "@/contexts/modalContext";

export default function Modal({ children, heading }) {   
  const {visible, setVisible} = useContext(modalContext)
  const handleVisible = useCallback(() => {
    setVisible(!visible)
  },[visible, setVisible])
  return (
    <div className="fixed flex justify-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={handleVisible}>
      <div className="box-modal mt-20 relative bg-white h-20 w-96 py-3 px-5 rounded-lg">
        <span className="flex justify-end" onClick={handleVisible}><RxCross2 /></span>
        <h1 className="heading">{heading}</h1>
        <div className="children mt-2 container-custom">
          {children}
        </div>
      </div>
    </div>
  )
}