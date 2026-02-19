import React from 'react'
import InnerNavbar from '../ui/InnerNavbar'
import NewsCard1 from '../ui/NewsCard1'
import { newsDatas } from '../../../../data/newsData'

function TopPart({stateMessage}) {
  return (
    <div className='bg-[#f7f8fa] p-3 w-full rounded-t-md'>
        <div className='bg-white p-2 w-full border border-gray-300 rounded-md'>
            <InnerNavbar stateMessage={stateMessage}></InnerNavbar>
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
  )
}

export default TopPart