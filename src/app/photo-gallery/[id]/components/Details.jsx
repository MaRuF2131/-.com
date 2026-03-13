import { formatDate } from '@/utils/formatDate'
import React from 'react'

function Details({data}) {
  return (
    <div className=''>
        <h1 className='text-4xl text-black'>{data?.title}</h1>
        <p className='text-xl'>{formatDate(data?.createdAt)}</p>
        {data?.images.map((img,i)=>
           <div key={i} className=' max-w-3xl border-b border-gray-300 p-3'>
                <img src={img?.imageUrl} alt="" />
                <p className='text-xl pt-2'>{img?.caption}</p>
           </div>
        )}
      
    </div>
  )
}

export default Details
