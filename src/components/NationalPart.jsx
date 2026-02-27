import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaRegClock } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import { HiOutlineChevronRight } from 'react-icons/hi'

function NationalPart() {
  return (
    <div className="w-full max-w-[850px]   flex flex-wrap items-start justify-between  border-b border-gray-300 pb-4 h-auto mx-6 ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between  border-b-5 border-black mb-4">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/national.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>জাতীয়</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
      <div className='grid grid-cols-3 w-full'>
      {/* big card  */}
      <div className='w-full border-r border-gray-300 pr-4'>
         <Image src={"/default.webp"} width={300} height={200} className='w-full h-38  rounded-md object-cover' />
          <h2 className='text-[24px] font-bold mt-2'>বাংলাদেশে করোনায় আরও ৩ জনের মৃত্যু, শনাক্ত ২৭৮</h2>
          <p className='text-black text-lg mt-3'>বাংলাদেশে করোনাভাইরাসে আক্রান্ত হয়ে আরও তিনজনের মৃত্যু হয়েছে। এ নিয়ে মোট মৃতের সংখ্যা বেড়ে দাঁড়িয়েছে ২৭ হাজার ৫৮০ জনে। একই সময়ে নতুন করে শনাক্ত হয়েছেন ২৭৮ জন।</p>
          {/* time */}
          <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
      </div>
      <div className='w-full px-4 border-r border-gray-300 gap-x-6 flex flex-wrap items-start justify-between  border-gray-300'>
        {newsDatas.slice(0,4).map((news,index)=>
            <div key={index} className='group cursor-pointer flex flex-nowrap items-start justify-between w-full gap-2 border-b border-gray-300 pb-4 pt-2'>
                <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} className='w-2/5 rounded-md' />
               <div>
                <h2 className='text-[24px] font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{news?.title}</h2>
                <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
               </div>
             </div>
         )}
      </div>

      <div  className='w-full pl-4  gap-x-6 flex flex-wrap items-start justify-between  border-gray-300'>   
          {newsDatas.slice(0,5).map((news,index)=>
            <div key={index} className='group cursor-pointer flex flex-nowrap items-start justify-between w-full gap-2 border-b border-gray-300 pb-4 pt-2'>
               <div>
                <h2 className='text-[24px] font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1 inline-flex items-start justify-start gap-x-1'><HiOutlineChevronRight />{news?.title}</h2>
                <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
               </div>
             </div>
         )}
      </div >

      </div>
      
    </div>
  )
}

export default NationalPart