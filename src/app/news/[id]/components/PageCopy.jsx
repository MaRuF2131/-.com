"use client";

import FinishIndicator from "@/app/service/loader/FinishIndicator";
import NoDataIndicator from "@/app/service/loader/NodataIndicator";
import TableLoader from "@/app/service/loader/TableLoader";
import Pagination from "@/app/service/Pagination";
import NewsTab from "@/components/NewsTab";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPrint, FaFont } from "react-icons/fa";
import RelatedNews from "./RelatedNews";

export default function PageCopy({category}) {
  const [news, setnews] = useState([]);
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
        locationType:'',
        subcategory:category[1] ||'',
        category:category[0] || '',
        database:"news"
        },
        page:1,limit:1
      });
      useEffect(()=>{
      console.log("data",data);
        if(data){ 
          const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
          setnews(value);
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
     {news.map((news,index)=>
        <div className="grid md:pt-50 pt-20 grid-cols-1 md:grid-cols-7 lg:grid-cols-12 gap-4">

              {/* ================= Left Sidebar ================= */}
              <div className="col-span-2 lg:block hidden">
                <div className="text-lg  text-black font-medium">
                    <p>{news?.reporter}</p>
                    <p>আপডেট:{news?.updatedAt?formatDate(news?.updatedAt): ''}</p>
                    <p>প্রকাশিত:{formatDate(news?.createdAt)}</p>
                    <p>অনলাইন সংস্করণ</p>
                </div>
                 {category&& <RelatedNews category={[category[0]||"",news?.subcategory||""]}></RelatedNews>}
                </div>

              {/* ================= Main Content ================= */}
              <div className="col-span-7">

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-none">
                  {news?.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-lg lg:hidden  text-black font-medium">
                        <p>{news?.reporter}</p>
                        <p>আপডেট:{news?.updatedAt?formatDate(news?.updatedAt): ''}</p>
                        <p>প্রকাশিত:{formatDate(news?.createdAt)}</p>
                        <p>অনলাইন সংস্করণ</p>
                    </div>
                  <div className="flex gap-3 ml-auto text-gray-700">
                    <FaPrint className="cursor-pointer hover:text-black" />
                    <FaFont className="cursor-pointer hover:text-black" />
                  </div>
                </div>

                {/* Featured Image */}
                <div className="w-full h-64 md:h-96 relative mb-3">
                  <Image
                    src={news?.imageUrl}
                    alt="court"
                    fill
                    className="object-fit rounded-lg"
                  />
                </div>

                <p className="text-center text-sm text-gray-500 mb-6">
                  {news?.imageBy}
                </p>

                {/* Article Body */}
                <div className="space-y-5 text-xl leading-8 text-gray-800">
                  <p>{news?.description}</p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news?.category}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news?.subcategory}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news?.locationType}
                  </span>
                </div>

              </div>

              <div className="col-span-3 lg:flex hidden items-center h-screen">
                  <NewsTab></NewsTab>
              </div>
         </div>
     )}

      {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
              {(isFetching || isFetchingNextPage)  && <TableLoader ms={"News"}></TableLoader>}
        </div>
    </>
  );
}