"use client"

import { DivisionList } from "@/json.data/DivisionList"
import { EducationList } from "@/json.data/EducationList"
import { EntertainmentList } from "@/json.data/EntertainmentList"
import { ajkerList, art_literatureList, healthList, lifeStyleList, opinionList, techList } from "@/json.data/OtherList"
import { SportsList } from "@/json.data/SportsList"
import { WorldList } from "@/json.data/WorldList"
import { useEffect} from "react"

function InnerNavbar({stateMessage ,state }) {
  const st={
    "সারাদেশ":DivisionList,
    "বিনোদন":EntertainmentList,
    "শিক্ষা":EducationList,
    "খেলা":SportsList,
    "বিশ্ব":WorldList,
    "মতামত":opinionList,
    "লাইফস্টাইল":lifeStyleList,
    "স্বাস্থ্য":healthList,
    "শিল্প_সাহিত্য":art_literatureList,
    "প্রযুক্তি":techList,
    "আজকের পত্রিকা":ajkerList
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

  const clearState=()=>{
    if(stateMessage && state){
      if(stateMessage==='সারাদেশ'){
        const list=Object.keys(DivisionList)
        state.setnavlist(list)
      }else{
        const list=st[stateMessage] || []
        state.setnavlist(list)
      }

    }
    state.setnavlist2([]);
    state.setnavlist3([]);
    state.setsubcategory("");
    state.setDivision('');
    state.setDistic("");
    state.setUp("");
  }

  const handle=(v)=>{
        console.log(v);  
      if(stateMessage==='সারাদেশ'){
        const list=Object.keys(DivisionList[v])
        state.setDivision(v);
        state.setnavlist([v]);
        state.setnavlist2(list);  //list
      }else{
        state.setsubcategory(v)
      }
  }
  const handle2=(v)=>{
        console.log(v);  
      if(stateMessage==='সারাদেশ'){
        const list=DivisionList[state.division][v]
        state.setDistic(v)
        state.setnavlist2([v]);  //list
        state.setnavlist3(list)
      }else{
/*         state.setnavlist2([])
        const list=st[stateMessage] || []
        state.setnavlist(list) */
      }
  }
  return (
    <div className='h-auto w-full border-b-2 border-gray-300 flex items-start justify-start sm:px-4 px-1 sm:gap-4 gap-2'>
      <h1 onClick={(e)=>{e.preventDefault(); e.stopPropagation(); clearState()}} className=' cursor-pointer text-2xl font-bold text-[#0a58ca]'>{stateMessage}</h1>
{   state &&  Object.keys(state).length > 0 && <div className="flex-1 flex overflow-auto no-scrollbar">
        <div className='flex  items-center justify-start gap-2'>
            {state.navlist.map((v, i) => (
              <button
                key={i}
                onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handle(v)}}
                className={`md:px-2 px-1 text-nowrap cursor-pointer text-xl font-bold ${(v===state.division || v===state.subcategory) ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
              >
                {v}
              </button>
            ))}
        </div>
        <div className='flex  items-center justify-start gap-2' >  
          {state.navlist2.map((v, i) => (
            <button
              key={i}
              onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handle2(v)}}
              className={`md:px-2 px-1 text-nowrap cursor-pointer text-xl font-bold ${v===state.distic ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
            >
              {v}
            </button>
          ))}
        </div>
        <div className='flex  items-center justify-start md:gap-2'>
          {!state.up ? state.navlist3.map((v, i) => (
            <button
              key={i}
              onClick={(e)=>{e.preventDefault(); e.stopPropagation();state.setUp(v)}}
              className={`md:px-2 px-1 cursor-pointer text-nowrap text-xl font-bold ${v===state.up ?"text-[#0a58ca]":"text-black  hover:text-[#0a58ca]"} `}
            >
              {v}
            </button>
          ))
          :
           <div
              className={`md:px-2 px-1 cursor-pointer text-nowrap text-xl font-bold text-[#0a58ca] `}
             >
              {state.up}
            </div>
        }
        </div>
      </div>}
    </div>
  )
}

export default InnerNavbar
