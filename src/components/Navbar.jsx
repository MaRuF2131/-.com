"use client"
import React, { useEffect, useState } from "react"
import Navbar1 from "@/ui/Navbar1"
import Navbar2 from "@/ui/Navbar2"

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll",window.scrollY);
      
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="w-full mt-1  z-[999] bg-white shadow-md">
      
      {/* Top Navbar (always static) */}
      <div className="block z-[999]">
        <Navbar1 />
      </div>

      {/* Bottom Navbar (becomes fixed on scroll) */}
        <Navbar2 isSticky={isSticky} />
    </div>
  )
}

export default Navbar
