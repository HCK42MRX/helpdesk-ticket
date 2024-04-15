import React from 'react'

export default function InputField ({ register, label, name, type }) {
  return (
    <>
      <label htmlFor={label}><span className="error-message">* </span>{label} : </label>
      <input type={type} {...register(name, { required: `harap ${label} diisi` })} name={name} className="h-fit border border-black px-2 focus:outline-none" />
    </>
  )
}
