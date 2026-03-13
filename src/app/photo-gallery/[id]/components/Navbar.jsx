import Link from 'next/link'
import React from 'react'

function Navbar({category}) {
  return (
    <div className='flex items-center gap-2 justify-start'>
        <Link href={"/photo-gallery"} className='text-3xl'>ছবি</Link>
        <p className='text-3xl text-blue-600'>{category}</p>

    </div>
  )
}

export default Navbar