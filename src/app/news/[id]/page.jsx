"use client";

import FinishIndicator from "@/app/service/loader/FinishIndicator";
import NoDataIndicator from "@/app/service/loader/NodataIndicator";
import TableLoader from "@/app/service/loader/TableLoader";
import Pagination from "@/app/service/Pagination";
import NewsTab from "@/components/NewsTab";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPrint, FaFont } from "react-icons/fa";

export default function NewsDetailsPage() {
  const params = useParams();
  const id = params.id;
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
      url:`/user/news/${id}`,
      keyValuepair:{
        locationType:'all',
        subcategory:'all',
        category:'all'
        },
        page:1,limit:10
      });
      useEffect(()=>{
      console.log("data",data);
        if(data){ 
          const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
          setnews(value);
          const len=data?.pages.length || 0
          const tl=data?.pages[len-1]?.data?.total || 0
          settotal(parseInt(tl));
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
        {/* Load more / end indicator */}
        <div ref={loadMoreRef} className="w-full text-center mt-8">
              {(isFetching || isFetchingNextPage)  && <TableLoader ms={"News"}></TableLoader>}
        </div>
        {/* no data indicator  */}
        {(!hasNextPage && news?.length <= 0 && !isFetching && !isFetchingNextPage && status==="success") &&(
          <NoDataIndicator message="News"></NoDataIndicator>
        )}
          {!hasNextPage && data?.pages[0]?.data?.data.length > 0 && (
             <FinishIndicator ms={"All News Loaded"}></FinishIndicator>
          )}
    <div className="max-w-7xl mx-auto sm:px-4 px-2 sm:py-6 py-2">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-600 font-medium text-2xl">/ আইন-আদালত</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-12 gap-4">

        {/* ================= Left Sidebar ================= */}
        <div className="col-span-2 md:block hidden">
          <div className="text-lg  text-black font-medium">
              <p>কালবেলা প্রতিবেদক</p>
              <p>আপডেট: ০২ মার্চ ২০২৬, ১২:৪৫</p>
              <p>প্রকাশিত: ০২ মার্চ ২০২৬, ১২:২৯</p>
              <p>অনলাইন সংস্করণ</p>
          </div>
              <div className="lg:flex hidden items-center gap-3 py-6">
                  <div className="w-1 h-6 bg-orange-500"></div>
                     <h2 className="text-xl font-bold">এ সম্পর্কিত আরও খবর</h2>
              </div>
                  <div className="  border-b p-2 border border-gray-300 rounded-md">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3  border-b py-2  border-gray-300 cursor-pointer hover:bg-gray-50"
                  >
                    <div className="w-40 h-14 relative">
                      <Image
                        src="/default.webp"
                        alt="news"
                        fill
                        className="object-fit w-40 h-14 rounded"
                      />
                    </div>
                    <p className="text-lg font-semibold leading-none">
                      দেশের গুরুত্বপূর্ণ একটি সংবাদের শিরোনাম এখানে থাকবে
                    </p>
                  </div>
                ))}
                 </div>
          </div>

        {/* ================= Main Content ================= */}
        <div className="col-span-7">

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-none">
            ভোটের ফলাফল চ্যালেঞ্জ করে হাইকোর্টে বিএনপির ৪ প্রার্থী
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex flex-wrap items-center gap-2 text-lg md:hidden  text-black font-medium">
                  <p>কালবেলা প্রতিবেদক</p>
                  <p>আপডেট: ০২ মার্চ ২০২৬, ১২:৪৫</p>
                  <p>প্রকাশিত: ০২ মার্চ ২০২৬, ১২:২৯</p>
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
              src="/details.webp"
              alt="court"
              fill
              className="object-fit rounded-lg"
            />
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            আদালত ভবন | ছবি: সংগৃহীত
          </p>

          {/* Article Body */}
          <div className="space-y-5 text-xl leading-8 text-gray-800">
            <p>
              চার আসনে বিএনপি প্রার্থীদের কারচুপির অভিযোগের প্রেক্ষিতে ব্যালট ও রেজাল্ট শিট হেফাজতে নেওয়ার নির্দেশ দিয়েছেন হাইকোর্ট। সোমবার (২ মার্চ) প্রার্থীদের আবেদনের প্রেক্ষিতে হাইকোর্টের নির্বাচনী বেঞ্চ এ আদেশ দেন।

                অভিযোগকারী বিএনপির ৪ প্রার্থী হলেন— কুড়িগ্রাম-২ আসনের সোহেল হোসাইন কায়কোবাদ, রংপুর-৬ আসনের সাইফুল ইসলাম, রংপুর-৪ আসনের এমদাদুল হক ভরসা ও রাজশাহী-১ আসনের মো. শরীফ উদ্দিন।

                এর আগে গণপ্রতিনিধিত্ব অধ্যাদেশের ৪৯ ধারা অনুযায়ী নির্বাচনী অনিয়মের বিরুদ্ধে করা ‘নির্বাচনী’ আবেদন শুনানির জন্য হাইকোর্ট বিভাগে নির্বাচনী ট্রাইব্যুনাল গঠন করা হয়। বিচারপতি মো. জাকির হোসেনের নেতৃত্বে একক বেঞ্চে এসব আবেদনের শুনানি চলছে।

                এ নিয়ে কারচুপির অভিযোগ এনে বিএনপির পক্ষ থেকে ৭টি ও জামায়াতের পক্ষ থেকে ৩ আসনের ব্যালট ও রেজাল্ট শিট হেফাজতে নেওয়ার নির্দেশ দিলেন হাইকোর্টের নির্বাচনী ট্রাইব্যুনাল।

                এ ছাড়াও আরও বেশ কটি আসনে কারচুপির অভিযোগ এনে মামলা করা আছে হাইকোর্টে।
            </p>
            <p>
              ঢাকা: বিএনপির প্রার্থীরা নির্বাচনের ফলাফল চ্যালেঞ্জ করে হাইকোর্টে
              রিট করেছেন। তাদের অভিযোগ, নির্বাচনে নানা অনিয়ম হয়েছে।
            </p>

            <p>
              আবেদনকারীদের পক্ষ থেকে বলা হয়েছে, সঠিকভাবে ভোট গণনা হয়নি এবং
              পুনর্গণনার দাবি জানিয়েছেন তারা।
            </p>

            <p>
              আদালত বিষয়টি শুনানির জন্য গ্রহণ করেছেন এবং আগামী সপ্তাহে শুনানির
              দিন ধার্য করেছেন।
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              বিএনপি
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              নির্বাচন
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              হাইকোর্ট
            </span>
          </div>

        </div>

        <div className="col-span-3 lg:flex hidden items-center h-screen">
             <NewsTab></NewsTab>
        </div>
      </div>
    </div>
    </>
  );
}