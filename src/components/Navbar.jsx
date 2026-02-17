import Navbar1 from '@/ui/Navbar1'
import Navbar2 from '@/ui/Navbar2'
import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-[999] bg-white shadow-md'>
        {/* top navbar */}
        <Navbar1></Navbar1>
        {/* bottom navbar */}
        <Navbar2></Navbar2>
    </div>
  )
}

export default Navbar