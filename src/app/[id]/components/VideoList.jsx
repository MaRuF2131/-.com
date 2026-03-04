"use client"
import React, { useEffect, useRef, useState } from 'react'
import { newsDatas } from '../../../../data/newsData'
import VideoCard from '../ui/VideoCard'
import InnerNavbar from '../ui/InnerNavbar'
import TableLoader from '@/app/service/loader/TableLoader';
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import FinishIndicator from '@/app/service/loader/FinishIndicator';
import Pagination from '@/app/service/Pagination';

function VideoList({stateMessage ,state}) {
    const [newsData, setNewsData] = useState([]);
    const loadMoreRef = useRef();
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
              locationType:'',
              subcategory:'',
              category:"",
              database:"video"
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
    <div className='flex flex-wrap items-start justify-center gap-3 px-2 -mt-4'>
        <InnerNavbar stateMessage={stateMessage} state={state}></InnerNavbar>
        {newsData.map((v,i)=>
          <div key={i} className=' w-full sm:w-[24%] sm:min-w-[200px] sm:max-w-[350px] h-auto'>
            <VideoCard  video={v}></VideoCard>
          </div>
        )}

        {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
              {(isFetching || isFetchingNextPage)  && <TableLoader ms={"Video"}></TableLoader>}
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
            <NoDataIndicator message="Video"></NoDataIndicator>
        )}
        {!hasNextPage && data?.pages[0]?.data?.data.length > 0 && (
             <FinishIndicator ms={"All Video Loaded"}></FinishIndicator>
        )}
    </div>
  )
}

export default VideoList