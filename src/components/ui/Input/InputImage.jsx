'use client'

import React from 'react'

import { ACCEPTED_IMAGE_TYPES } from '@/utils/acceptedImages'

export default function InputImage ({ register, errors, name, ...rest }) {
  // https://mandeepsingh.hashnode.dev/nextjs-show-image-preview-before-uploading
  return (
    <div className='flex flex-col gap-y-2 justify-center items-center'>
      <input type='file' {...register(name)} accept={ACCEPTED_IMAGE_TYPES} name={name} id={name}/>
      {errors[name] ? <p className='error-message'>{errors[name].message}</p> : null}
    </div>
  )
}
