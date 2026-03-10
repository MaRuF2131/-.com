"use client";

import Pagination from "@/app/service/Pagination";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEye, FaShare } from "react-icons/fa";

export default function StoryPage() {

  const router = useRouter();
  const params = useParams();
  let initialId = params?.id || "";

  const [stories, setStories] = useState([]);
  const [current, setCurrent] = useState(0);
  const [firstFetch, setFirstFetch] = useState(true);
  const [currentId, setCurrentId] = useState(initialId);
  const [currentImage,setcurrentImage]=useState(0)

  const limit = 4;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = Pagination({
    url:`/user/news`,
    keyValuepair:{
      id:currentId?currentId:"",
      database:"photo_story"
    },
    page:1,
    limit:limit
  });

  useEffect(()=>{

    if(data){

      const value=data?.pages?.flatMap(
        (page)=>page?.data?.data
      ) || [];

      setStories(value);
      console.log("story",stories);

    }

  },[data]);

  const story = stories[current];
  const partition=story?.images[currentImage];

  // auto next story (5 sec)
  useEffect(()=>{

    if(!story) return;

     const timer=setTimeout(()=>{

      nextStory();

    },5000);

    return ()=>clearTimeout(timer);

  },[current,currentImage ,story]);

  const nextStory = async ()=>{
    console.log("len",story?.images.length-1,currentImage);
    
    if(story?.images.length-1>currentImage){ setcurrentImage(currentImage+1);return}
    if (firstFetch) {
        setFirstFetch(false);
        setCurrentId(""); 
        return
      }
    const nextIndex=current+1;

    if(nextIndex > stories.length-1){
      if(hasNextPage && !isFetchingNextPage){
        setcurrentImage(0)
        await fetchNextPage();
      }else return;

    }
    setcurrentImage(0);
    setCurrent(nextIndex);

  };

  const prevStory = ()=>{
    if(currentImage>0){setcurrentImage(currentImage-1);return}
    if(current>0){
      setCurrent(current-1);
    }

  };

  return (

    <div className="fixed inset-0 bg-[#1b0000] flex items-center justify-center z-50">

      {/* close */}
      <button
        onClick={()=>router.back()}
        className="absolute z-50 right-6 top-6 text-white text-3xl"
      >
        ✕
      </button>

      {/* left */}
      <button
        onClick={prevStory}
        className="absolute z-50 left-10 bg-white rounded-full w-12 h-12"
      >
        ❮
      </button>

      <div className="relative max-w-[380px] w-full h-full max-h-96 md:max-h-132 bg-black rounded-xl overflow-hidden">

        {/* progress */}
        <div className="absolute top-1 left-1 right-1 flex gap-1 z-50">

          {story?.images.map((_, i) => (

              <div
                key={i}
                className={`h-1 flex-1 rounded ${
                  i === currentImage ? "bg-white" : "bg-gray-500"
                }`}
              />

          ))}  

        </div>

        {/* top bar */}
        <div className="absolute top-3 left-3 right-3 flex justify-between text-white z-50">

          <div className="flex items-center gap-2">
            <FaEye/>
            <span>{story?.views || 0}</span>
          </div>

          <button onClick={()=>navigator.share?.({url:window.location.href})}>
            <FaShare/>
          </button>

        </div>

        {/* image */}
        {partition && (

          <img
            src={partition?.imageUrl}
            alt={partition?.caption}
            className="w-full h-full object-fil object-center"
          />

        )}

        {/* title */}
        <div className="absolute bottom-6 left-4 right-4 text-white text-lg">

          {partition?.caption}

        </div>

      </div>

      {/* right */}
      <button
        onClick={nextStory}
        className="absolute z-50 right-10 bg-white rounded-full w-12 h-12"
      >
        ❯
      </button>

    </div>

  );
}