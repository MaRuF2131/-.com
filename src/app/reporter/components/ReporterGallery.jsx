"use client";

import { useState, useEffect } from "react";

export default function ReporterGallery({ reporters }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(reporters || []);

  useEffect(() => {
    if (!reporters) return;
    const result = reporters.filter(r =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.position.toLowerCase().includes(search.toLowerCase())
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
            className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={reporter.image || "/placeholder.jpg"}
              alt={reporter.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{reporter.name}</h3>
              <p className="text-gray-600">{reporter.position}</p>
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