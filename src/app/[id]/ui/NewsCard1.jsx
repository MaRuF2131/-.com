import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsCard1({news ,imcl}) {
  return (
        <Link href={`/news/${news?._id}?message=${news?.category}`} className='w-full   md:relative static overflow-hidden '>
           <Image src={news?.imageUrl} alt={news?.title} width={300} height={200} className={`object-fill max-w-full  ${imcl} rounded-md  w-full`} />
           <h2 className='md:absolute md:bottom-2 static w-full text-center  text-black md:font-light font-semibold  sm:text-2xl text-xl leading-none md:bg-amber-100/40'>{news?.title}</h2>
        </Link>
  )
}

export default NewsCard1