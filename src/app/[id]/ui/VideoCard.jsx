import Image from 'next/image'
import React from 'react'

function VideoCard({video}) {
  return (
    <div className='w-full cursor-pointer group  h-full'>
        <div className='w-full relative flex items-center justify-center'>
            <Image src={"/cover_photo-5006.webp"} alt={video?.title} width={300} height={200} className='aspect-[10/6] w-full' />
            <Image src={"/video/overlay.webp"} alt={video?.title} width={300} height={200} className=' absolute w-10 h-10' />
        </div>
        <h2 className='text-[24px] pt-2 font-bold  group-hover:text-[#0a58ca]'>{video?.title}</h2>

    </div>
  )
}

export default VideoCard