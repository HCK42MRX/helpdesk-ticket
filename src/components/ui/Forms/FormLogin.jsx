'use client'

import React from "react"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'


import Image from "next/image";

import companyLogo from '@/../assets/icons/companyLogo.png'
import { Card, CardContent } from "@/components/ui/card";
import BtnAction from "@/components/ui/Button/BtnAction";
import login from "@/app/serverActions/formLoginAction";


const schema = z.object({
  username: z.string().min(1, {message: 'username harus diisi'}),
  password: z.string().min(1, {message: 'password harus diisi'}),
})


export default function FormLogin() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit = async (data,e) => {
    const result = await login(data.username,data.password)
    if(result){
      return router.push('/dashboard')
    }
  }
  return (
    <>
      <Card className="border border-black py-10 px-8 w-fit rounded-xl">
        <Image src={companyLogo} alt="company logo" className="w-60 h-14 object-cover" />
        <CardContent className="mt-5">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
            <label className="block"><span className="error-message">*</span> Username : </label>
            <input {...register("username")} type="text" className="px-2" autoComplete="off"/>
            {errors.username ? <p className="error-message">{errors.username.message}</p> : null}
            <label className="block"><span className="error-message">*</span> Password : </label>
            <input {...register("password")} type="password" className="px-2" autoComplete="off"/>
            {errors.password ? <p className="error-message">{errors.password.message}</p> : null}
            <BtnAction btnName='submit' className='bg-blue-600 text-white w-fit mt-3'/>
          </form>
        </CardContent>
      </Card>
    </>
  )
}