"use client"
import React from 'react'
import { NavData2 } from '@/json.data/NavData2'
import Link from 'next/link'
import { HiHome, HiMenu } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { NavData3 } from '@/json.data/NavData3';
import MediaMenu from './OtherList';

function Navbar2() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false);
  return (
    <div className="navbar2 relative text-lg font-semibold text-[#202114]  w-full flex items-center justify-between gap-x-4 py-2 lg:px-23 px-4">
      <Link href="/" ><HiHome className="cursor-pointer text-2xl" /></Link>
      {Object.keys(NavData2).map((key, index) => {
        const isActive = `${pathname}?message=${NavData2[key].name}` === NavData2[key].link
        
        return(
          <Link key={index} href={NavData2[key].link}  className={` h-full flex items-center gap-x-2 cursor-pointer ${isActive?"text-[#0a58ca] border-b-3 border-[#0a58ca] rounded":" hover:border-b-2 hover:border-[#0a58ca] rounded"}`}>
            <span className='h-full'>{NavData2[key].name}</span>
          </Link>
        )
      })}

       <div           
           onMouseEnter={() => setOpen(true)}
           onMouseLeave={() => setOpen(false)}
           >
          <HiMenu className="text-xl cursor-pointer " 
          />

          { open  && <div className='absolute z-50 top-2/3 left-5 right-5 overflow-auto   bg-white shadow-lg rounded-md  px-5 '>
             <h2 className='text-xl border-b border-gray-300 py-2'>
                {new Date().toLocaleDateString("bn-BD", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}</h2>
              <div className='flex flex-wrap items-start justify-start gap-2 py-4'>
                {Object.keys(NavData3).map((key, index) => {
                const isActive = `${pathname}?message=${NavData3[key].name}` === NavData3[key].link
                
                return(
                  <Link key={index} href={NavData3[key].link}  className={` h-full text-lg w-[12%] flex items-center gap-x-2 cursor-pointer ${isActive?"text-[#0a58ca]   rounded ":"  hover:text-[#0a58ca] rounded"}`}>
                    <span className='h-full'>{NavData3[key].name}</span>
                  </Link>
                )
              })}
              </div>

              <div>
                 <MediaMenu></MediaMenu>
              </div>
            
          </div>
          }
        </div>
    </div>
  )
}

export default Navbar2