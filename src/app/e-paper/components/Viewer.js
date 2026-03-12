"use client";

import { useState } from "react";

export default function Viewer({ image }) {
  const [zoom, setZoom] = useState(0.95);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 5)); // max zoom 5x
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.2)); // min zoom 0.2x

  return (
    <div className="flex-1 h-[95vh] overflow-auto p-2 relative bg-gray-200 flex justify-center items-center">

      {/* Zoom Controls */}
      <div className="z-50 flex gap-2 sticky top-4 left-1/2 -translate-x-1/2 bg-white/80 p-2 rounded shadow-md backdrop-blur-sm">
        <button
          onClick={zoomIn}
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          -
        </button>
      </div>

      {/* Image Viewer */}
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={image}
          style={{ transform: `scale(${zoom})` }}
          className="transition-transform duration-300 w-auto h-auto max-w-full max-h-full object-contain object-center"
        />
      </div>

    </div>
  );
}