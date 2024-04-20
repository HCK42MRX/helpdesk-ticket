'use server'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export default async function storeToken (request) {
  const token = jwt.sign(request, process.env.SECRET_JWT)
  cookies().set({
    name: 'accessToken',
    value: token,
    httpOnly: false,
    sameSite: 'strict',
    secure: false
  })
}
