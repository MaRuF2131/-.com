"use client"

export default function ViewController({
  viewMode,
  setViewMode,
  pageImage
}) {

  const download = () => {

    const a = document.createElement("a")
    a.href = pageImage
    a.download = "epaper-page.jpg"
    a.click()

  }

  const share = () => {

    if (navigator.share) {
      navigator.share({
        title:"Epaper",
        url:window.location.href
      })
    } else {
      alert("Share not supported")
    }

  }

  const fullView = () => {

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }

  }

  return (

    <div className="flex gap-2">

      <button
        onClick={()=>setViewMode("image")}
        className={`px-3 border ${viewMode==="image"?"bg-blue-500 text-white":""}`}
      >
        Image View
      </button>

      <button
        onClick={()=>setViewMode("text")}
        className="px-3 border"
      >
        Text View
      </button>

      <button
        onClick={fullView}
        className="px-3 border"
      >
        Full View
      </button>

      <button
        onClick={()=>setViewMode("page")}
        className="px-3 border"
      >
        Page View
      </button>

      <button
        onClick={share}
        className="px-3 border"
      >
        Share
      </button>

      <button
        onClick={download}
        className="px-3 border"
      >
        Download
      </button>

    </div>

  )
}