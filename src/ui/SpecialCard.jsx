import Image from 'next/image'
import React from 'react'

function SpecialCard({news}) {
  return (
    <div className='w-[17%] border-1 border-gray-300 rounded-md group cursor-pointer  text-black  flex flex-wrap items-center justify-center '>
            <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} className='object-fill   w-full aspect-[10/5]' />
            <div className='p-2 w-full'>
                <h2 className='text-[22px] font-semibold  opacity-80 w-full group-hover:text-[#0a58ca]'>{news?.title}</h2>
                <p className='text-lg opacity-60'>{news?.description.length>80?`${news?.description.slice(0,80)}...`:news?.description}</p> 
            </div>
    </div>
  )
}

export default SpecialCard