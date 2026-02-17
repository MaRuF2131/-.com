import PhoteStoryCard from '@/ui/PhoteStoryCard';
import VideoStoryCard from '@/ui/VideoStoryCard'
import React, { useState } from 'react'
 import {
  FaVideo,
  FaCameraRetro,
} from "react-icons/fa";
import { newsDatas } from '../../data/newsData';

function StoryPart() {
    const [videoActive,setvideoActive]=useState(true)
    const [photeActive,setphoteActive]=useState(false)
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full inline-flex items-start justify-between'>
              <button type="button" onClick={(e)=>{e.preventDefault(); e.isPropagationStopped();setvideoActive(true);setphoteActive(false)}} className={`${videoActive===true?"border-b-2 border-[#d63384]":""} cursor-pointer inline-flex items-center justify-center gap-x-1 text-2xl font-bold`}>
                <FaVideo className='text-[#d63384]'></FaVideo>
                <span>ভিডিও স্টোরি</span>
              </button>
              <button type="button" onClick={(e)=>{e.preventDefault(); e.isPropagationStopped();setphoteActive(true);setvideoActive(false)}} className= {`${photeActive===true?"border-b-2 border-[#0d6efd]":""} cursor-pointer inline-flex items-center justify-center gap-x-1 text-2xl font-bold`}>
                  <FaCameraRetro className='text-[#0d6efd]'></FaCameraRetro>
                  <span>ফটো স্টোরি</span>
              </button>
         </div>
         <div>
            {/* video and photo story */}
            {videoActive && <VideoStoryCard videoStory={newsDatas[0]}></VideoStoryCard>}
            {photeActive && <PhoteStoryCard photoStory={newsDatas[2]}></PhoteStoryCard>}            
         </div>
    </div>
  )
}

export default StoryPart