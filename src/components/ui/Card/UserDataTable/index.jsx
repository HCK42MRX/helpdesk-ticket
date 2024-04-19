import React from 'react'

// components
import { Card, CardContent } from '../../card'
import Image from 'next/image'

export default function UserDataTable ({ src, alt, username, title, role, openTicket, lastLogin, href }) {
  return (
    <Card>
      <CardContent className='flex mt-4 justify-between items-center'>
        <Image src={src || ''} alt={alt} width={80} height={80} />
        <div className="card-item-title">
          <p className="paragraph">Title : </p>
          <p className="paragraph w-36">{title}</p>
        </div>

        <div className="card-item-title">
          <p className="paragraph">Username : </p>
          <p className="paragraph w-36">{username}</p>
        </div>

        <div className="card-item-title">
          <p className="paragraph">Role : </p>
          <p className="paragraph w-36">{role}</p>
        </div>

        <div className="card-item-title text-center">
          <p className="paragraph">Open Ticket</p>
          <p className="paragraph ">{openTicket}</p>
        </div>

        <div className="last-login card-item-title text-center w-36">
          <p className="paragraph">Last login : </p>
          <p className="paragraph">{lastLogin}</p>
        </div>
      </CardContent>
    </Card>
  )
}
