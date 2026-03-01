import React from 'react'
import { newsDatas } from '../../../../data/newsData'
import NewsCard2 from '../ui/NewsCard2'

function BottomPart() {
  return (
    <div className='w-full sm:px-2 px-1 py-4 flex flex-col items-center justify-start'>
      {newsDatas.map((v,i)=>
       <NewsCard2 key={i} news={v}></NewsCard2>
      )}
      
    </div>
  )
}

export default BottomPart