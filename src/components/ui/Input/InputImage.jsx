'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'

import { RxCross2 } from 'react-icons/rx'

export default function InputImage ({ name, id, register, onChange, ...rest }) {
  const [selectedImage, setSelectedImage] = useState({ image: null, nameImage: 'preview image' })
  const imageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(prevState => ({ ...prevState, image: e.target.files[0], nameImage: e.target.files[0].name }))
    }
  }, [selectedImage])
  const removePreviewImage = useCallback(() => {
    setSelectedImage(prevState => ({ ...prevState, image: null, nameImage: null }))
  }, [selectedImage])
  return (
    <>
      {!selectedImage.image
        ? <>
          <input type="file" name={name} id={id} accept='image/png, image/jpeg' onChange={imageChange} hidden />
          <label htmlFor={id} className='bg-yellow-500 py-3 px-4 rounded-2xl w-fit text-white text-center cursor-pointer'>Upload Image</label>
        </>
        : <div className='flex flex-col'>
          <span className='flex justify-end'><RxCross2 className="size-7 cursor-pointer hover:text-red-600 stnd-transition" onClick={removePreviewImage} /></span>
          <Image src={URL.createObjectURL(selectedImage.image)} {...register(name)} alt='user image' className='my-3' width={400} height={400} />
          <p className='paragraph text-center'>{selectedImage.nameImage}</p>
        </div>
      }
    </>
  )
}
