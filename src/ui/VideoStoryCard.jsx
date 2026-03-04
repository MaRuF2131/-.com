"use client"
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import Pagination from '@/app/service/Pagination';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function VideoStoryCard() {
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
            upozela:"",
            locationType:'',
            subcategory:'',
            category:"",
            database:"video_story"
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
    <>
    {newsData.map((videoStory, index) => (
      <div key={index} className='max-w-full min-w-62 h-80 pt-2 relative'>
          <p>{videoStory?.watch}</p>
          <video src={videoStory?.videoUrl || "/default.webp"} alt={videoStory?.title} width={300} height={200} className='object-fill aspect-[5/6.5] rounded-md max-h-full w-full' />

          <h2 className='absolute bottom-0 z-50 w-full text-center text-white bg-black/15  text-2xl'>{videoStory?.title}</h2>           
          {/* overlay */}
          <div className='absolute inset-0 top-2 z-40 flex items-center justify-center rounded-md cursor-pointer bg-black/20'>
            <Image src={"/video/overlay.webp"} alt={videoStory?.title} width={300} height={200} className=' w-15 h-15' />
          </div>
      </div>
      ))}
        {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
             
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
            <NoDataIndicator message="Video Story"></NoDataIndicator>
        )}
      </>
  )
}

export default VideoStoryCard