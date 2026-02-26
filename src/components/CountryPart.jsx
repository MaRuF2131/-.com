import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import NewsCard2 from '@/ui/NewsCard2'

function CountryPart() {
  return (
    <div className="w-full max-w-[900px] flex flex-col  border-b border-gray-300 pb-4 mx-6">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-4 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/country-news.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>সারাদেশ</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>

            <div className='grid grid-cols-1 h-full w-full '>
      
                   <div className='w-full  border-b border-gray-300 pb-4  h-auto col-span-2 flex  items-start justify-between  gap-x-4'>
                      {newsDatas.slice(0,4).map((news,index)=>
                        <div key={index} className={`${index === 3 ? '' : 'border-r border-gray-300'} pr-4 w-full h-full flex items-start justify-center gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                        )}
                  </div>
                   <div className='w-full  pt-4  h-auto col-span-2 flex  items-start justify-between  gap-x-4'>
                      {newsDatas.slice(0,4).map((news,index)=>
                        <div key={index} className={`${index === 3 ? '' : 'border-r border-gray-300'} pr-4 w-full h-full flex items-start justify-center gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                         )}
                  </div>
                  
    
            </div> 
      
    </div>
  )
}

export default CountryPart