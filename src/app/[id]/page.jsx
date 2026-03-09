'use client'
import React, { useState, useEffect, Suspense } from 'react'
import VideoList from './components/VideoList'
import Templet from './components/Templet'
import LetestNews from './components/LetestNews'

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