'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Image from 'next/image'

import companyLogo from '@/../assets/icons/companyLogo.png'
import { Card, CardContent } from '@/components/ui/card'
import BtnAction from '@/components/ui/Button/BtnAction'
import login from '@/app/serverActions/formLoginAction'
import { useRouter } from 'next/navigation'

const schema = z.object({
  username: z.string().min(1, { message: 'username harus diisi' }),
  password: z.string().min(1, { message: 'password harus diisi' })
})

export default function FormLogin () {
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState()
  const router = useRouter()
  const { register, resetField, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const handleLogin = async (data, e) => {
    e.preventDefault()
    try {
      startTransition(async () => {
        const result = await login(data)
        if (result === true) {
          return router.push('/dashboard')
        }
        setErrorMessage(result)
        return resetField('password')
      })
    } catch (err) {
      setErrorMessage('server error')
    }
  }

  return (
    <>
      <Card className="border border-black py-10 px-8 w-fit rounded-xl">
        <Image src={companyLogo} alt="company logo" className="w-60 h-14 object-cover" />
        <CardContent className="mt-5">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(handleLogin)}>
            {errorMessage ? <p className='error-message'>{errorMessage}</p> : null}
            <label className="block"><span className="error-message">*</span> Username : </label>
            <input {...register('username', { required: 'harap username diisi' })} type="text" className="px-2" autoComplete="off" />
            {errors.username ? <p className="error-message">{errors.username.message}</p> : null}
            <label className="block"><span className="error-message">*</span> Password : </label>
            <input {...register('password', { required: 'harap password diisi' })} type="password" className="px-2" autoComplete="off" />
            {errors.password ? <p className="error-message">{errors.password.message}</p> : null}
            {isPending ? <BtnAction btnName='Loading...' type='button' className='bg-slate-600 text-white w-fit mt-3 pointer-events-none' /> : <BtnAction btnName='submit' type='submit' className='bg-blue-600 text-white w-fit mt-3' />}
          </form>
        </CardContent>
      </Card>
    </>
  )
}
