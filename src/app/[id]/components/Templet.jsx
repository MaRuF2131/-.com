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
import Pagination from '@/app/service/Pagination'
import LetestNews from './LetestNews.jsx'
 
 function Templet() {
      const [navlist,setnavlist]=useState([]);
      const [navlist2,setnavlist2]=useState([]);
      const [navlist3,setnavlist3]=useState([]);
      const [subcategory,setsubcategory]=useState("");
      const [division,setDivision]=useState('')
      const [distic,setDistic]=useState('')
      const [up,setUp]=useState('')
      const state={
        subcategory,setsubcategory,
        up,setUp,
        distic,setDistic,
        division,setDivision,
        navlist3,setnavlist3,
        navlist2,setnavlist2,
        navlist,setnavlist
      }

      const searchParams = useSearchParams()

      const message = searchParams.get('message') //  directly string
      const div = searchParams.get('division') //  directly string
      const dis = searchParams.get('distic') //  directly string
      const upozila = searchParams.get('upozila') //  directly string

      const [stateMessage, setStateMessage] = useState('loading')

      useEffect(() => {
        if (message) {

          if(message==='রাজধানী'){
            setDistic('ঢাকা')
          }
          if(message==='চট্টগ্রাম'){
            setDivision('চট্টগ্রাম')
          }
          setStateMessage(message)
        } else {
          setStateMessage('invalid')
        }
        if (div) {
          setDivision(div)
        }
        if (dis) {
          setDistic(dis)
        }
        if (upozila) {
          setUp(upozila)
        }
      }, [message,div,dis,upozila])


  const [newsData, setNewsData] = useState([]);
  
      const {
          data,
          fetchNextPage,
          hasNextPage,
          isFetchingNextPage,
          isFetching,
          status
         } = Pagination({
          url:`/user/news`,
          keyValuepair:{
            id:"",
            division:division,
            distic:distic,
            upozila:up,
            country:stateMessage==='বিশ্ব'?subcategory: '', 
            locationType:stateMessage==='জাতীয়'?"bangladesh":stateMessage==='বিশ্ব'?"world":"",
            subcategory:stateMessage!='বিশ্ব'?subcategory: '',
            category:(stateMessage!='বাছাইকৃত' && stateMessage!='জাতীয়' && stateMessage!='বিশ্ব' && stateMessage!='সারাদেশ' && stateMessage!='রাজধানী' && stateMessage!='চট্টগ্রাম'  )?stateMessage:"",
            database:"news",
            views:stateMessage==='বাছাইকৃত'?"true":""
            },
            page:1,limit:5
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
        },[data])


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
    <div className='bg-[#f7f8fa] md:p-3 w-full rounded-t-md'>
        <div className='bg-white md:p-2 w-full border border-gray-300 rounded-md'>
            <InnerNavbar stateMessage={stateMessage} state={state}></InnerNavbar>
            <div className='w-full md:pt-4 pt-2 flex flex-wrap items-start justify-between gap-5 '>
              <div className='md:w-[48%] w-full'>
                <NewsCard1 news={newsData[0]} imcl={"aspect-[10/5] "}></NewsCard1>
              </div>
              <div className='flex-1 flex flex-wrap px-1 sm:px-0   items-start justify-between gap-y-3'>
                {newsData.slice(1,5).map((v,i)=>
                  <div key={i} className='md:w-[49%] w-[48%]'>
                     <NewsCard1  news={v} imcl={"sm:aspect-[5/2.3] aspect-[10/6]"} ></NewsCard1>
                  </div>
                )}
              </div>
            </div>
        </div>
        
    </div>
     { 
        (stateMessage!="সারাদেশ" && !subcategory && navlist.length>0)?navlist.map((v,i)=>(
            <div key={i} className="w-full max-w-[900px] flex flex-col sm:px-6 px-1">
                {/* Header */}
                <div className="w-full flex items-center  justify-between mb-1 border-b-5 border-black">
                    <span className="flex items-center gap-x-1 text-2xl font-bold">
                    <span>{v}</span>
                    </span>

                    <button
                    onClick={()=>setsubcategory(v)}
                    className="cursor-pointer flex items-center gap-x-1"
                    >
                    <FaArrowRight className="w-7 h-7 p-1 border-2 border-gray-600 rounded-full" />
                    </button>
                </div>
                <div className='w-full md:gap-6 sm:gap-4 flex sm:flex-nowrap flex-wrap items-start justify-between py-4 sm:border-b border-gray-300'>
                      <CategoryCard  stateMessage={stateMessage} subcategory={v}></CategoryCard>
                </div>
                
            </div>
        ))
        : <BottomPart stateMessage={stateMessage} subcategory={subcategory} state={state}></BottomPart> 
      
      }      
    </>
   )
 }
 
 export default Templet