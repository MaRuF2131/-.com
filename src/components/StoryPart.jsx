"use client";

import PhoteStoryCard from "@/ui/PhoteStoryCard";
import VideoStoryCard from "@/ui/VideoStoryCard";
import React, { useState, useRef, useEffect } from "react";
import { FaVideo, FaCameraRetro } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { newsDatas } from "../../data/newsData";

function StoryPart() {
  const [videoActive, setvideoActive] = useState(true);
  const [photeActive, setphoteActive] = useState(false);

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
  }, [videoActive, photeActive]);

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
    <div className="w-full  relative">

      {/* Tabs */}
      <div className="w-full inline-flex items-start justify-between mb-3">
        <button
          type="button"
          onClick={() => {
            setvideoActive(true);
            setphoteActive(false);
          }}
          className={`${
            videoActive ? "border-b-2 border-[#d63384]" : ""
          } cursor-pointer inline-flex items-center gap-x-1 text-2xl font-bold`}
        >
          <FaVideo className="text-[#d63384]" />
          <span>ভিডিও স্টোরি</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setphoteActive(true);
            setvideoActive(false);
          }}
          className={`${
            photeActive ? "border-b-2 border-[#0d6efd]" : ""
          } cursor-pointer inline-flex items-center gap-x-1 text-2xl font-bold`}
        >
          <FaCameraRetro className="text-[#0d6efd]" />
          <span>ফটো স্টোরি</span>
        </button>
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

      {/* Story Slider */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex w-full gap-4 overflow-auto scroll-smooth no-scrollbar"
      >
        {videoActive &&
          newsDatas.map((item, index) => (
            <VideoStoryCard key={index} videoStory={item} />
          ))}

        {photeActive &&
          newsDatas.map((item, index) => (
            <PhoteStoryCard key={index} photoStory={item} />
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

export default StoryPart;