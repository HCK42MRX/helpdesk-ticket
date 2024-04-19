'use server'

import bcrypt from 'bcrypt'
import { supabase } from '@/utils/supabaseConnect'

export default async function login (formData) {
  const { username, password } = formData
  try {
    const { data, error } = await supabase.from('users').select('*')
    if (error) {
      throw new Error('server error')
    }
    const user = data.find(d => d.username === username)
    if (!user) {
      return 'username atau password salah'
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) {
      return 'username atau password salah'
    }
    return true
  } catch (err) {
    return err.message
  }
}
