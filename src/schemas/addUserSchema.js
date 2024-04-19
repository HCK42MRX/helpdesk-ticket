import * as z from 'zod'

export const addUserSchema = z.object({
  title: z.string().min(1, { message: 'title harus diisi' }),
  username: z.string().min(1, { message: 'username harus diisi' }),
  role: z.string().min(1, { message: 'role harus diisi' }),
  departement: z.string().min(1, { message: 'departement harus dipilih' }),
  password: z.string().min(1, { message: 'password harus diisi' }),
  imageFile: z.any().refine((files) => files?.length >= 1, { message: 'Image is required.' })
})
