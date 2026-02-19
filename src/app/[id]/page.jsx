'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import TopPart from './components/TopPart'
import BottomPart from './components/BottomPart'
import VideoList from './components/VideoList'
import Templet from './components/Templet'

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
  return (
    <>
{/*      <TopPart stateMessage={stateMessage}></TopPart>
     <BottomPart></BottomPart> */}
     <Templet stateMessage={stateMessage} ></Templet>
    </>
  )
}

export default page