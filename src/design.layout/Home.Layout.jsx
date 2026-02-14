"use client"
import NewsCard1 from '@/ui/NewsCard1'
import NewsCard3 from '@/ui/NewsCard3'
import React, { useState } from 'react'
import {newsDatas} from '../../data/newsData.jsx'

function HomeLayout() {
  const [newsData, setNewsData] = useState(newsDatas);
  return (
    <section>
      <div>
          {/* top part */}
          <div>
            {/* left side */}
            {newsData.map((news, index)=>(
              <NewsCard1 key={index} news={news}></NewsCard1>
            ))}
          </div>
          <div>
            {/* right side */}
            <div>
              {newsData.map((news, index) => (
                 <NewsCard3 key={index} news={news}></NewsCard3>
              ))}
            </div>
          </div>
      </div>
      
      <div>
        {/* video section */}
      </div>

      <div>
        {/* motamot ,online jorip,(letest and famous news) section  */}
         <div>
            {/* motamot */}
         </div>
         <div>
            {/* online jorip */}
         </div>
         <div>
            {/* letest and famous news */}
         </div>
      </div>

      <div>
        {/* bachai krito section */}
      </div>

      <div>
        {/* jatio section */}
      </div>

      <div>
        {/* rajniti section */}
      </div>

      <div>
        {/* banijjo section */}
      </div>

      <div>
        {/* saradesh section */}
      </div>

      <div>
        {/* bisso section */}
      </div>

      <div>
        {/* binodon section */}
      </div>

      <div>
        {/* khela section */}
      </div>

      <div>
        {/* gallery section */}
      </div>

      <div>
        {/* prodcast section */}
      </div>

    </section>
  )
}

export default HomeLayout