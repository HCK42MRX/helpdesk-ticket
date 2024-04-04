import React, { useCallback, useContext, useRef } from "react";

import { RxCross2 } from "react-icons/rx";

import { modalContext } from "@/contexts/modalContext";

// import component
import BtnAction from "./Button/BtnAction";


export default function Modal({ children, heading }) {
  const modalBox = useRef()
  const { visible, setVisible } = useContext(modalContext)
  const handleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible, setVisible])
  const handleDontClose = useCallback((e) => {
    if (!modalBox.current.contains(e.target)) {
      modalBox.current.classList.add('scale-90')
      setTimeout(() => {
        modalBox.current.classList.remove('scale-90')
      }, 200)
    }
  }, [modalBox])
  return (
    <div className="fixed z-50 flex justify-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={handleDontClose}>
      <div className="box-modal mt-20 relative bg-white h-fit w-fit py-3 px-5 rounded-lg stnd-transition" ref={modalBox}>
        <span className="flex justify-end"><RxCross2 className="size-7 cursor-pointer hover:text-red-600 stnd-transition" onClick={handleVisible} /></span>
        <h1 className="heading">{heading}</h1>
        <div className="children mt-2 container-custom">
          {children}
          <div className="flex justify-end">
          <BtnAction className='white mt-8 text-black hover:bg-red-600 border border-black hover:text-white hover:border-white stnd-transition' btnName='close' onClick={handleVisible} />
          </div>
        </div>
      </div>
    </div>
  )
}