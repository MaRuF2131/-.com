import { formatDate } from '@/utils/formatDate';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegClock } from "react-icons/fa";

function VideoCard({video}) {
  return (
    <Link href={`/video/${video?._id}`} className=' md:min-w-[26%] sm:min-w-[50%] min-w-[90%]   cursor-pointer group  h-full flex flex-col items-start justify-start'>
        <div className='w-full relative flex items-center justify-center'>
            <Image src={video?.thumbnail || "/video/overlay.webp"} alt={video?.title || "video"} width={600} height={600} className='aspect-[10/5] w-full' />
            <Image src={"/video/overlay.webp"} alt={video?.title ||"overlay"} width={600} height={600} className=' absolute w-10 h-10' />
        </div>
        <div>
            <h2 className='text-[22px] font-semibold opacity-75 group-hover:text-[#0a58ca]'>{video?.title}</h2>
            <p className='text-lg opacity-80 inline-flex items-center justify-start gap-x-1'><FaRegClock className="text-lg text-gray-600" />{formatDate(video?.createdAt)}</p>
        </div>
    </Link>
  )
}

export default VideoCard