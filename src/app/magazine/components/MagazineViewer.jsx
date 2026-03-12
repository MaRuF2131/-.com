"use client";

import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MagazineViewer({ pages }) {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 450, height: 650 });

  if (!pages) return <div>No pages found</div>;

  const totalPages = pages.pages || 0;
  const publicId = pages.publicId;

  // Generate page URLs dynamically
  const pageUrls = Array.from({ length: totalPages }, (_, i) => {
    return `https://res.cloudinary.com/drexcxkuq/image/upload/pg_${i + 1}/f_jpg/${publicId}.pdf`;
  });

  // Responsive book size
  useEffect(() => {
    const updateSize = () => {
      const w = Math.min(window.innerWidth - 40, 450); // padding 20 each side
      const h = (w / 450) * 650; // maintain aspect ratio
      setBookSize({ width: w, height: h });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextPage = () => bookRef.current?.pageFlip().flipNext();
  const prevPage = () => bookRef.current?.pageFlip().flipPrev();

  return (
    <div className="w-full flex p-4 flex-col items-center">
      <div className="relative">

        <HTMLFlipBook
          width={bookSize.width}
          height={bookSize.height}
          ref={bookRef}
          showCover={true}
          onFlip={(e) => setPage(e.data)}
          className="shadow-2xl"
        >
          {pageUrls.map((url, index) => (
            <div key={index} className="bg-white">
              <img
                src={url}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* LEFT BUTTON */}
        <button
          onClick={prevPage}
          className="absolute z-50 left-0 md:left-[-60px] top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextPage}
          className="absolute z-50 right-0 md:right-[-60px] top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full"
        >
          <FaChevronRight />
        </button>

      </div>

      {/* PAGE NUMBER */}
      <div className="mt-5 text-lg font-medium">
        Page {page + 1} / {totalPages}
      </div>
    </div>
  );
}