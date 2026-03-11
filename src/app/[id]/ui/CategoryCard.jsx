/* This card is for second news card on home page buttom of NewsCard1 maybe this will be use in other place  */
"use client"
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import TableLoader from '@/app/service/loader/TableLoader';
import Pagination from '@/app/service/Pagination';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function CategoryCard({stateMessage,subcategory}) {
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
            upozila:"",
            country:stateMessage==='বিশ্ব'?subcategory: '', 
            locationType:stateMessage==='জাতীয়'?"bangladesh":stateMessage==='বিশ্ব'?"world":"",
            subcategory:stateMessage!='বিশ্ব'?subcategory: '',
            category:(stateMessage!='বাছাইকৃত' && stateMessage!='জাতীয়' && stateMessage!='বিশ্ব' && stateMessage!='সারাদেশ' )?stateMessage:"",
            database:"news",
            views:stateMessage==='বাছাইকৃত'?"true":""
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
    {newsData.slice(0,4).map((news,index)=>
        <Link href={`/news/${news?._id}?message=${news?.category}`} key={index} className='sm:w-auto w-[47%]'>
            <div className='w-full group cursor-pointer  text-black  flex flex-wrap items-center justify-center gap-y-3'>
                <Image src={news?.imageUrl} alt={news?.title || "Default News Image"} width={300} height={200} className='object-fill  rounded-md w-full sm:aspect-[10/5] aspect-[10/6]' />
                <h2 className='sm:text-[22px] text-xl font-semibold  opacity-80 w-full group-hover:text-[#0a58ca]'>{news?.title}</h2>
            </div>

        </Link>
    )}
        {/* Load more / end indicator */}
        {(isFetching)  && <TableLoader ms={"News"}></TableLoader>}
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
          <NoDataIndicator message="News"></NoDataIndicator>
        )}
    </>
  )
}

export default CategoryCard