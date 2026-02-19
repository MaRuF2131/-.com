import Image from 'next/image'
import React from 'react'

function NewsCard1({news ,imcl}) {
  return (
        <div className='w-full   relative overflow-hidden '>
           <Image src={news?.image || "/default.webp"} alt={news?.title} width={300} height={200} className={`object-fill max-w-full  ${imcl} rounded-md  w-full`} />
           <h2 className='absolute bottom-2 w-full text-center text-white font-light  text-2xl'>{news?.title}</h2>
        </div>
  )
}

export default NewsCard1