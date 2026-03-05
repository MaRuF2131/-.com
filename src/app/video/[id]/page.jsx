"use client"
import InnerNavbar from "@/app/[id]/ui/InnerNavbar";
import Pagination from "@/app/service/Pagination";
import { formatDate } from "@/utils/formatDate";
import { getYoutubeId } from "@/utils/getYoutubeId";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import MoreVideo from "./components/MoreVideo";

export default function VideoPage() {
  const params = useParams();
   const id = params.id;

  const [newsData, setNewsData] = useState([]);
  const [videoId,setvideoId] =useState("");
  const [_id,setid]=useState(id)
  const state={
    _id,setid
  }
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
            id:_id||"invalid",
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
             {formatDate(newsData[0]?.createdAt)}
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-4">
          
          <div className="aspect-video flex-1">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          <div className="md:w-75 w-full">
              <MoreVideo state={state}></MoreVideo>
          </div>
      </div>
    </div>
  );
}