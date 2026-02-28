import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'

function BusinessPart() {
  return (
    <div className="w-full max-w-[850px] flex flex-col border-b border-gray-300 pb-4 lg:mx-6 mx-0 ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-4 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/business-news.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>বাণিজ্য</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-1 w-full'>

            {/* Left Side */}
           <div className='w-full border-r border-gray-300 pr-4  h-fit col-span-2 sm:flex hidden flex-wrap items-start justify-center  gap-x-4'>
                {newsDatas.slice(0,2).map((news,index)=>
                  <div key={index} className={`${index === 1 ? '' : 'border-b border-gray-300'} pb-4 w-full max-h-fit flex items-start justify-center gap-x-4 mb-4`}>
                      <Image src={news.image} width={300} height={200} className='w-[45%] h-38 object-cover rounded-md' />
                      <div className='flex-1 flex flex-col items-start justify-start '>
                        <h2 className='text-2xl font-bold'>{news.title}</h2>
                        <p className='text-lg text-gray-600 mt-1'>{news.description.length>100?`${news.description.slice(0,101)}...`:news.description}</p>
                      </div>
                  </div>
                )}
           </div>

            <div className='w-full flex flex-wrap items-start'>
                {newsDatas.slice(0,3).map((news,index)=>
                  <div key={index} className={`${index === 2 ? '' : 'border-b border-gray-300'} pb-4 pl-3 w-full max-h-fit flex flex-wrap items-start justify-center gap-x-4 mb-4`}>
                       <h2 className='text-2xl leading-none font-bold w-full'>{news.title}</h2>
                      <div className='flex-1 flex gap-2  items-start justify-start mt-2'>
                        <p className='text-lg flex-1  leading-none text-gray-600 sm:order-1 order-2'>{news.description.length>50?`${news.description.slice(0,50)}...`:news.description}</p>
                        <Image src={news.image} width={300} height={200} className='sm:w-[55%] w-[40%] sm:order-2 order-1 sm:h-20 h-25 object-cover rounded-md' />
                      </div>
                  </div>
                )}
           </div>
      </div>   
    </div>
  )
}

export default BusinessPart