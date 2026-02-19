import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import SpecialCard from '@/ui/SpecialCard'

function BusinessPart() {
  return (
    <div className="w-full max-w-[900px] flex flex-col px-6 ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-1 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/special.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>বাছাইকৃত</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
      <div className='w-full gap-x-6 flex items-start justify-between py-4 border-b-1 border-gray-300'>
        {newsDatas.slice(0,4).map((news,index)=>
           <SpecialCard key={index} news={news}></SpecialCard>
         )}
      </div>
      
    </div>
  )
}

export default BusinessPart