import React from 'react'

export default function InputField ({ register, name, type, errors, placeholder }) {
  return (
    <>
      <input type={type} {...register(name)} name={name} className="h-fit border border-black px-2 py-1 focus:outline-none rounded-[5px]" placeholder={placeholder} />
      {errors[name] ? <p className='error-message'>{errors[name].message}</p> : null}
    </>
  )
}
