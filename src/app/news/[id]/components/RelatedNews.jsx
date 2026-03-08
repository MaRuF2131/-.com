"use client"
import Pagination from '@/app/service/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function RelatedNews({category}) {
    const [news, setnews] = useState([]);
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
        locationType:'',
        subcategory:category[1] || '',
        category:category[0] || '',
        database:"news"
        },
        page:1,limit:4
      });
      useEffect(()=>{
      console.log("data",data);
        if(data){ 
          const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
          setnews(value);
        }
      },[data])

  return (
    <div>
            <div className="lg:flex hidden items-center gap-3 py-6">
                <div className="w-1 h-6 bg-orange-500"></div>
                    <h2 className="text-xl font-bold">এ সম্পর্কিত আরও খবর</h2>
            </div>
            <div className="  border-b p-2 border border-gray-300 rounded-md">
                {news.map((item,index) => (
                                <Link
                                 href={`/news/${item?._id}?message=${item?.category}`}
                                  key={index}
                                  className="flex gap-3  border-b py-2  border-gray-300 cursor-pointer hover:bg-gray-50"
                                >
                                  <div className="w-40 h-14 relative">
                                    <Image
                                      src={item?.imageUrl}
                                      alt="news"
                                      fill
                                      className="object-fit w-40 h-14 rounded"
                                    />
                                  </div>
                                  <p className="text-lg font-semibold leading-none">
                                    {item?.title}
                                  </p>
                                </Link>
               ))}
        </div>

    </div>
  )
}

export default RelatedNews