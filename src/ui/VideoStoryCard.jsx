import Image from 'next/image'
import React from 'react'

function VideoStoryCard({videoStory }) {
  return (
    <div>
        <p>{videoStory?.watch}</p>
        <Image src={videoStory?.thumbnail || "/public/default.webp"} alt={videoStory?.title} width={300} height={200} />
        <div>
            <h2>{videoStory?.title}</h2>           
        </div>
    </div>
  )
}

export default VideoStoryCard