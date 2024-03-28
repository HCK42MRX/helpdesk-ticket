import Link from "next/link";
import React from "react";

// import utils
import { cn } from "@/lib/utils";

export default function BtnRedirect({ href, children, icon, className,...props }) {
  return <Link href={href} className={cn('flex items-center', className)} {...props}>{icon}{children}</Link>
}