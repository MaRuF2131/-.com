import Image from 'next/image'
import React from 'react'

function OpinionCard({opinion}) {
  return (
        <div>
            <Image src={opinion?.image || "/public/default.webp"} alt={opinion?.title} width={300} height={200} />
            <div>
                <h2>{opinion?.title}</h2>
                <p>{opinion?.description}</p>
            </div>
        </div>
  )
}

export default OpinionCard