import React from 'react'
import Link from "next/link";

interface FooterLinkInterface {
  linkHref: string;
  linkText: string;
}

export const FooterLink: React.FC<FooterLinkInterface> = ({ linkHref, linkText }) => {
  return (
    <>
      <Link href={`/${linkHref}`} className="flex items-center justify-start w-fit"><p className="text-[1.02rem] font-medium opacity-60 hover:opacity-80 scale-[95%] hover:scale-[100%] w-full">{linkText}</p></Link>
    </>
  )
}
