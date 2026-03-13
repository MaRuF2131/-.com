"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Pagination from '@/app/service/Pagination';
import { useParams } from 'next/navigation';
import Details from './components/Details';
import BottomPart from '../components/BottomPart';

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
            database:"photo_gallery",
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
    <div className='p-2'>
      <Navbar category={newsData[0]?.category}></Navbar>
      <Details data={newsData[0]}></Details>
      <BottomPart category={''}></BottomPart>
    </div>
  )
}

export default page