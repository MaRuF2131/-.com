import Image from 'next/image'
import React from 'react'
import { FaRegClock } from "react-icons/fa";

function VideoCard({video}) {
  return (
    <div className=' md:min-w-[26%] sm:min-w-[40%] min-w-[70%]   cursor-pointer group  h-full flex flex-col items-start justify-start'>
        <div className='w-full relative flex items-center justify-center'>
            <Image src={video?.image || "/default.webp"} alt={video?.title} width={600} height={600} className='aspect-[10/5] w-full' />
            <Image src={"/video/overlay.webp"} alt={video?.title} width={600} height={600} className=' absolute w-10 h-10' />
        </div>
        <div>
            <h2 className='text-[22px] font-semibold opacity-75 group-hover:text-[#0a58ca]'>{video?.title}</h2>
            <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />{video?.date || "৫"} ঘণ্টা আগে</p>
        </div>
    </div>
  )
}

export default VideoCard