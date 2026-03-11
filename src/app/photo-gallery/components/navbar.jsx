"use client"

import { DivisionList } from "@/json.data/DivisionList"
import { EducationList } from "@/json.data/EducationList"
import { EntertainmentList } from "@/json.data/EntertainmentList"
import { ajkerList, art_literatureList, galleryList, healthList, lifeStyleList, opinionList, techList } from "@/json.data/OtherList"
import { SportsList } from "@/json.data/SportsList"
import { WorldList } from "@/json.data/WorldList"
import { useEffect} from "react"

function InnerNavbar({stateMessage,state }) {
  const st={
    "ছবি":galleryList
  }
  useEffect(()=>{
        state.setnavlist(galleryList)
  },[state])

  const clearState=()=>{
    state.setnavlist(galleryList)
    state.category('');
  }

  const handle=(v)=>{
    state.category(v)

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
       </div>
      }
    </div>
  )
}

export default InnerNavbar
