'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import InputOption from '../Input/InputOption'
import InputField from '../Input/InputField'

import { genKey } from '@/utils/genereteKey'
import BtnAction from '../Button/BtnAction'
import InputImage from '../Input/InputImage'
import addUserAction from '@/app/serverActions/formAddUserAction'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'
import { getCookie } from 'cookies-next'

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

export const addUserSchema = z.object({
  title: z.string().min(1, { message: 'title harus diisi' }),
  username: z.string().min(1, { message: 'username harus diisi' }),
  role: z.string().min(1, { message: 'role harus diisi' }),
  departement: z.string().min(1, { message: 'departement harus dipilih' }),
  password: z.string().min(1, { message: 'password harus diisi' }),
  imageFile: z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' })
})

export default function FormAddUser ({ className }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(addUserSchema)
  })
  const onSubmit = async (data, e) => {
    try {
      console.log('aku diklik')
      const file = {
        image: data.imageFile[0]
      }
      const form = new FormData()
      form.append('imageFile', file.image)
      form.append('title', data.title)
      form.append('username', data.username)
      form.append('role', data.role)
      form.append('departement', data.departement)
      form.append('password', data.password)
      await addUserAction(form)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('flex justify-between ', className)}>
          <div className="flex flex-col gap-y-3 w-full border py-3 px-5">
            <InputField name='title' register={register} errors={errors} type='text' placeholder='title' />
            <InputField name='username' register={register} errors={errors} type='text' placeholder='username' />
            <InputField name='role' register={register} errors={errors} type='text' placeholder='role' />
            <InputOption name='departement' register={register} errors={errors}>
              {optionContent.map(op => <option key={op.key} value={op.content}>{op.content}</option>)}
            </InputOption>
            <InputField label='Password' register={register} errors={errors} name='password' type='text' placeholder='Password' />
            {isSubmitting ? <BtnAction btnName='...loading' type='button' disabled={isSubmitting} className='bg-slate-600 w-fit text-white mt-3' /> : <BtnAction btnName='submit' type='submit' disabled={isSubmitting} className='bg-blue-600 w-fit text-white mt-3' />}
          </div>
          <div className="upload-image flex items-center justify-center w-full border">
            <InputImage name='imageFile' register={register} errors={errors} />
          </div>
        </div>
      </form>
    </>
  )
}
