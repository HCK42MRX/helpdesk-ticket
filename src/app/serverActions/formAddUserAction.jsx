'use server'

import bcrypt from 'bcrypt'
import { supabase } from '@/utils/supabaseConnect'
import uploadImageSupabase from '@/utils/uploadImagetoSupabase'

export default async function addUserAction (formData) {
  if (!formData) {
    console.log(false)
    return
  }
  try {
    const newData = {
      title: formData.get('title'),
      username: formData.get('username'),
      role: formData.get('role'),
      departement: formData.get('departement'),
      password: formData.get('password'),
      image: formData.get('imageFile')
    }
    const { title, username, role, departement, password, image } = newData
    const hashPassword = await bcrypt.hash(password, 10)
    const uploadedImage = await uploadImageSupabase(image)
    if (uploadedImage.error && uploadedImage.message) {
      console.log(uploadedImage.message)
      return
    }
    const { error } = await supabase.from('users').insert({ title, username, role, departement, password: hashPassword, imageUrl: uploadedImage })
    if (error) {
      console.log(error)
      return
    }
    console.log('berhasil tambah data')
    revalidatePath('/dashboard/staff')
  } catch (error) {
    console.log(error)
  }
}
