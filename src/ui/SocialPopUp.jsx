"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaGoogle,
  FaSoundcloud,
  FaWhatsapp,
  FaHeart
} from "react-icons/fa";

export default function SocialNavbar() {

  return (
      <div className="bg-white  mx-auto text-sm max-w-[1000px] shadow-lg rounded w-full h-full text-black flex flex-wrap justify-between items-center px-6 py-3">

                {/* Facebook */}
                <div className="w-full border-b border-gray-300 pb-5">
                    <h3 className="font-bold text-lg mb-4">
                        ফেসবুক পেজ
                    </h3>

                    <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">

                        <a
                        className="flex items-center gap-2 hover:text-blue-600 transition"
                        href="https://www.facebook.com/share/1KciEdBv1Y/?mibextid=wwXIfr"
                        >
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor Online
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor News
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor.com
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor World
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor Sports
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Kontosor Entertainment
                        </a>

                        <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#">
                        <FaFacebook className="text-blue-600 text-lg" />
                        kontosor Drama
                        </a>

                    </div>
                </div>

               
                {/* YouTube */}
                <div className="w-full border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    ইউটিউব চ্যানেল
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {[
                    "kontosor News",
                    "kontosor World",
                    "kontosor Entertainment",
                    "kontosor Sports",
                    "kontosor",
                    "kontosor Drama",
                    ].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-red-600 transition"
                    >
                        <FaYoutube className="text-red-600 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>


                {/* WhatsApp */}
                <div className="w-full border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    
                    হোয়াটসঅ্যাপ
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor News", "kontosor Sports", "kontosor World"].map((item, i) => (
                    <a
                        key={i}
                        href="https://wa.me/8801747773132"
                        className="flex items-center gap-2 hover:text-green-500 transition"
                    >
                        <FaWhatsapp className="text-green-500 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

               
                {/* TikTok */}
                <div className="w-full border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    টিকটক
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor News", "kontosor Entertainment"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-black transition"
                    >
                        <FaTiktok className="text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

                {/* Likee */}
                <div className="w-full border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    লাইকি
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor News"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-pink-500 transition"
                    >
                        <FaHeart className="text-pink-500 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

                {/* Twitter */}
                <div className="w-1/2 border-b border-gray-300 py-5">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                        টুইটার
                    </h3>

                    <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                        {["kontosor"].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                        >
                            <FaTwitter className="text-blue-400 text-lg" />
                            {item}
                        </a>
                        ))}
                    </div>
                </div>

               {/* Instagram */}
                <div className="w-1/2 border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    ইনস্টাগ্রাম
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-pink-500 transition"
                    >
                        <FaInstagram className="text-pink-500 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

                {/* LinkedIn */}
                <div className="w-1/2 border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    
                    লিঙ্কডইন
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-blue-700 transition"
                    >
                        <FaLinkedin className="text-blue-700 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

                {/* Telegram */}
                <div className="w-1/2 border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                    
                    টেলিগ্রাম
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    {["kontosor"].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="flex items-center gap-2 hover:text-blue-500 transition"
                    >
                        <FaTelegram className="text-blue-500 text-lg" />
                        {item}
                    </a>
                    ))}
                </div>
                </div>

               {/* Others */}
                <div className="w-full border-b border-gray-300 py-5">
                <h3 className="font-bold text-lg mb-4">
                    অন্যান্য
                </h3>

                <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-full">
                    <a
                    href="#"
                    className="flex items-center gap-2 hover:text-orange-500 transition"
                    >
                    <FaSoundcloud className="text-orange-500 text-lg" />
                    kontosor News (সাউন্ডক্লাউড)
                    </a>

                    <a
                    href="#"
                    className="flex items-center gap-2 hover:text-green-600 transition"
                    >
                    <FaGoogle className="text-green-600 text-lg" />
                    kontosor (গুগল নিউজ)
                    </a>
                </div>
                </div>

    </div>
  );
}