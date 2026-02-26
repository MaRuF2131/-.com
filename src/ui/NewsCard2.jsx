/* This card is for second news card on home page buttom of NewsCard1 maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

function NewsCard2({news}) {
  return (
    <div className='w-full h-full group cursor-pointer  text-black  flex flex-wrap items-center justify-center gap-y-3'>
        <Image src={news?.image || "/default.webp"} alt={news?.title} width={300} height={200} className='object-fill  rounded-md w-full aspect-[10/6]' />
        <h2 className='text-[22px]  font-semibold  opacity-80 w-full group-hover:text-[#0a58ca]'>{news?.title}</h2>
    </div>
  )
}

export default NewsCard2