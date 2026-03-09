"use client"
import React, { useState } from 'react'
import { NavData1 } from '@/json.data/NavData1'
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function Navbar1() {
  const router=useRouter()
  return (
    <div className='text-lg overflow-auto no-scrollbar   font-bold text-[#1F1F1F] w-full flex items-center justify-between gap-x-4   px-4 border-y border-gray-300'> 
       <div className='h-fit w-fit min-w-24'>
         <Image  src="/logo/logo.svg" alt="logo" width={100} height={100} className='w-45 h-30 svg' />
       </div>
        {Object.keys(NavData1).map((key, index) => (
            <button onClick={()=>router.push(NavData1[key].link)} key={index} href={NavData1[key].link}  className='group flex-1 text-nowrap flex  items-center gap-x-1 cursor-pointer hover:text-[#0a58ca] transition-colors duration-300'
             >
                <span className='text-sm'>{NavData1[key].icon}</span>
                <span>{NavData1[key].name}</span>
                 {(NavData1[key].popup) && <div className='absolute top-[40%] left-0 right-0 hidden group-hover:block   bg-transparent  p-4 z-999'>{NavData1[key].popup}</div>} 
            </button>
        ))}

        <div className="flex items-center gap-4 ">
          <HiOutlineSearch className="cursor-pointer h-auto w-auto p-1 bg-gray-200 rounded-full" />
          <HiOutlineBell className="cursor-pointer h-auto w-auto p-1 bg-gray-200 rounded-full" />
        </div>
    </div>
  )
}

export default Navbar1