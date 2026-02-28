/* This card is for top news card on home page maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

export default function NewsCard1({news}) {
  return (
    <div className=' group cursor-pointer  text-black sm:inline-flex sm:items-center sm:justify-center w-full h-full p-2 gap-4 sm:border border-b border-gray-300 sm:rounded-md'>
        <Image src={news?.image} alt={news?.title} width={500} height={500} className='object-fill h-full w-full sm:w-4/6 sm:aspect-[12/7] rounded-md sm:max-w-xl max-h-[240px] sm:min-h-[240px]' />
        <div className='max-h-[238px]  h-full flex-1 flex flex-col items-start justify-start overflow-hidden'>
            <h2 className='pb-3 text-4xl font-bold group-hover:text-[#0a58ca]'>{news?.title}</h2>
            <p className='text-lg opacity-60 sm:block hidden'>{news?.description}</p>
        </div>
    </div>
  )
}
