import Image from 'next/image'
import React from 'react'

function PhoteStoryCard({photoStory}) {
  return (
    <div className='w-full h-80 pt-2 relative'>
       <Image src={photoStory?.image || "/default.webp"} alt={photoStory?.title} width={300} height={200} className='object-fill aspect-[5/6.5] rounded-md max-h-80 w-full' />
       <h2 className='absolute bottom-2 w-full text-center text-white font-light  text-2xl'>{photoStory?.title}</h2>
    </div>
  )
}

export default PhoteStoryCard