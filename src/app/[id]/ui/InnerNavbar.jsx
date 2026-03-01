"use client"

import { DivisionList } from "@/json.data/DivisionList"
import { EducationList } from "@/json.data/EducationList"
import { EntertainmentList } from "@/json.data/EntertainmentList"
import { SportsList } from "@/json.data/SportsList"
import { WorldList } from "@/json.data/WorldList"
import { useEffect} from "react"

function InnerNavbar({stateMessage ,state }) {
  const st={
    "সারাদেশ":DivisionList,
    "বিনোদন":EntertainmentList,
    "শিক্ষা":EducationList,
    "খেলা":SportsList,
    "বিশ্ব":WorldList
  }
  useEffect(()=>{
    if(stateMessage && state){
      if(stateMessage==='সারাদেশ'){
        const list=Object.keys(DivisionList)
        state.setnavlist(list)
      }else{
        const list=st[stateMessage] || []
        state.setnavlist(list)
      }

    }
  },[stateMessage])

  const handle=(v)=>{
        console.log(v);  
      if(stateMessage==='সারাদেশ'){
        const list=Object.keys(DivisionList[v])
        state.setDivision(v);
        state.setnavlist2(list)
      }else{
        state.setnavlist2([])
        const list=st[stateMessage] || []
        state.setnavlist(list)
      }
  }
  const handle2=(v)=>{
        console.log(v);  
      if(stateMessage==='সারাদেশ'){
        const list=DivisionList[state.division][v]
        state.setDistic(v)
        state.setnavlist3(list)
      }else{
        state.setnavlist2([])
        const list=st[stateMessage] || []
        state.setnavlist(list)
      }
  }
  return (
    <div className='h-auto w-full border-b-2 border-gray-300 flex items-start justify-start px-4 gap-4'>
      <h1 className='text-2xl font-bold text-[#0a58ca]'>{stateMessage}</h1>
{   state &&  Object.keys(state).length > 0 && <div className="flex-1">
        <div className='flex flex-wrap items-center justify-start gap-2'>
            {state.navlist.map((v, i) => (
              <button
                key={i}
                onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handle(v)}}
                className={`px-2 cursor-pointer text-xl font-bold ${v===state.division ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
              >
                {v}
              </button>
            ))}
        </div>
        <div className='flex flex-wrap items-center justify-start gap-2' >  
          {state.navlist2.map((v, i) => (
            <button
              key={i}
              onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handle2(v)}}
              className={`px-2 cursor-pointer text-xl font-bold ${v===state.distic ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
            >
              {v}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap items-center justify-start md:gap-2'>
          {state.navlist3.map((v, i) => (
            <button
              key={i}
              onClick={(e)=>{e.preventDefault(); e.stopPropagation();state.setUp(v)}}
              className={`md:px-2 px-1 cursor-pointer text-xl font-bold ${v===state.up ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
            >
              {v}
            </button>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default InnerNavbar
