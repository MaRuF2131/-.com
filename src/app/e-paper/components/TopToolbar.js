"use client"

import PageNavigation from "./PageNavigation"
import ViewController from "./ViewController"

export default function TopToolbar({
  pages,
  currentPage,
  setPage,
  viewMode,
  setViewMode
}) {

  return (

    <div className="flex justify-between gap-3 overflow-auto no-scrollbar items-center bg-gray-100 px-4 py-2 border-b">

      <div className="flex gap-3">

        <select className="border px-2 py-1">
          <option>২য় সংস্করণ</option>
        </select>

        <input type="date" className="border px-2 py-1"/>

      </div>

      <PageNavigation
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      />

      <ViewController
        viewMode={viewMode}
        setViewMode={setViewMode}
        pageImage={pages[currentPage]}
      />

    </div>

  )
}