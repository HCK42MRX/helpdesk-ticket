'use server'

import { genKey } from './genereteKey'
import { supabase } from './supabaseConnect'

export default async function uploadImageSupabase (image) {
  if (!image) {
    throw new Error('Harap upload gambar')
  }
  const uuid = genKey()
  try {
    const { error } = await supabase.storage.from('gambar_staff').upload(uuid + image.name, image)
    if (error) {
      return error
    }
    const { data } = supabase.storage.from('gambar_staff').getPublicUrl(uuid + image.name)
    return data.publicUrl
  } catch (error) {
    return error
  }
}
