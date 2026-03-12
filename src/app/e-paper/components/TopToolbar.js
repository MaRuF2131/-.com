"use client";

import PageNavigation from "./PageNavigation";
import ViewController from "./ViewController";

export default function TopToolbar({
  pages,
  currentPage,
  setPage,
  image,
  viewMode,
  setViewMode
}) {

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 bg-gray-100 px-4 py-3 border-b shadow-sm">

      {/* Left: Edition + Date */}
      <div className="flex flex-wrap gap-3 items-center">
        <select className="border rounded px-3 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>২য় সংস্করণ</option>
        </select>

        <input
          type="date"
          className="border rounded px-3 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Center: Page Navigation */}
      <div className="flex-1 flex justify-center">
        <PageNavigation
          pages={pages}
          currentPage={currentPage}
          setPage={setPage}
        />
      </div>

      {/* Right: View Controller */}
      <div className="flex gap-2">
        <ViewController
          viewMode={viewMode}
          image={image}
          setViewMode={setViewMode}
          pageImage={pages[currentPage]}
        />
      </div>

    </div>
  );
}