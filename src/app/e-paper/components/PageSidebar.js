"use client"
export default function PageSidebar({ pages, setPage,currentPage }) {
  const totalPages = pages.pages || 0;
  const publicId = pages.publicId;

  // Generate page URLs dynamically
  const pageUrls = Array.from({ length: totalPages }, (_, i) => {
    return `https://res.cloudinary.com/drexcxkuq/image/upload/pg_${i + 1}/f_jpg/${publicId}.pdf`;
  });


  return (
    <div className="w-40 md:block hidden border-r overflow-y-auto">
      <div className="bg-blue-600 text-white text-center py-2">
        সকল পাতা
      </div>

      <div className="w-full overflow-auto h-[90vh]">
        {pageUrls.map((p, i) => (
          <div
            key={i}
            onClick={() => setPage(i)}
            className={`${i===currentPage?"border border-black":""} p-2 cursor-pointer`}
          >
            <img src={p} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}