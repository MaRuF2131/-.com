"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaRegClock } from 'react-icons/fa'
import { HiOutlineChevronRight } from 'react-icons/hi'
import Pagination from '@/app/service/Pagination'

function NationalPart() {
    const [newsData, setNewsData] = useState([]);
  
      const {
          data,
          fetchNextPage,
          hasNextPage,
          isFetchingNextPage,
          isFetching,
          status
         } = Pagination({
          url:`/user/news`,
          keyValuepair:{
            id:"",
            division:"",
            distic:"",
            upozela:"",
            locationType:'',
            subcategory:'জাতীয়',
            category:'',
            database:"news"
            },
            page:1,limit:11
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
          },[data])
  return (
    <div className="w-full max-w-[850px]   flex flex-wrap items-start justify-between  border-b border-gray-300 pb-4 h-auto lg:mx-6 mx-0 ">
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
      <div className='grid sm:grid-cols-3 grid-cols-1 w-full'>
      {/* big card  */}
      <div className='w-full sm:pb-0 pb-3 sm:border-r border-gray-300 sm:pr-4'>
         <Image src={ newsData?.[0]?.imageUrl || "/default.webp"} width={300} height={200} className='w-full sm:h-38 h-60  rounded-md object-fit' />
          <h2 className='text-[24px] font-bold mt-2'>{newsData?.[0]?.title}</h2>
          <p className='text-black text-lg mt-3 hidden sm:block'>{newsData?.[0]?.description.length>150?newsData?.[0]?.description.substring(0,150)+"...":newsData?.[0]?.description}</p>
          {/* time */}
          <p className='text-lg opacity-80  items-center justify-start gap-x-1 hidden sm:inline-flex'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
      </div>
      <div className='w-full px-4 sm:border-r border-gray-300 sm:gap-x-6 flex flex-wrap items-start justify-between'>
        {newsData.slice(1,5).map((news,index)=>
            <div key={index} className='group cursor-pointer flex flex-wrap sm:flex-nowrap items-start justify-between sm:w-full w-[47%] sm:gap-2 sm:border-b border-gray-300 sm:pb-4 pt-2'>
                <Image src={news?.imageUrl || "/public/default.webp"} alt={news?.title} width={300} height={200} className='sm:w-2/5 w-full max-h-30 sm:max-h-50 rounded-md' />
               <div className='sm:w-auto w-full'>
                <h2 className='text-[24px] font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{news?.title}</h2>
                <p className='text-lg opacity-80 hidden sm:inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
               </div>
             </div>
         )}
      </div>

      <div  className='w-full pl-4  gap-x-6 hidden sm:flex flex-wrap items-start justify-between  border-gray-300'>   
          {newsData.slice(5,10).map((news,index)=>
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