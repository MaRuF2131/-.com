import Image from 'next/image'
import React from 'react'

function VideoCard({video}) {
  return (
    <div>
        <Image src={video?.thumbnail || "/public/default.webp"} alt={video?.title} width={300} height={200} />
        <div>
            <h2>{video?.title}</h2>
            <p>{video?.description}</p>
            <p>{video?.date}</p>
        </div>
    </div>
  )
}

export default VideoCard