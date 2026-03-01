import React from 'react'

function layout({children}) {
  return (
    <div className='w-full md:pt-4 pt-1'>
        {children}
    </div>
  )
}

export default layout