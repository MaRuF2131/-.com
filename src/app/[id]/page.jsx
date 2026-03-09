'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect, Suspense } from 'react'
import VideoList from './components/VideoList'
import Templet from './components/Templet'
import LetestNews from './components/LetestNews'

function page() {
  const searchParams = useSearchParams()

  const message = searchParams.get('message') //  directly string

  const [stateMessage, setStateMessage] = useState('loading')

  useEffect(() => {
    if (message) {
      setStateMessage(message)
    } else {
      setStateMessage('invalid')
    }
  }, [message])

  if (stateMessage === 'loading') return <p>Loading...</p>
  if (stateMessage === 'invalid') return <p>Invalid path</p>
  if(stateMessage==="ভিডিও"){
    return(
      <>
       <VideoList stateMessage={stateMessage}></VideoList>
      </>
    )
  }
  if(stateMessage==="সর্বশেষ"){
    return(
      <>
       <LetestNews stateMessage={stateMessage}></LetestNews>
      </>
    )
  }
  return (
    <>
    <Suspense>
       <Templet stateMessage={stateMessage} ></Templet>
     </Suspense>
    </>
  )
}

export default page