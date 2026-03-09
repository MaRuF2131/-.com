"use client"

export default function PageNavigation({ pages, currentPage, setPage }) {

  const next = () => {
    if (currentPage < pages.length - 1) {
      setPage(currentPage + 1)
    }
  }

  const prev = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1)
    }
  }

  return (

    <div className="flex items-center gap-2">

      <button onClick={prev} className="px-2 border">
        ❮
      </button>

      {pages.map((_,i)=>(
        <button
          key={i}
          onClick={()=>setPage(i)}
          className={`px-2 border ${
            currentPage===i ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i+1}
        </button>
      ))}

      <button onClick={next} className="px-2 border">
        ❯
      </button>

    </div>

  )
}