"use client"
import React, { useState } from 'react'
import { NavData1 } from '@/json.data/NavData1'
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'

function Navbar1() {
    const [open, setOpen] = useState(false);
  return (
    <div className='text-lg w-full relative font-bold text-[#1F1F1F] w-full flex items-center justify-between gap-x-4 py-9  px-4 border-y border-gray-300'>
       {/* <Image src="/logo/কন্ঠস্বর লোগো.ai" alt="logo" width={100} height={100} className='w-20 h-auto' /> */}
       <div className='h-full w-55'>

       </div>
        {Object.keys(NavData1).map((key, index) => (
            <Link key={index} href={NavData1[key].link}  className=' flex-1 flex items-center gap-x-1 cursor-pointer hover:text-[#0a58ca] transition-colors duration-300'
                  onMouseEnter={() => setOpen(index)}
                  onMouseLeave={() => setOpen(-1)}
             >
                <span className='text-sm'>{NavData1[key].icon}</span>
                <span>{NavData1[key].name}</span>
                 {(NavData1[key].popup && open === index) && <div className='absolute top-1/2 left-0 right-0   bg-transparent  p-4 z-10'>{NavData1[key].popup}</div>} 
            </Link>
        ))}

        <div className="flex items-center gap-4 ">
          <HiOutlineSearch className="cursor-pointer h-auto w-auto p-1 bg-gray-200 rounded-full" />
          <HiOutlineBell className="cursor-pointer h-auto w-auto p-1 bg-gray-200 rounded-full" />
        </div>
    </div>
  )
}

export default Navbar1