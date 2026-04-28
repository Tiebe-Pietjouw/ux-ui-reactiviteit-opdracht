"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icon button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4">
          <a href="/home" className="hover:underline font-medium text-gray-900">Home</a>
          <hr className="border-gray-300" />
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Artikelen</p>
          <a href="/article1" className="hover:underline text-gray-700">Artikel 1</a>
          <a href="/article2" className="hover:underline text-gray-700">Artikel 2</a>
          <a href="/article3" className="hover:underline text-gray-700">Artikel 3</a>
          <hr className="border-gray-300" />
          <a href="/about" className="hover:underline">Over</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </SidebarSlider>
    </>
  )
}
