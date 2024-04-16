'use server'

import { supabase } from '@/utils/supabaseConnect'

export default async function addUserAction (formData) {
  const { username, role, departement, password } = formData
}
