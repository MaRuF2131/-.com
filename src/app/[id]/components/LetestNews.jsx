"use client"
import FinishIndicator from '@/app/service/loader/FinishIndicator';
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import React, { useEffect, useRef, useState } from 'react'
import NewsCard2 from '../ui/NewsCard2';
import TableLoader from '@/app/service/loader/TableLoader';
import Pagination from '@/app/service/Pagination';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import NewsTab from '@/components/NewsTab';
import InnerNavbar from '../ui/InnerNavbar';

function LetestNews({stateMessage }) {

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
                database:"news"
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
    <div className='grid md:grid-cols-3 grid-cols-2  items-start gap-4'>
        <div className='col-span-full '>         
            <InnerNavbar stateMessage={stateMessage}></InnerNavbar>
        </div>

           <div className='col-span-2 grid md:grid-cols-2 grid-cols-1 gap-4'>
                {newsData.map((v,i)=>{
                if(i%2===0){
                    return(
                    <div key={i} className='col-span-1'>
                                    <div key={i} className='group cursor-pointer flex flex-nowrap items-start justify-between w-full  gap-2 sm:border-b border-gray-300 sm:pb-4 pt-2'>
                                        <Image src={v?.imageUrl || "/default.webp"} alt={v?.title} width={300} height={200} className='sm:w-2/5 w-full max-h-30 sm:max-h-50 rounded-md' />
                                    <div className='sm:w-auto w-full'>
                                        <h2 className='text-xl font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{v?.title}</h2>
                                        <p className='text-lg opacity-80 hidden sm:inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
                                    </div>
                                    </div>
                    </div>
                    )
                }else{
                return(
                    <div key={i} className='col-span-1'>
                                    <div key={i} className='group cursor-pointer flex flex-nowrap items-start justify-between w-full  gap-2 sm:border-b border-gray-300 sm:pb-4 pt-2'>
                                        <Image src={v?.imageUrl || "/default.webp"} alt={v?.title} width={300} height={200} className='sm:w-2/5 w-full max-h-30 sm:max-h-50 rounded-md' />
                                    <div className='sm:w-auto w-full'>
                                        <h2 className='text-xl font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{v?.title}</h2>
                                        <p className='text-lg opacity-80 hidden sm:inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />৫ ঘণ্টা আগে</p>
                                    </div>
                                    </div>
                    </div>
                    )

                }
                })}
           </div>
            <div className='md:block hidden'>
              <NewsTab></NewsTab>
             </div>
              {/* Load more / end indicator */}
              <div ref={loadMoreRef} className="w-full text-center mt-8 col-span-full">
                  {(isFetching || isFetchingNextPage)  && <TableLoader ms={"News"}></TableLoader>}
              </div>

              {/* no data indicator  */}
              {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
                  <NoDataIndicator message="News"></NoDataIndicator>
              )}
              {!hasNextPage && data?.pages[0]?.data?.data.length > 0 && (
                    <FinishIndicator ms={"All News Loaded"}></FinishIndicator>
              )}
        
    </div>
  )
}

export default LetestNews