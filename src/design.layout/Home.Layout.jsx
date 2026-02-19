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

function HomeLayout() {
  const [newsData, setNewsData] = useState(newsDatas);
  return (
    <section className='flex flex-col items-start justify-start gap-y-8'>
      <div className='w-full flex flex-wrap items-start justify-between'>
          {/* top part */}
          <div className='w-[50%] flex flex-col gap-4'>
            {/* left side */}
            <div>
             {/* top card */}
              <NewsCard1 news={newsData[0]}></NewsCard1>
            </div>
            <div className='w-full h-full flex flex-wrap items-start justify-between gap-y-16  p-2 border-1 border-gray-300 rounded-md  '>
              {/* buttom of top card */}
              {newsData.slice(0,6).map((news, index)=>(
                  <div key={index} className='w-[32%]'>
                    <NewsCard2 news={news}></NewsCard2>
                   </div>
                ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 w-[24%] p-2 border-1 border-gray-300 rounded-md'>
            {/* right side */}
            <div>
              {/* top of right side */}
              <NewsCard3 news={newsData[0]}></NewsCard3>
            </div>
            <div className='flex flex-col gap-4'>
              {/* buttom of right side */}
              {newsData.slice(0,5).map((news, index) => (
                 <NewsCard4 key={index} news={news}></NewsCard4>
              ))}
            </div>
          </div>

          <div className='  w-[22%] p-2 border-1 border-gray-300 rounded-md'>
             {/* story part */}
             <StoryPart></StoryPart>
          </div>
      </div>
      
        {/* video section */}
        <VideoPart></VideoPart>

      <div className='w-full flex flex-wrap items-start justify-between'>
        {/* motamot ,online jorip,(letest and famous news) section  */}

            {/* motamot */}
            <OpinionPart></OpinionPart>
         <div>
            {/* online jorip */}
         </div>
            {/* letest and famous news */}
          <div>
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


      <div>
        {/* saradesh section */}
        <CountryPart></CountryPart>
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