import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import NewsCard2 from '@/ui/NewsCard2'
import SportsNewsCard from '@/ui/SportsNewsCard'
import { eventData } from '../../data/eventData'

function SportsPart() {
  return (
    <div className="w-full  flex flex-col border-b border-gray-300 pb-4  ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-4 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/sports.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>খেলা</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
          <div className='w-full  gap-6 grid lg:grid-cols-8 grid-cols-1 items-start  '>
              <div className=' lg:col-span-6 col-span-full w-full grid sm:grid-cols-9 grid-cols-1 items-start  gap-x-3 border-b border-gray-300 pb-0.5'>
                <div className=' sm:col-span-2 pb-4 order-1 sm:order-0 gap-y-5 gap-x-3 flex sm:flex-col items-start justify-center'>
                    {newsDatas.slice(0,2).map((news,index)=>
                    <NewsCard2 key={index} news={news}></NewsCard2>
                    )}
                </div>
                <div className='sm:col-span-5 pb-4 order-0 sm:order-1 w-full h-full sm:border-x sm:border-gray-300 sm:px-4'>
                   <SportsNewsCard news={newsDatas[0]}></SportsNewsCard>
                </div>
                <div className=' sm:col-span-2 order-2  pb-4 gap-y-5 gap-x-3 flex sm:flex-col items-start justify-center'>
                    {newsDatas.slice(0,2).map((news,index)=>
                    <NewsCard2 key={index} news={news}></NewsCard2>
                    )}
                </div>
            </div>
            {/* Event part */}
            <div className='lg:col-span-2 col-span-full lg:min-w-full gap-y-2 flex flex-col items-center justify-start h-100 lg:min-w-[250px] p-2 border  border-gray-300 rounded-md'>
              <h2 className='z-[500] w-full text-start text-2xl font-bold  border-b border-gray-300'>ইভেন্ট</h2>
              <div className='space-y-4 overflow-auto'>
              {
                eventData.map((event,index)=>
                    <div key={index} className='inline-flex w-full gap-x-2 '>
                        <Image src={event?.logo}  width={50} height={50} className='object-fill h-full w-8 h-8  rounded-full ' />
                        <h2 className='flex-1 text-xl font-bold h-fit border-b  border-gray-300'>{event?.name}</h2>
                    </div>
                )
              }
              </div>
            </div>

          </div>
      
    </div>
  )
}

export default SportsPart