import Image from 'next/image'
import React from 'react'

function NewsCard2({news}) {
  return (
        <div className=' w-ful max-w-[700px] group cursor-pointer text-black inline-flex items-start justify-center w-full h-full p-2 gap-4 border-b border-b-gray-300 '>
            <Image src={news?.image} alt={news?.title} width={500} height={500} className='object-fill w-[120px]  h-[100px] sm:w-[300px] sm:h-[150px]  rounded-md ' />
            <div className='h-full text-start  flex-1 flex flex-col items-start justify-start overflow-hidden'>
                <h2 className='pb-2 leading-none text-2xl font-bold group-hover:text-[#0a58ca]'>{news?.title}</h2>
                <p className='text-lg leading-none opacity-60 sm:block hidden'>{news?.description.length>100?`${news?.description.slice(0,101)}...`:news?.description}</p>
            </div>
        </div>
  )
}

export default NewsCard2