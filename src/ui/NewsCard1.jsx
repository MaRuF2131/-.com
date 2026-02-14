/* This card is for top news card on home page maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

export default function NewsCard1({news}) {
  return (
    <div className='inline-flex'>
        <Image src={news?.image} alt={news?.title} width={300} height={200} />
        <div>
            <h2>{news?.title}</h2>
            <p>{news?.description}</p>
        </div>
    </div>
  )
}
