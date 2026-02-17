/* This card is for forth news card on home page buttom of NewsCard3 maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

function NewsCard4({news}) {
  return (
    <div className='group cursor-pointer flex flex-nowrap items-start justify-between w-full gap-2'>
        <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} className='w-2/5' />

        <h2 className='text-[22px] font-semibold opacity-80 group-hover:text-[#0a58ca] flex-1'>{news?.title}</h2>

    </div>
  )
}

export default NewsCard4