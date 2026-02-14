/* This card is for second news card on home page buttom of NewsCard1 maybe this will be use in other place  */

import React from 'react'

function NewsCard2({news}) {
  return (
    <div>
        <Image src={news?.image || "/public/default.webp"} alt={news?.title} width={300} height={200} />
        <div>
            <h2>{news?.title}</h2>
        </div>
    </div>
  )
}

export default NewsCard2