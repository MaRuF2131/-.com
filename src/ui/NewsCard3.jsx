/* This card is for top  third news card on home page right part of NewsCard1  maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

function NewsCard3({news}) {
  return (
    <div className='group cursor-pointer w-full'>
        <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} className='w-full h-full object-fill sm:max-h-auto max-h-[240px]' />

        <h2 className='text-3xl font-bold group-hover:text-[#0a58ca]'>{news?.title}</h2>
        <p className='text-lg md:hidden sm:block hidden'>{news?.description.length>200?`${news?.description.slice(0,200)}...`:news?.description}</p>
    </div>
  )
}

export default NewsCard3