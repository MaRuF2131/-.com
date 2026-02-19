"use client"
import React from 'react'
import { NavData2 } from '@/json.data/NavData2'
import Link from 'next/link'
import { HiHome, HiMenu } from "react-icons/hi";
import { usePathname } from 'next/navigation';

function Navbar2() {
  const pathname = usePathname()
  return (
    <div className="navbar2  text-xl font-semibold text-[#202114]  w-full flex items-center justify-between gap-x-4 py-2 lg:px-23 px-4">
      <Link href="/" ><HiHome className="cursor-pointer text-2xl" /></Link>
      {Object.keys(NavData2).map((key, index) => {
        const isActive = `${pathname}?message=${NavData2[key].name}` === NavData2[key].link
        
        return(
          <Link key={index} href={NavData2[key].link}  className={` h-full flex items-center gap-x-2 cursor-pointer ${isActive?"text-[#0a58ca] border-b-3 border-[#0a58ca] rounded":" hover:border-b-2 hover:border-[#0a58ca] rounded"}`}>
            <span className='h-full'>{NavData2[key].name}</span>
          </Link>
        )
      })}
      <HiMenu className="text-xl cursor-pointer" />
    </div>
  )
}

export default Navbar2