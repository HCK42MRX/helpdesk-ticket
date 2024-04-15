'use client'

import React, { useState, useCallback } from 'react'

// components
import Modal from '../Modal'

// context
import { modalContext } from '@/contexts/modalContext'
import { cn } from '@/lib/utils'

export default function BtnModal ({ btnName, icon, children, headingModal, className }) {
  const [visible, setVisible] = useState(false)
  const handleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])
  return (
    <>
      <modalContext.Provider value={{ visible, setVisible }}>
        <button className={cn('stnd-button bg-slate-300', className)} onClick={handleVisible}>{btnName}{icon}</button>
        {visible ? <Modal heading={headingModal}>{children}</Modal> : null}
      </modalContext.Provider>
    </>
  )
}
