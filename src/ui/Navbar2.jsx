import React from 'react'
import { NavData2 } from '@/json.data/NavData2'
import Link from 'next/link'
import { HiHome, HiMenu } from "react-icons/hi";

function Navbar2() {
  return (
    <div className="navbar2  text-xl font-semibold text-[#202114]  w-full flex items-center justify-between gap-x-4 py-2 lg:px-23 px-4">
      <HiHome className="cursor-pointer text-2xl" />
      {Object.keys(NavData2).map((key, index) => (
        <Link key={index} href={NavData2[key].link}  className='flex items-center gap-x-2 cursor-pointer'>
          <i className={`icon-${NavData2[key].icon}`}></i>
          <span>{NavData2[key].name}</span>
        </Link>
      ))}
      <HiMenu className="text-xl cursor-pointer" />
    </div>
  )
}

export default Navbar2