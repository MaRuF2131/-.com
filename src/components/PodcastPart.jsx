import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image'
import { newsDatas } from '../../data/newsData'
import PodcastCard from '@/ui/PodcastCard'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import VideoCard from "@/ui/VideoCard";

function PodcastPart() {
  const scrollRef2 = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
  
    const checkScroll2 = () => {
      const el = scrollRef2.current;
      if (!el) return;
  
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };
  
    useEffect(() => {
      checkScroll2();
    }, []);
  
    const scroll = (direction) => {
      const el = scrollRef2.current;
      if (!el) return;
  
      const cardWidth = el.firstChild?.offsetWidth || 300;
  
      el.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    };
  
  return (
    <div className="w-full min-h-[152px]  flex flex-col p-2 border border-gray-300 border-b-4 border-b-[#f96400] rounded-md relative">
      {/* Header */}
      <div className="w-full flex items-center  justify-between mb-1 ">
        <span className="flex items-center gap-x-1 text-3xl font-bold">
          <Image src={"/podcast.webp"} alt="icon"  width={300} height={200} className=' w-7 h-7' />
          <span>পডকাস্ট</span>
        </span>
      </div>
      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-[#b30f0f] shadow-md rounded-full p-2 z-10"
        >
          <HiOutlineChevronLeft className="text-2xl" />
        </button>
      )}

      {/* Slider */}
      <div
        ref={scrollRef2}
        onScroll={checkScroll2}
        className="flex w-auto gap-4 overflow-auto scroll-smooth no-scrollbar"
      >
        {newsDatas.map((news, index) => (
          <PodcastCard key={index} news={news} />
        ))}
      </div>

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-[#b30f0f] shadow-md rounded-full p-2 z-10"
        >
          <HiOutlineChevronRight className="text-2xl" />
        </button>
      )}
      
    </div>
  )
}

export default PodcastPart