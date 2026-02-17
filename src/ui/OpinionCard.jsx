import Image from 'next/image'
import React from 'react'

function OpinionCard({opinion}) {
  return (
        <div className='flex flex-wrap items-start justify-center bg-[#fff9e1] border-b-3 border-[#d60000] rounded-md py-4 px-4'>
            <div className='w-[40%] flex flex-col items-center justify-start'>
              <Image src={opinion?.image || "/default.webp"} alt={opinion?.title} width={300} height={200} className='w-20 h-20 rounded-full object-center object-cover border-2 border-[#d60000]' />
              <p>{opinion?.name}</p>
              <p>{opinion?.occupation}</p>
            </div>
            <div className='flex-1'>
                <h2 className='text-2xl pb-4 font-bold opacity-80'>{opinion?.title}</h2>
                <p className='text-lg'>{opinion?.description.length>100?`${opinion?.description.slice(0,101)}...`:opinion?.description}</p>
            </div>
        </div>
  )
}

export default OpinionCard