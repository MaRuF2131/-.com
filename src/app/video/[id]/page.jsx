"use client"
import InnerNavbar from "@/app/[id]/ui/InnerNavbar";
import Pagination from "@/app/service/Pagination";
import { getYoutubeId } from "@/utils/getYoutubeId";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

export default function VideoPage() {
  const params = useParams();
   const id = params.id;

  const [newsData, setNewsData] = useState([]);
  const [videoId,setvideoId] =useState("")
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
            id:id||"invalid",
            division:"",
            distic:"",
            upozila:"",
            locationType:'',
            subcategory:'',
            category:"",
            database:"video"
            },
            page:1,limit:1
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
        },[data])

    useEffect(()=>{
        if(newsData.length<=0) return 
        const videoId = getYoutubeId(newsData[0]?.youtubeUrl);
        setvideoId(videoId);

    },[newsData])
  
  return (
    <div className="mx-auto p-2">
      <InnerNavbar stateMessage={"ভিডিও"}></InnerNavbar>
      <div className=" text-2xl pt-4 pb-4">
        <h1 className="text-3xl font-bold">{newsData[0]?.title}</h1>
        <p>কন্ঠস্বর ডেস্ক</p>
        <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-black" />
            {new Date(newsData[0]?.createdAt).toLocaleString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                }) || "৫"}
        </p>
      </div>
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}