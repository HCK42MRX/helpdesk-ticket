'use server'

import { supabase } from './supabaseConnect'

export default async function uploadImageSupabase (image) {
  if (!image) {
    throw new Error('ga ada gambarnya kontol')
  }
  try {
    const { error } = await supabase.storage.from('gambar_staff').upload(image.name, image)
    if (error) {
      return error
    }
    const { data } = supabase.storage.from('gambar_staff').getPublicUrl(image.name)
    return data.publicUrl
  } catch (error) {
    return error
  }
}
