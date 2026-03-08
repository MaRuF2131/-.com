"use client"
import Pagination from "@/app/service/Pagination"
import NewsTabCard from "@/ui/NewsTabCard"
import { useEffect, useState } from "react"

export default function NewsTab() {

  const [latest, setLatest] = useState([])
  const [popular, setPopular] = useState([])

  /* ---------- Latest News ---------- */

  const {
    data: latestData
  } = Pagination({
    url: `/user/news`,
    keyValuepair:{
      id:"",
      division:"",
      distic:"",
      upozila:"",
      locationType:'',
      subcategory:'',
      category:"",
      database:"news"
    },
    page:1,
    limit:10
  })

  useEffect(()=>{
    if(latestData){
      const value =
        latestData?.pages?.flatMap((page) => page?.data?.data) || []
      setLatest(value)
    }
  },[latestData])


  /* ---------- Popular News ---------- */

  const {
    data: popularData
  } = Pagination({
    url:`/user/news`,
    keyValuepair:{
      id:"",
      division:"",
      distic:"",
      upozila:"",
      locationType:'',
      subcategory:'',
      category:"",
      views:"true",
      database:"news"
    },
    page:1,
    limit:10
  })

  useEffect(()=>{
    if(popularData){
      const value =
        popularData?.pages?.flatMap((page) => page?.data?.data) || []
      setPopular(value)
    }
  },[popularData])


  return (
    <NewsTabCard
      latestNews={latest}
      popularNews={popular}
    />
  )
}