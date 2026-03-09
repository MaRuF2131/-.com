/* This card is for forth news card on home page buttom of NewsCard3 maybe this will be use in other place  */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsCard4({news}) {
  return (
    <Link href={`/news/${news?._id}`} className='group cursor-pointer flex flex-nowrap items-start justify-between w-full gap-2 h-full'>
        <Image src={news?.imageUrl} alt={news?.title || "news"} width={300} height={200} className='w-2/5 sm:max-h-auto max-h-full  sm:aspect-auto object-fill' />

        <h2 className='text-[22px] font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{news?.title}</h2>

    </Link>
  )
}

export default NewsCard4