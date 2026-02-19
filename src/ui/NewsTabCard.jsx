"use client"

import React, { useState } from "react"

function NewsTabCard({ latestNews = [], popularNews = [] }) {

  const [activeTab, setActiveTab] = useState("latest")

  const newsData = activeTab === "latest" ? latestNews : popularNews

  return (
    <div className="w-full  rounded-md border border-gray-300 overflow-hidden">

      {/* Tabs */}
      <div className="flex text-xl font-bold border-b border-gray-300">
        <button
          onClick={() => setActiveTab("latest")}
          className={`flex-1 py-3 cursor-pointer ${
            activeTab === "latest"
              ? "border-b-4 border-black"
              : "text-gray-500"
          }`}
        >
          সর্বশেষ
        </button>

        <button
          onClick={() => setActiveTab("popular")}
          className={`flex-1 py-3 cursor-pointer ${
            activeTab === "popular"
              ? "border-b-4 border-black"
              : "text-gray-500"
          }`}
        >
          জনপ্রিয়
        </button>
      </div>

      {/* News List */}
      <div className="h-full max-h-[400px] overflow-y-auto">

        {newsData.map((item, index) => (
          <div
            key={index}
            className="flex group cursor-pointer justify-start items-center gap-4 p-4 border-b border-gray-300 hover:bg-gray-50 transition"
           >
            {/* Serial Circle */}
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
              {index + 1}
            </div>

            {/* Title */}
            <p className="font-semibold group-hover:text-[#0a58ca] text-lg leading-none">
              {item}
            </p>
          </div>
        ))}

      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <button className=" cursor-pointer  w-full text-xl flex items-center justify-center border border-blue-500 text-blue-600 font-bold  p-1 rounded-lg hover:bg-blue-50 transition">
          সর্বশেষ সব খবর
        </button>
      </div>

    </div>
  )
}

export default NewsTabCard
