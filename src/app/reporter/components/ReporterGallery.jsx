"use client";

import { useState, useEffect } from "react";

export default function ReporterGallery({ reporters }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(reporters || []);

  useEffect(() => {
    if (!reporters) return;
    const result = reporters.filter(r =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.reportArea.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, reporters]);

  return (
    <div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="সার্চ করুন..."
          className="border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((reporter) => (
          <div
            key={reporter._id}
            className="bg-white p-3 w-full flex flex-col items-center justify-between min-h-48 shadow-md rounded overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={reporter?.profileImage || "/placeholder.jpeg"}
              alt={reporter?.name}
              className=" h-20 w-20 object-fill rounded-full border border-gray-400"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{reporter?.name}</h3>
              <p className="text-gray-600">{reporter?.reportArea}</p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            কোনো সাংবাদিক পাওয়া যায়নি
          </div>
        )}
      </div>
    </div>
  );
}