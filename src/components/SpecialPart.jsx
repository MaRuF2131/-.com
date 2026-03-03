"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import SpecialCard from '@/ui/SpecialCard'
import Pagination from '@/app/service/Pagination'

function SpecialPart() {

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
    <div className="w-full max-w-[850px] flex flex-col border-b border-gray-300 pb-4 lg:mx-6 mx-0 ">
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
      <div className='w-full gap-4 grid sm:grid-cols-4 grid-cols-2 items-start  py-4 border-b border-gray-300'>
        {newsData.slice(0,4).map((news,index)=>
           <SpecialCard key={index} news={news}></SpecialCard>
         )}
      </div>
      
    </div>
  )
}

export default SpecialPart