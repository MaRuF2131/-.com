"use client";

import VideoCard from "@/ui/VideoCard";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FaVideo, FaArrowRight } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { newsDatas } from "../../data/newsData";

function VideoPart() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.firstChild?.offsetWidth || 300;

    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col min-h-70 p-2 border border-gray-300 rounded-md relative">

      {/* Header */} 
      <div className="w-full flex items-center justify-between mb-3">
        <span className="flex items-center gap-x-1 text-2xl font-bold">
          <FaVideo className="text-[#d63384]" />
          <span>ভিডিও</span>
        </span>

        <Link
          href="/"
          className="cursor-pointer flex items-center gap-x-1"
        >
          <span className="text-xl font-bold">সব ভিডিও</span>
          <FaArrowRight className="w-6 h-6 p-1 border-2 border-gray-600 rounded-full" />
        </Link>
      </div>

      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <HiOutlineChevronLeft className="text-2xl" />
        </button>
      )}

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex w-auto gap-4 overflow-auto scroll-smooth no-scrollbar"
      >
        {newsDatas.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <HiOutlineChevronRight className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default VideoPart;
