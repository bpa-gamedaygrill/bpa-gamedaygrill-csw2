"use client";
import React from 'react'
import Link from 'next/link'
import { User, ChevronDown } from 'react-feather'
import deleteUserCookies from '../../../../libs/actions/cookie/deleteUserCookies';

interface ProfileDropdownInterface {
  name: string;
}

const ProfileDropdown: React.FC<ProfileDropdownInterface> = ({ name }) => {
  const logOut = async() => {
    await deleteUserCookies()
    window.location.reload();
  }
  return (
      <div  className="flex items-center justify-center gap-2 hover:bg-neutral-100 rounded-full px-4 py-2 min-h-[40px] cursor-pointer group relative">
          <User 
          size={19}
          opacity={0.5}
          />
          <p className="opacity-50 font-medium text-sm custom-truncate">{name}</p>
          <ChevronDown
          size={19}
          opacity={0.5}
          className="group-hover:rotate-[-180deg] transition-all duration-150"
          />
          <div className="w-full absolute top-[110%] group-hover:top-[100%] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex flex-col transition-all duration-150">
            <Link href="/dashboard" className="mt-1.5 text-center !w-full py-2 relative flex items-center justify-center gap-1 rounded-full px-1 transition-all duration-100 hover:bg-neutral-200">
              <p className="text-sm font-medium text-black/50">Dashboard</p>
            </Link>
            <button className="text-center !w-full py-2 mt-1 relative flex items-center justify-center gap-2 rounded-full text-sm font-medium text-black/50 px-1 bg-neutral-100 hover:bg-primary-red/90 hover:text-white transition-all duration-100" onClick={logOut}>
              Log out
            </button>
          </div>
      </div>
  )
}

export default ProfileDropdown
