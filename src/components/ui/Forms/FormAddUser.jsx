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
  password: z.string().min(1, { message: 'password harus diisi' })
})

export default function FormAddUser ({ className }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('flex justify-between', className)}>
          <div className="flex flex-col gap-y-3 w-full border py-3 px-5">
            <InputField register={register} label='username' name='username' type='text' />
            {errors.username ? <p className='error-message'>{errors.username.message}</p> : null}
            <InputField register={register} label='Role' name='role' type='text' />
            {errors.role ? <p className='error-message'>{errors.role.message}</p> : null}
            <InputField register={register} label='Password' name='password' type='text' />
            {errors.password ? <p className='error-message'>{errors.password.message}</p> : null}
            <BtnAction btnName='submit' type='submit' className='bg-blue-600 w-fit text-white mt-3' />
          </div>
          <div className="upload-image flex items-center justify-center w-full border">
              <InputImage name='upload-image' id='upload-image' />
          </div>
        </div>
      </form>
    </>
  )
}
