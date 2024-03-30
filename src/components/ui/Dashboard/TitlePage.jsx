import React from "react";


export default function TitlePage({title, description}) {
  return (
    <>
      <h1 className="sub-title">{title}</h1>
      <p className="paragraph mt-2">{description}</p>
    </>
  )
}