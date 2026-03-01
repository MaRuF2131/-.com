import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import NewsCard2 from '@/ui/NewsCard2'

function WorldPart() {
  return (
    <div className="w-full max-w-[850px] flex flex-col border-b border-gray-300 pb-4 lg:mx-6 mx-0 ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-4 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/world.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>বিশ্ব</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
            <div className='grid grid-cols-1 h-full w-full '>
      
                   <div className='w-full  border-b border-gray-300 pb-4  sm:h-auto h-fit  flex sm:flex-nowrap flex-wrap items-start justify-between  gap-4'>
                      <div className='sm:w-[50%] w-full h-full flex items-start justify-center bg-black  rounded-md'>
                         <div className='p-2'>
                            <h2 className='text-[24px] text-white font-bold mt-2'>বাংলাদেশে করোনায় আরও ৩ জনের মৃত্যু, শনাক্ত ২৭৮</h2>
                            <p className='text-white text-lg mt-3'>{'বাংলাদেশে করোনাভাইরাসে আক্রান্ত হয়ে আরও তিনজনের মৃত্যু হয়েছে। এ নিয়ে মোট মৃতের সংখ্যা বেড়ে দাঁড়িয়েছে ২৭ হাজার ৫৮০ জনে।'.length>100 ? 'বাংলাদেশে করোনাভাইরাসে আক্রান্ত হয়ে আরও তিনজনের মৃত্যু হয়েছে। এ নিয়ে মোট মৃতের সংখ্যা বেড়ে দাঁড়িয়েছে ২৭ হাজার ৫৮০ জনে।'.substring(0,100) + '...' : 'বাংলাদেশে করোনাভাইরাসে আক্রান্ত হয়ে আরও তিনজনের মৃত্যু হয়েছে। এ নিয়ে মোট মৃতের সংখ্যা বেড়ে দাঁড়িয়েছে ২৭ হাজার ৫৮০ জনে।'}</p>
                          </div>
                          <Image src={"/default.webp"} width={500} height={500} className='w-[50%] h-full max-h-55 rounded-md  object-fit' />
                      </div>
                      {newsDatas.slice(0,2).map((news,index)=>
                        <div key={index} className={`${index === 1 ? '' : 'sm:border-r border-gray-300'} sm:pr-4 flex-1 h-full flex items-start justify-center gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                        )}
                  </div>
                   <div className='w-full  sm:pt-4  sm:h-auto h-fit  flex sm:flex-nowrap flex-wrap items-start justify-between  gap-4'>
                      {newsDatas.slice(0,4).map((news,index)=>
                        <div key={index} className={`${index === 3 ? '' : 'sm:border-r border-gray-300'} sm:pr-4 sm:w-full w-[47%] h-full flex items-start justify-center  gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                         )}
                  </div>
                  
    
            </div>
      
    </div>
  )
}

export default WorldPart