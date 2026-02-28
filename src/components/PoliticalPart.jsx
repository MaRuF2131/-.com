import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { newsDatas } from '../../data/newsData'
import { FaArrowRight, FaRegClock } from 'react-icons/fa'
import NewsCard2 from '@/ui/NewsCard2'

function PoliticalPart() {
  return (
    <div className="w-full max-w-[850px]  border-b border-gray-300 pb-4  h-auto flex flex-col items-center justify-start lg:mx-6 mx-0  ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-4 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/politics.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>রাজনীতি</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>

      <div className='grid sm:grid-cols-3 grid-cols-1 w-full'>
          {/* big card  */}
          <div className='w-full sm:border-r border-gray-300 sm:pr-4'>
            <Image src={"/default.webp"} width={300} height={200} className='w-full sm:h-38 h-60 rounded-md object-fit' />
              <h2 className='text-[24px] font-bold mt-2'>বাংলাদেশে করোনায় আরও ৩ জনের মৃত্যু, শনাক্ত ২৭৮</h2>
              <p className='text-black text-lg mt-3 hidden sm:block'>বাংলাদেশে করোনাভাইরাসে আক্রান্ত হয়ে আরও তিনজনের মৃত্যু হয়েছে। এ নিয়ে মোট মৃতের সংখ্যা বেড়ে দাঁড়িয়েছে ২৭ হাজার ৫৮০ জনে।</p>
              {/* time */}
              <p className='text-lg opacity-80 hidden sm:inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
          </div>

      <div className='w-full sm:col-span-2 sm:h-auto h-fit  flex flex-wrap items-start justify-start '>
        <div className='w-full sm:h-auto h-fit grid sm:grid-cols-3 grid-cols-1 items-start  sm:border-b border-gray-300 sm:pb-5 '>
          {newsDatas.slice(0,3).map((news,index)=>
           <div key={index} className={`w-full  sm:px-3 py-3 ${index === 2 ? '' : 'sm:border-r border-b border-gray-300'}`}>
                 <div className='w-full h-full group cursor-pointer  text-black  flex sm:flex-wrap flex-nowrap sm:items-center items-start justify-center gap-3'>
                     <Image src={news?.image || "/default.webp"} alt={news?.title} width={300} height={200} className='object-fill  rounded-md min-w-50 w-[40%] sm:h-auto h-28 sm:w-full sm:aspect-[10/6]' />
                     <h2 className='text-[22px]  font-semibold  opacity-80 w-full group-hover:text-[#0a58ca]'>{news?.title}</h2>
                 </div>
           </div>
         )}
        </div>

        <div className='w-full grid sm:grid-cols-3 grid-cols-1 h-full  items-start sm:pt-5'>
          {newsDatas.slice(0,3).map((news,index)=>
          <div key={index} className={`w-full sm:px-3 py-3 ${index === 2 ? '' : 'sm:border-r border-b border-gray-300'}`}>
               <div className='w-full sm:h-full group cursor-pointer  text-black  flex sm:flex-wrap flex-nowrap sm:items-center items-start justify-center gap-3'>
                   <Image src={news?.image || "/default.webp"} alt={news?.title} width={300} height={200} className='object-fill  rounded-md min-w-50 w-[40%] sm:h-auto h-28 sm:w-full sm:aspect-[10/6]' />
                   <h2 className='text-[22px] flex-1  font-semibold  opacity-80 w-full group-hover:text-[#0a58ca]'>{news?.title}</h2>
               </div>
            </div>
         )}
        </div>

      </div>

      </div>
      
      
    </div>
  )
}

export default PoliticalPart