"use client";

export default function ViewController({ viewMode, setViewMode, pageImage,image }) {

  const download = () => {
    const a = document.createElement("a");
    a.href = image;
    a.download ="e-paper";
    a.click();
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: "Epaper",
        url: window.location.href,
      });
    } else {
      alert("Share not supported");
    }
  };

  const fullView = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="flex flex-wrap gap-2 bg-white p-2 rounded shadow-md">

      <button
        onClick={() => setViewMode("image")}
        className={`px-3 py-1 border rounded transition ${
          viewMode === "image" ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-100"
        }`}
      >
        Image View
      </button>

      <button
        onClick={() => setViewMode("text")}
        className={`px-3 py-1 border rounded transition ${
          viewMode === "text" ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-100"
        }`}
      >
        Text View
      </button>

      <button
        onClick={fullView}
        className="px-3 py-1 border rounded hover:bg-gray-100 transition"
      >
        Full View
      </button>

      <button
        onClick={() => setViewMode("page")}
        className={`px-3 py-1 border rounded transition ${
          viewMode === "page" ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-100"
        }`}
      >
        Page View
      </button>

      <button
        onClick={share}
        className="px-3 py-1 border rounded hover:bg-gray-100 transition"
      >
        Share
      </button>

      <button
        onClick={download}
        className="px-3 py-1 border rounded hover:bg-gray-100 transition"
      >
        Download
      </button>

    </div>
  );
}