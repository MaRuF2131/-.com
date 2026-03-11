"use client"
import React, { useEffect, useRef, useState } from 'react'
import Pagination from '@/app/service/Pagination';
import TableLoader from '@/app/service/loader/TableLoader';
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import NewsCard2 from './Card2';

function BottomPart({category}) {
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
    <div className='w-full sm:px-2 px-1 py-4 flex flex-wrap items-start justify-start'>
            {newsData.map((v,i)=>
            <NewsCard2 key={i} news={v}></NewsCard2>
            )}

        {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
              {(isFetching || isFetchingNextPage)  && <TableLoader ms={"Gallery"}></TableLoader>}
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
            <NoDataIndicator message="Gallery"></NoDataIndicator>
        )}
      
    </div>
  )
}

export default BottomPart