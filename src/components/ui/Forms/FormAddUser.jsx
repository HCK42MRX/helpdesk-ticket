'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputOption from '../Input/InputOption'
import InputField from '../Input/InputField'

import { genKey } from '@/utils/genereteKey'
import BtnAction from '../Button/BtnAction'
import { useForm } from 'react-hook-form'
import InputImage from '../Input/InputImage'

// form action
import addUserAction from '@/app/serverActions/formAddUserAction'

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

const schema = z.object({
  username: z.string().min(1, { message: 'username harus diisi' }),
  role: z.string().min(1, { message: 'role harus diisi' }),
  departement: z.string().min(1, { message: 'departement harus dipilih' }),
  password: z.string().min(1, { message: 'password harus diisi' })
})

export default function FormAddUser ({ className }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log(await addUserAction(data))
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('flex justify-between ', className)}>
          <div className="flex flex-col gap-y-3 w-full border py-3 px-5">
            <InputField register={register} errors={errors} label='username' name='username' type='text' placeholder='Username' />
            <InputField register={register} errors={errors} label='Role' name='role' type='text' placeholder='role' />
            <InputOption register={register} errors={errors} name='departement'>
              {optionContent.map(op => <option key={op.key} value={op.content}>{op.content}</option>)}
            </InputOption>
            <InputField register={register} label='Password' errors={errors} name='password' type='text' placeholder='Password, default=12345678' />
            <BtnAction btnName='submit' type='submit' className='bg-blue-600 w-fit text-white mt-3' />
          </div>
          <div className="upload-image flex items-center justify-center w-full border">
              <InputImage register={register} name='upload-image' id='upload-image' />
          </div>
        </div>
      </form>
    </>
  )
}
