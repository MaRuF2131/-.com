"use client"
import NoDataIndicator from '@/app/service/loader/NodataIndicator';
import TableLoader from '@/app/service/loader/TableLoader';
import Pagination from '@/app/service/Pagination';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

function MoreVideo({state}) {

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
    <div className='w-full'>
                        <div className="flex  items-center gap-3 pb-6">
                              <div className="w-1.5 h-8 bg-orange-500"></div>
                                 <h2 className="text-2xl font-bold">এ সম্পর্কিত আরও ভিডিও</h2>
                        </div>
                          <div className="max-h-100 overflow-auto no-scrollbar ">
                            {newsData.map((item,index) => (
                              <div
                                key={index}
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();state.setid(item?._id);window.history.pushState({}, "", `/video/${item?._id}?message=ভিডিও`);}}
                                className="flex gap-3 group  border-b py-2  border-gray-300 cursor-pointer hover:bg-gray-50"
                              >
                                <div className="w-50 h-20 relative flex items-center justify-center">
                                  <Image
                                    src={item?.thumbnail}
                                    alt="news"
                                    fill
                                    className="object-fit w-50 h-20 rounded"
                                  />
                                  <Image src={"/video/overlay.webp"} alt={item?.title} width={300} height={200} className=' absolute w-7 h-7' />
                                </div>
                                 <h2 className={`text-xl font-semibold leading-none  ${state._id===item?._id?"text-[#0a58ca]":"group-hover:text-[#0a58ca] text-black"}  `}>{item?.title}</h2>
                              </div>
                            ))}

                                {/* Load more / end indicator */}
                                <div ref={loadMoreRef} className="w-full text-center mt-8">
                                      {(isFetching || isFetchingNextPage)  && <TableLoader ms={"Video"}></TableLoader>}
                                </div>
                                {/* no data indicator  */}
                                {(!hasNextPage && newsData?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
                                  <NoDataIndicator message="News"></NoDataIndicator>
                                )}
                          </div>
    </div>
  )
}

export default MoreVideo