"use client";

import Pagination from "@/app/service/Pagination";
import NewsTab from "@/components/NewsTab";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPrint, FaFont } from "react-icons/fa";
import PageCopy from "./components/PageCopy.jsx";
import RelatedNews from "./components/RelatedNews.jsx";

export default function NewsDetailsPage() {
  const params = useParams();
  const id = params.id;
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
        id:id || "invalid",
        locationType:'',
        subcategory:'',
        category:'',
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

  return (
    <>
    <div className="max-w-7xl mx-auto sm:px-4 px-2 sm:py-6 py-2">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          <span className="text-blue-600 font-medium text-2xl">{news[0]?.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-12 gap-4">

              {/* ================= Left Sidebar ================= */}
              <div className="col-span-2 lg:block hidden">
                <div className="text-lg  text-black font-medium">
                    <p>{news[0]?.reporter}</p>
                    <p>আপডেট:{news[0]?.updatedAt?formatDate(news[0]?.updatedAt): ''}</p>
                    <p>প্রকাশিত:{formatDate(news[0]?.createdAt)}</p>
                    <p>অনলাইন সংস্করণ</p>
                </div>
                    {news[0]?.category && <RelatedNews category={[news[0]?.category||"",news[0]?.subcategory||""]}></RelatedNews>}
                </div>

              {/* ================= Main Content ================= */}
              <div className="col-span-7">

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-none">
                  {news[0]?.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-lg lg:hidden  text-black font-medium">
                        <p>{news[0]?.reporter}</p>
                        <p>আপডেট:{news[0]?.updatedAt?formatDate(news[0]?.updatedAt): ''}</p>
                        <p>প্রকাশিত:{formatDate(news[0]?.createdAt)}</p>
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
                    src={news[0]?.imageUrl}
                    alt="court"
                    fill
                    className="object-fit rounded-lg"
                  />
                </div>

                <p className="text-center text-sm text-gray-500 mb-6">
                  {news[0]?.imageBy}
                </p>

                {/* Article Body */}
                <div className="space-y-5 text-xl leading-8 text-gray-800">
                  <p>{news[0]?.description}</p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news[0]?.category}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news[0]?.subcategory}
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    {news[0]?.locationType}
                  </span>
                </div>

              </div>

              <div className="col-span-3 lg:flex hidden items-center h-screen">
                  <NewsTab></NewsTab>
              </div>
         </div>

         {/* copy news page */}
         {news[0]?.category && <PageCopy category={[news[0]?.category||"",news[0]?.subcategory||""]}></PageCopy>}
    </div>
    
    </>
  );
}