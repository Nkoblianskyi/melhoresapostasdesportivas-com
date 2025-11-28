"use client"

import { useState, useEffect } from "react"
import { Logo } from "./logo"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <>
      {/* Magazine stripe accent */}
      <div className="magazine-stripe" />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Empty div for balance */}
            <div className="w-20 md:w-24" />

            {/* Centered Logo */}
            <div className="flex-1 flex justify-center">
              <Logo size="md" />
            </div>

            {/* SRIJ Image */}
            <a
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 md:w-24 flex justify-end"
            >
              <div className="relative w-16 h-10 md:w-20 md:h-12">
                <Image
                  src="/srij-new.svg"
                  alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>

      </header>
    </>
  )
}
