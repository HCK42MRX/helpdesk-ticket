import React from 'react'

export default function InputField ({ label, type }) {
  return (
    <>
      <label htmlFor={label}><span className="error-message">* </span>{label} : </label>
      <input type={type} name={label} id={label} className="h-fit border border-black px-2 focus:outline-none" />
    </>
  )
}
