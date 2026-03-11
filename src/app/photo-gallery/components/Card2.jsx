import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsCard2({news}) {
  return (
        <Link href={`/news/${news?._id}?message=${news?.category}`} className='min-w-[250px] md:max-w-[300px] flex-1  group cursor-pointer text-black flex flex-col items-start justify-start w-full h-full p-2 gap-4  '>
            <Image src={news?.images[0].imageUrl} alt={news?.title} width={500} height={500} className='object-fill w-full  h-full  rounded-md ' />
            <div className='h-full text-start  flex-1 flex flex-col items-start justify-start overflow-hidden'>
                <h2 className='sm:pb-2 leading-none sm:text-2xl text-xl sm:font-bold font-semibold group-hover:text-[#0a58ca]'>{news?.title.length>45?news?.title.slice(0,45)+"...":news?.title}</h2>
            </div>
        </Link>
  )
}

export default NewsCard2