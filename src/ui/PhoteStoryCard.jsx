import Image from 'next/image'
import React from 'react'

function PhoteStoryCard({photoStory}) {
  return (
    <div>
       <Image src={photoStory?.image || "/public/default.webp"} alt={photoStory?.title} width={300} height={200} />
      <h2>{photoStory?.title}</h2>
    </div>
  )
}

export default PhoteStoryCard