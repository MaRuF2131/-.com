"use client"
import React, { useEffect, useRef, useState } from 'react'
import Card1 from "../../components/Card1"
import Pagination from '@/app/service/Pagination';
import TableLoader from '@/app/service/loader/TableLoader';
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import FinishIndicator from '@/app/service/loader/FinishIndicator';

function page() {
    const loadMoreRef = useRef();
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
            category:'',
            database:"audio"
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

 useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  return (
    <div className='p-2 w-full'>
        <h1 className='text-3xl text-blue-600 py-5'>আরও</h1>
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {newsData?.map((news ,i)=>
            <Card1 key={i} news={news}></Card1>
            )}
        </div>
        {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
              {(isFetching || isFetchingNextPage)  && <TableLoader ms={"Podcast"}></TableLoader>}
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
            <NoDataIndicator message="Podcast"></NoDataIndicator>
        )}
        {!hasNextPage && data?.pages[0]?.data?.data.length > 0 && (
             <FinishIndicator ms={"All Podcast Loaded"}></FinishIndicator>
        )}
    </div>
  )
}

export default page