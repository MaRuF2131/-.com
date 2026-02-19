import React from 'react'
import { newsDatas } from '../../../../data/newsData'
import VideoCard from '../ui/VideoCard'
import InnerNavbar from '../ui/InnerNavbar'

function VideoList({stateMessage ,state}) {
  return (
    <div className='flex flex-wrap items-start justify-center gap-3 px-2 -mt-4'>
        <InnerNavbar stateMessage={stateMessage} state={state}></InnerNavbar>
        {newsDatas.map((v,i)=>
          <div key={i} className=' w-full sm:w-[24%] sm:min-w-[200px] sm:max-w-[350px] h-auto'>
            <VideoCard  video={v}></VideoCard>
          </div>
        )}
    </div>
  )
}

export default VideoList