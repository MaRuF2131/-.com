/* This card is for top  third news card on home page right part of NewsCard1  maybe this will be use in other place  */

import Image from 'next/image'
import React from 'react'

function NewsCard3({news}) {
  return (
    <div>
        <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} />
        <div>
            <h2>{news?.title}</h2>
        </div>
    </div>
  )
}

export default NewsCard3