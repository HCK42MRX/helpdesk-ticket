import React from "react";

// components
import { Card, CardContent } from "../../card";
import Image from "next/image";

// utils
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UserDataCard({ src, alt, role, openTicket, closedTicket, lastLogin, href }) {
  return (
    <Card>
      <CardContent className='flex mt-4 justify-between items-center'>
        <Image src={src} alt={alt} width={80} height={80} />
        <div className="card-item-title">
          <p className="paragraph">Role : </p>
          <p className="paragraph w-36">{role}</p>
        </div>

        <div className="card-item-title text-center">
          <p className="paragraph">Open Ticket</p>
          <p className="paragraph ">{openTicket}</p>
        </div>

        <div className="card-item-title text-center">
        <p className="paragraph">Closed ticket</p>
          <p className="paragraph ">{closedTicket}</p>
        </div>

        <div className="last-login card-item-title text-center w-36">
          <p className="paragraph">Last login : </p>
          <p className="paragraph">{lastLogin}</p>
        </div>
      </CardContent>
    </Card>
  )
}