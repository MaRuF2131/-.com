"use client"

import {useState} from "react"

import TopToolbar from "./components/TopToolbar"
import PageSidebar from "./components/PageSidebar"
import Viewer from "./components/Viewer"
import PageGrid from "./components/PageGrid"
import TextView from "./components/TextView"

export default function Page(){

  const pages=[
    "/epaper/p1.jpg",
    "/epaper/p2.jpg",
    "/epaper/p3.jpg",
    "/epaper/p4.jpg"
  ]

  const [currentPage,setPage]=useState(0)
  const [viewMode,setViewMode]=useState("image")

  return(

    <div className="h-screen flex flex-col">

      <TopToolbar
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {viewMode==="page" ? (

        <PageGrid pages={pages} setPage={setPage}/>

      ) : viewMode==="text" ? (

        <TextView/>

      ) : (

        <div className="flex flex-1">

          <PageSidebar pages={pages} setPage={setPage}/>

          <Viewer image={pages[currentPage]}/>

        </div>

      )}

    </div>

  )

}