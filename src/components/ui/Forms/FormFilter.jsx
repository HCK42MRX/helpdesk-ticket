'use client'

import React from 'react'

import InputOption from '@/components/ui/Input/InputOption'
import BtnAction from '@/components/ui/Button/BtnAction'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
  departement: z.string().min(1, { message: 'departement harus dipilih' })
})

export default function FormFilter () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })
  return (<>
    <div className="flex gap-x-5">
      <InputOption register={register} name='departement' label='Departement :' className='mt-5'>
        <option value='odong odong'>odong odng</option>
        <option value="hello world">Hello world</option>
      </InputOption>
    </div>
    <BtnAction type='submit' className='bg-blue-800 mt-8 text-white' btnName='Submit' />
  </>
  )
}
