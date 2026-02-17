import Image from 'next/image'
import React from 'react'

function VideoStoryCard({videoStory }) {
  return (
    <div className='w-full h-80 pt-2 relative'>
        <p>{videoStory?.watch}</p>
        <Image src={videoStory?.image || "/default.webp"} alt={videoStory?.title} width={300} height={200} className='object-fill aspect-[5/6.5] rounded-md max-h-80 w-full' />

        <h2 className='absolute bottom-2 w-full text-center text-white font-light  text-2xl'>{videoStory?.title}</h2>           
        {/* overlay */}
        <div className='absolute inset-0 top-2 flex items-center justify-center rounded-md cursor-pointer bg-black/20'>
           <Image src={"/video/overlay.webp"} alt={videoStory?.title} width={300} height={200} className=' w-15 h-15' />
        </div>
    </div>
  )
}

export default VideoStoryCard