"use client";

import { useEffect } from "react";

export default function PageNavigation({ pages, currentPage, setPage }) {
  const totalPages = pages.pages || 0;
  const publicId = pages.publicId;

  // Generate page URLs dynamically
  const pageUrls = Array.from({ length: totalPages }, (_, i) => {
    return `https://res.cloudinary.com/drexcxkuq/image/upload/pg_${i + 1}/f_jpg/${publicId}.pdf`;
  });

  // Update displayed image when currentPage changes

  const next = () => {
    if (currentPage < totalPages - 1) setPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 0) setPage(currentPage - 1);
  };

  // Sliding window: show 4 page buttons max
  const maxButtons = 4;
  let start = Math.max(currentPage - 1, 0);
  let end = start + maxButtons;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - maxButtons, 0);
  }
  const visiblePages = pageUrls.slice(start, end);

  return (
    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-md">

      <button
        onClick={prev}
        className="px-3 py-1 border rounded hover:bg-gray-200 transition"
        disabled={currentPage === 0}
      >
        ❮
      </button>

      {visiblePages.map((_, idx) => {
        const pageIndex = start + idx; // actual index
        return (
          <button
            key={pageIndex}
            onClick={() => setPage(pageIndex)}
            className={`px-3 py-1 border rounded transition ${
              currentPage === pageIndex
                ? "bg-blue-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            {pageIndex + 1}
          </button>
        );
      })}

      <button
        onClick={next}
        className="px-3 py-1 border rounded hover:bg-gray-200 transition"
        disabled={currentPage === totalPages - 1}
      >
        ❯
      </button>

    </div>
  );
}