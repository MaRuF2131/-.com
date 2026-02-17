"use client";

import React, { useState } from "react";
import { opinionDatas } from "../../data/opinionDatas";
import OpinionCard from "@/ui/OpinionCard";
import Image from "next/image";

function OpinionPart() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(opinionDatas.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="w-[34%] border border-gray-300 p-3 rounded-md flex flex-col gap-y-4 overflow-hidden">

      {/* Header */}
      <div className="w-full flex items-center gap-x-1">
        <Image src="/opinion-v2.webp" alt="opinion" width={24} height={24} />
        <span className="text-2xl font-bold">মতামত</span>
      </div>

      {/* Slider Wrapper */}
        <div className="relative w-full overflow-hidden">
        <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
            transform: `translateX(-${currentPage * 100}%)`,
            }}
        >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const start = currentPage * itemsPerPage;
            const end = Math.min(start + itemsPerPage, opinionDatas.length);
            const group = opinionDatas.slice(start, end);

            return (
                <div
                key={pageIndex}
                className="w-full flex-shrink-0 flex flex-col gap-y-3"
                >
                {group.map((opinion, index) => (
                    <OpinionCard key={index} opinion={opinion} />
                ))}
                </div>
            );
            })}
        </div>
        </div>


      {/* Pagination Buttons */}
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === index
                ? "bg-black "
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default OpinionPart;
