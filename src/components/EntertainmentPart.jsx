"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { newsDatas } from '../../data/newsData'
import NewsCard2 from '@/ui/NewsCard2'
import Pagination from '@/app/service/Pagination'

function EntertainmentPart() {

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
            subcategory:'',
            category:'বিনোদন',
            database:"news"
            },
            page:1,limit:10
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
          },[data])
  return (
    <div className="w-full hidden max-w-[850px] md:flex flex-col border-b border-gray-300 pb-4 lg:mx-6 mx-0 ">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-1 border-b-5 border-black">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <Image src={"/entertainment.webp"}  width={300} height={200} className=' w-6 h-6' />
          <span>বিনোদন</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>
             <div className='grid grid-cols-1 h-full w-full '>
      
                   <div className='w-full  border-b border-gray-300 pb-4  h-auto  flex  items-start justify-between  gap-x-4'>
                      {newsData.slice(0,3).map((news,index)=>
                        <div key={index} className={`${index === 2 ? '' : 'border-r border-gray-300'} pr-4 w-full h-full flex items-start justify-center gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                        )}
                  </div>
                   <div className='w-full  pt-4  h-auto  flex  items-start justify-between  gap-x-4'>
                      {newsData.slice(3,7).map((news,index)=>
                        <div key={index} className={`${index === 3 ? '' : 'border-r border-gray-300'} pr-4 w-full h-full flex items-start justify-center gap-x-4 mb-4`}>
                           <NewsCard2  news={news}></NewsCard2>
                         </div>
                         )}
                  </div>
                  
    
            </div> 
      
      
    </div>
  )
}

export default EntertainmentPart