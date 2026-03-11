"use client"

import BottomPart from "./BottomPart"
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Pagination from '@/app/service/Pagination'
import InnerNavbar from "./navbar"
import NewsCard1 from "./Card1"
 
 function Templet() {
      const [navlist,setnavlist]=useState([]);
      const [category,setcategory]=useState("");
      const state={
        category,setcategory,
        navlist,setnavlist
      }

      const searchParams = useSearchParams()

      const message = searchParams.get('category') //  directly string

      useEffect(() => {
        if (message) {
          setcategory(message)
        } 
      }, [message])


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
            category:category||"",
            database:"photo_gallery",
            },
            page:1,limit:5
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
        },[data])


   return (
    <>
    <div className='bg-[#f7f8fa] md:p-3 w-full rounded-t-md'>
        <div className='bg-white md:p-2 w-full border border-gray-300 rounded-md'>
            <InnerNavbar stateMessage={"ছবি"} state={state}></InnerNavbar>
            <div className='w-full md:pt-4 pt-2 flex flex-wrap items-start justify-between gap-5 '>
              <div className='md:w-[48%] w-full'>
                <NewsCard1 news={newsData[0]} imcl={"aspect-[10/5] "}></NewsCard1>
              </div>
              <div className='flex-1 flex flex-wrap px-1 sm:px-0   items-start justify-between gap-y-3'>
                {newsData.slice(1,5).map((v,i)=>
                  <div key={i} className='md:w-[49%] w-[48%]'>
                     <NewsCard1  news={v} imcl={"sm:aspect-[5/2.3] aspect-[10/6]"} ></NewsCard1>
                  </div>
                )}
              </div>
            </div>
        </div>
        
    </div>
      <BottomPart category={category}></BottomPart>   
    </>
   )
 }
 
 export default Templet