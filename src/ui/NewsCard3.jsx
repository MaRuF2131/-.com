/* This card is for top  third news card on home page right part of NewsCard1  maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

function NewsCard3({news}) {
  return (
    <div className='group cursor-pointer'>
        <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} />

        <h2 className='text-3xl font-bold group-hover:text-[#0a58ca]'>{news?.title}</h2>

    </div>
  )
}

export default NewsCard3