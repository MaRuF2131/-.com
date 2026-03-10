"use client"
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import Pagination from '@/app/service/Pagination';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaCameraRetro } from 'react-icons/fa';

function PhoteStoryCard() {

  const [newsData, setNewsData] = useState([]);
  const loadMoreRef = useRef();
  const router=useRouter()
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
            database:"photo_story"
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

  const click=(id)=>{
    router.push(`/photo-story/${id}`)
  }
  return (
    <>
    <div className='w-full flex flex-wrap items-start justify-between gap-5 p-2'>
              {/* Header */}
        <div className="w-full text-3xl flex items-center  justify-start  border-b-2 border-red-600">
          <FaCameraRetro className="text-[#0d6efd]" />
          <span>ফটো স্টোরি</span>
        
       </div>
    {newsData.map((photoStory, index) => (
        <div onClick={()=>click(photoStory?._id)} key={index} className='max-w-full min-w-62 flex-1 h-100 pt-2 relative'>
          <Image src={photoStory?.images[0]?.imageUrl } alt={photoStory?.title} width={300} height={200} className='object-fill aspect-auto rounded-md h-full w-full' />
          <h2 className='absolute bottom-0 w-full text-center text-white  bg-black/15  text-2xl'>{photoStory?.images[0]?.caption}</h2>
          <img src="/photo-story.webp" alt="icon" className='absolute right-5 top-5 w-8 h-8'/>
        </div>
      ))}

    </div>
            {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
             
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
            <NoDataIndicator message="Photo Story"></NoDataIndicator>
        )}
    </>
  )
}

export default PhoteStoryCard