"use client"

import {useEffect, useState} from "react"

import TopToolbar from "./components/TopToolbar"
import PageSidebar from "./components/PageSidebar"
import Viewer from "./components/Viewer"
import PageGrid from "./components/PageGrid"
import TextView from "./components/TextView"
import { useQuery } from "@tanstack/react-query"
import api from "../service/axios"

export default function Page(){

  const [epaper, setepaper] = useState([]);
  const [totalPages, settotalPages] = useState(0);
  const [publicId, setpublicId] = useState(null);
  const [currentPage,setPage]=useState(1)
  const [viewMode,setViewMode]=useState("image")
  const [image,setimage]=useState(null)

  const { data, isLoading } = useQuery({
    queryKey: ["e-paper"],
    queryFn: async () => {
      const res = await api.get(`/admin/magazine`);
      return res.data?.data || [];
    },
   });

  // Generate page URLs dynamically
  const pageUrls = Array.from({ length: totalPages }, (_, i) => {
    return `https://res.cloudinary.com/drexcxkuq/image/upload/pg_${i + 1}/f_jpg/${publicId}.pdf`;
  });

  // Update displayed image when currentPage changes
  useEffect(() => {
    if (pageUrls[currentPage]) setimage(pageUrls[currentPage]);
  }, [currentPage, pageUrls]);

  useEffect(() => {
    if (data ) {
      setepaper(data); // প্রথম magazine
      settotalPages(epaper[0]?.pages || 0);
      setpublicId(epaper[0]?.publicId);
    }
  }, [data,epaper]);

  if (isLoading) return <div>Loading...</div>;

  if (epaper.length==0) return <div>No magazine found</div>;



  return(

    <div className="h-auto flex flex-col">

      <TopToolbar
        pages={epaper[0] || []}
        currentPage={currentPage}
        image={image}
        setPage={setPage}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {viewMode==="page" ? (

        <PageGrid pages={epaper[0]} setPage={setPage}/>

      ) : viewMode==="text" ? (

        <TextView/>

      ) : (

        <div className="flex flex-1">

          <PageSidebar pages={epaper[0] || []} currentPage={currentPage}setPage={setPage}/>
          
          <Viewer image={image}/>

        </div>

      )}

    </div>

  )

}