'use server'

import { createClient } from "@supabase/supabase-js"
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation"


const saltRound = 10

const supabaseUrl = process.env.SUPABASE_URL
const supabasekey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabasekey)


export default async function login(username, password){
  try{
  const {data, error} = await supabase.from('users').select('*')
  const user = data.find(d => d.username === username)
  if(!user){
    return false
  }
  const comparePassword = bcrypt.compare(password, user.password)
  if(!comparePassword){
    return false
  } 
  return true
  }catch(err){
    return false
  }
}


// [0: Object { id: 1, title: "Software developer", username: "admin", … }]