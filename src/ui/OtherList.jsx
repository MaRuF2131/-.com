"use client";

import { FaImages, FaPhotoVideo } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaSoundcloud } from "react-icons/fa";

const menuItems = [
  {
    name: "ভিডিও স্টোরি",
    icon: <FaPhotoVideo className="text-pink-500 text-xl" />,
  },
  {
    name: "ফটো স্টোরি",
    icon: <IoBookOutline className="text-blue-500 text-xl" />,
  },
  {
    name: "ফটো গ্যালারি",
    icon: <HiOutlinePhotograph className="text-red-500 text-xl" />,
  },
  {
    name: "ভিডিও গ্যালারি",
    icon: <MdOutlineVideoLibrary className="text-red-500 text-xl" />,
  },
  {
    name: "অডিও",
    icon: <FaSoundcloud className="text-orange-500 text-xl" />,
  },
];

export default function MediaMenu() {
  return (
    <div className="w-full border-t border-b border-gray-300 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-10 py-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition"
          >
            {item.icon}
            <span className="text-lg font-semibold text-gray-800">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}