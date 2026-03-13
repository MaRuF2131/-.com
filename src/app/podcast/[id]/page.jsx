"use client"
import React, { useEffect, useState } from 'react'
import More from './components/More'
import Details from './components/Details'
import { useParams } from 'next/navigation';
import Pagination from '@/app/service/Pagination';
function page() {
  const [newsData, setNewsData] = useState([]);
  const {id} =useParams();
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
            id:id||"invalid",
            category:"",
            database:"audio",
            },
            page:1,limit:1
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
        },[data])
  return (
    <div className='p-2 w-full'>
       <h1 className='text-4xl text-blue-600 pb-3'>পডকাস্ট</h1>
       {newsData[0] &&<Details news={newsData[0]}></Details>}
       <More></More>
    </div>
  )
}

export default page
