"use client";

import Pagination from "@/app/service/Pagination";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaEye, FaShare, FaVolumeMute, FaVolumeUp, FaPlay, FaPause, FaRedo } from "react-icons/fa";

export default function StoryPage() {

  const router = useRouter();
  const params = useParams();
  let initialId = params?.id || "";

  const videoRef = useRef(null);

  const [stories, setStories] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [firstFetch, setFirstFetch] = useState(true); // track first fetch
  const [currentId, setCurrentId] = useState(initialId);

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
      database:"video_story"
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

    }

  },[data]);

  const story = stories[current];

  // play pause
  const togglePlay = ()=>{

    if(!videoRef.current) return;

    if(isPlaying){

      videoRef.current.pause();

    }else{

      videoRef.current.play();

    }

    setIsPlaying(!isPlaying);

  };

  // mute toggle
  const toggleMute = ()=>{

    if(!videoRef.current) return;

    videoRef.current.muted = !isMuted;

    setIsMuted(!isMuted);

  };

  // replay
  const replayVideo = ()=>{

    if(!videoRef.current) return;

    videoRef.current.currentTime = 0;

    videoRef.current.play();

    setIsEnded(false);
    setIsPlaying(true);

  };

  // next story
  const nextStory = async ()=>{

        if (firstFetch) {
          console.log("calll");    
        setFirstFetch(false);
        setCurrentId("");
        return
      }

    const nextIndex=current+1;

    if(nextIndex > stories.length-1){

      if(hasNextPage && !isFetchingNextPage){
        await fetchNextPage();

      }else return

    }

    setCurrent(nextIndex);
    setIsEnded(false);

  };

  const prevStory = ()=>{
            console.log("current",current);
    if(current>0){    
      setCurrent(current-1);
      setIsEnded(false);

    }

  };

  return (

    <div className="fixed inset-0 bg-[#1b0000] flex items-center justify-center z-1000">

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

          {stories.slice(current, current + 4).map((_, i) => (

            <div
              key={i}
              className={`h-1 flex-1 rounded ${
                i === current%4 ? "bg-white" : "bg-gray-500"
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

                    {/* play pause */}
          <button onClick={togglePlay}>

            {isPlaying ? <FaPause/> : <FaPlay/>}

          </button>

          {/* mute */}
          <button onClick={toggleMute}>

            {isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}

          </button>

          <button onClick={()=>navigator.share?.({url:window.location.href})}>
            <FaShare/>
          </button>

        </div>

        {/* video */}
        {story && (

          <video
            ref={videoRef}
            key={story.videoUrl}
            src={story.videoUrl}
            autoPlay
            muted={isMuted}
            onEnded={()=>setIsEnded(true)}
            className="w-full h-full object-fil"
          />

        )}


        {/* replay button */}
        {isEnded && (

          <button
            onClick={replayVideo}
            className="absolute inset-0 flex items-center justify-center text-white text-5xl"
          >

            <FaRedo/>

          </button>

        )}

        {/* title */}
        <div className="absolute bottom-6 left-4 right-4 text-white text-lg">

          {story?.title}

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