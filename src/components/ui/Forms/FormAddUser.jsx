import { cn } from '@/lib/utils'
import React from 'react'
import InputOption from '../Input/InputOption'
import InputField from '../Input/InputField'

import { genKey } from '@/utils/genereteKey'
import BtnAction from '../Button/BtnAction'

const optionContent = [
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

export default function FormAddUser ({ className }) {
  return (
    <>
      <div className={cn('flex', className)}>
        <div className="upload-image flex items-center h-56">
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-col gap-x-2 gap-y-3">
          <InputField label='Name Staff' type='text' />
          <InputField label='Role' type='text' />
          <InputOption label='Department'>
            {/* options */}
            {optionContent.map(op => <option key={op.key} value={op.content}>{op.content}</option>)}
          </InputOption>
          <InputField label='Password' type='text' />
          <BtnAction btnName='submit' className='bg-blue-600 w-fit text-white mt-3'/>
        </div>
      </div>
    </>
  )
}
