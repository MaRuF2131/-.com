"use client"

import InnerNavbar from '../ui/InnerNavbar'
import NewsCard1 from '../ui/NewsCard1'
import { newsDatas } from '../../../../data/newsData'
import BottomPart from "./BottomPart"
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import VideoList from './VideoList'
import { FaArrowRight } from "react-icons/fa"
import CategoryCard from "../ui/CategoryCard"
import Link from 'next/link'
 
 function Templet() {
      const [navlist,setnavlist]=useState([]);
      const [navlist2,setnavlist2]=useState([]);
      const [navlist3,setnavlist3]=useState([]);
      const [division,setDivision]=useState('')
      const [distic,setDistic]=useState('')
      const [up,setUp]=useState('')
      const state={
        up,setUp,
        distic,setDistic,
        division,setDivision,
        navlist3,setnavlist3,
        navlist2,setnavlist2,
        navlist,setnavlist
      }

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
    <div className='bg-[#f7f8fa] p-3 w-full rounded-t-md'>
        <div className='bg-white p-2 w-full border border-gray-300 rounded-md'>
            <InnerNavbar stateMessage={stateMessage} state={state}></InnerNavbar>
            <div className='w-full pt-4 flex flex-wrap items-start justify-between gap-5 '>
              <div className='md:w-[48%] w-full'>
                <NewsCard1 news={newsDatas[0]} imcl={"aspect-[10/5]"}></NewsCard1>
              </div>
              <div className='flex-1 flex flex-wrap   items-start justify-between gap-y-3'>
                {newsDatas.slice(0,4).map((v,i)=>
                  <div key={i} className='md:w-[49%] w-full'>
                     <NewsCard1  news={v} imcl={"aspect-[5/2.3]"} ></NewsCard1>
                  </div>
                )}
              </div>
            </div>
        </div>
        
    </div>
     { 
        (stateMessage!="সারাদেশ" && navlist.length>0)?navlist.map((v,i)=>(
            <div key={i} className="w-full max-w-[900px] flex flex-col px-6 ">
                {/* Header */}
                <div className="w-full flex items-center  justify-between mb-1 border-b-5 border-black">
                    <span className="flex items-center gap-x-1 text-2xl font-bold">
                    <span>{v}</span>
                    </span>

                    <Link
                    href="/"
                    className="cursor-pointer flex items-center gap-x-1"
                    >
                    <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
                    </Link>
                </div>
                <div className='w-full gap-x-6 flex items-start justify-between py-4 border-b-1 border-gray-300'>
                    {newsDatas.slice(0,4).map((news,index)=>
                    <CategoryCard key={index} news={news}></CategoryCard>
                    )}
                </div>
                
            </div>
        ))
        : <BottomPart></BottomPart> 
      
      }      
    </>
   )
 }
 
 export default Templet