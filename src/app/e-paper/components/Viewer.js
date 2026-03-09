"use client"

import {useState} from "react"

export default function Viewer({ image }) {

  const [zoom,setZoom] = useState(1)

  const zoomIn = ()=> setZoom(z=>z+0.2)
  const zoomOut = ()=> setZoom(z=>z-0.2)

  return (

    <div className="flex-1 flex flex-col items-center justify-center bg-gray-200">

      <div className="mb-2 flex gap-2">
        <button onClick={zoomIn} className="border px-2">+</button>
        <button onClick={zoomOut} className="border px-2">-</button>
      </div>

      <img
        src={image}
        style={{transform:`scale(${zoom})`}}
        className="transition"
      />

    </div>

  )
}