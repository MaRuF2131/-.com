"use client"
import NewsCard1 from '@/ui/NewsCard1'
import NewsCard3 from '@/ui/NewsCard3'
import React, { useState } from 'react'
import {newsDatas} from '../../data/newsData.jsx'
import NewsCard2 from '@/ui/NewsCard2.jsx'
import NewsCard4 from '@/ui/NewsCard4.jsx'
import StoryPart from '@/components/StoryPart.jsx'
import VideoPart from '@/components/VideoPart.jsx'
import OpinionPart from '@/components/OpinionPart.jsx'
import SpecialPart from '@/components/SpecialPart.jsx'
import NationalPart from '@/components/NationalPart.jsx'
import PoliticalPart from '@/components/PoliticalPart.jsx'
import BusinessPart from '@/components/BusinessPart.jsx'
import CountryPart from '@/components/CountryPart.jsx'
import WorldPart from '@/components/WorldPart.jsx'
import EntertainmentPart from '@/components/EntertainmentPart.jsx'
import SportsPart from '@/components/SportsPart.jsx'
import PodcastPart from '@/components/PodcastPart.jsx'
import NewsTabCard from '@/ui/NewsTabCard.jsx'
import NewsTab from '@/components/NewsTab.jsx'
import AreaNewsForm from '@/components/AreaNewsForm.jsx'
import PollForm from '@/components/PollForm.jsx'

function HomeLayout() {
  const [newsData, setNewsData] = useState(newsDatas);
  return (
    <section className='w-full flex flex-col items-start justify-start gap-y-8'>
      <div className='w-full flex flex-wrap items-start justify-between gap-4'>
          {/* top part */}
          <div className='lg:w-[50%]  md:w-[70%] w-full flex flex-col gap-4'>
            {/* left side */}
            <div>
             {/* top card */}
              <NewsCard1 news={newsData[0]}></NewsCard1>
            </div>
                {/* buttom of top card */}
                <div className='grid grid-cols-1 w-full h-full py-2 sm:border border-b border-gray-300 sm:rounded-md'>

                    <div className='w-full   flex flex-wrap items-start justify-start '>
                      <div className='w-full gap-y-4 grid sm:grid-cols-3 grid-cols-2 items-start  sm:border-b sm:border-gray-300 pb-5 '>
                        {newsDatas.slice(0,3).map((news,index)=>
                        <div key={index} className={`w-full px-2 ${index === 2 ? '' : 'sm:border-r  sm:border-gray-300'}`}>
                          <NewsCard2 news={news}></NewsCard2>
                        </div>
                      )}
                      </div>

                      <div className='w-full gap-y-4 grid sm:grid-cols-3 grid-cols-2 sm:h-full h-fit items-start pt-5'>
                        {newsDatas.slice(0,3).map((news,index)=>
                        <div key={index} className={`w-full  px-3 ${index === 2 ? '' : 'sm:border-r sm:border-gray-300'}`}>
                        <NewsCard2  news={news}></NewsCard2>
                          </div>
                      )}
                      </div>

                    </div>

                </div>
        </div>
          <div className=' flex flex-row flex-wrap sm:flex-nowrap  md:flex-col gap-4 xl:w-[24%] flex-1 w-full p-2 sm:border border-b border-gray-300 sm:rounded-md'>
            {/* right side */}
            <div className='sm:w-auto w-full'>
              {/* top of right side */}
              <NewsCard3 news={newsData[0]}></NewsCard3>
            </div>
            <div className='grid grid-cols-1  gap-4 border-t sm:border-0 border-gray-300 sm:pt-0 pt-4'>
              {/* buttom of right side */}
              {newsData.slice(0,5).map((news, index) => (
                <div key={index} className={`${index === 4 ? '' : 'border-b border-gray-300'} pb-4 h-30 sm:h-auto`}>
                 <NewsCard4 key={index} news={news}></NewsCard4>
                </div>
              ))}
            </div>
          </div>

          <div className=' hidden  lg:block w-[22%]  p-2 border border-gray-300 rounded-md'>
             {/* story part */}
             <StoryPart></StoryPart>
          </div>
      </div>
      
        {/* video section */}
        <VideoPart></VideoPart>

      <div className='w-full flex gap-4 flex-wrap items-start justify-between'>
        {/* motamot ,online jorip,(letest and famous news) section  */}

            {/* motamot */}
            <OpinionPart></OpinionPart>
         <div className='lg:flex-1  lg:block w-full'>
            {/* online jorip */}
            <PollForm></PollForm>
         </div>
            {/* letest and famous news */}
          <div className='lg:flex-1  lg:block w-full'>
              <NewsTab></NewsTab>
           </div>
      </div>

        {/* bachai krito section */}
         <SpecialPart></SpecialPart>

        {/* jatio section */}
        <NationalPart></NationalPart>

        {/* rajniti section */}
        <PoliticalPart></PoliticalPart>

        {/* banijjo section */}
        <BusinessPart></BusinessPart>


      <div className='w-full flex  items-start justify-between'>
        {/* saradesh section */}
         <div>
          <CountryPart></CountryPart>
          </div>
        <div className='flex-1 max-w-md mx-auto min-w-[250px] lg:block hidden'>
             <AreaNewsForm></AreaNewsForm>
        </div>
      </div>

      <div>
        {/* bisso section */}
        <WorldPart></WorldPart>
      </div>

      <div>
        {/* binodon section */}
        <EntertainmentPart></EntertainmentPart>
      </div>

        {/* khela section */}
        <SportsPart></SportsPart>


      <div>
        {/* gallery section */}
      </div>

        {/* prodcast section */}
         <PodcastPart></PodcastPart>

    </section>
  )
}

export default HomeLayout