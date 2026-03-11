'use client'
import React, { useState, useEffect, Suspense } from 'react'
import Templet from './components/Templet'

function page() {
  
  return (
    <>
    <Suspense>
       <Templet ></Templet>
     </Suspense>
    </>
  )
}

export default page