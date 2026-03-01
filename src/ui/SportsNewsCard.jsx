import Image from 'next/image'
import React from 'react'

function SportsNewsCard({news}) {
  return (
        <div className=' group cursor-pointer text-black flex flex-col items-center justify-center w-full h-full sm:p-2 gap-y-2 sm:border border-gray-300 rounded-md'>
            <Image src={news?.image} alt={news?.title} width={500} height={500} className='object-fill h-full w-full aspect-[12/7] rounded-md max-w-xl max-h-[240px] min-h-[240px]' />
            <div className='w-full  h-full flex-1 flex flex-col items-start justify-start overflow-hidden'>
                <h2 className='pb-2 text-3xl font-bold group-hover:text-[#0a58ca]'>{news?.title}</h2>
                <p className='text-lg opacity-60 sm:block hidden'>{news?.description.length>100?`${news?.description.slice(0,101)}...`:news?.description}</p>
            </div>
        </div>
  )
}

export default SportsNewsCard