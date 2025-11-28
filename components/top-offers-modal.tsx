"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)
      return () => clearTimeout(timer)
  }, [])

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-brand-gold text-brand-gold" : "text-border"}`} />
    ))
  }

  const topSite = sites[0]
  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[420px] p-0 bg-card border-border overflow-hidden">
        {/* Header with brand color */}
        <div className="bg-brand-green p-4 text-white text-center">
          <DialogHeader>
            <DialogTitle className="text-lg font-serif font-bold text-white">Oferta Exclusiva</DialogTitle>
          </DialogHeader>
          <span className="inline-block px-3 py-1 bg-brand-gold text-brand-navy text-xs font-bold rounded-full mt-2">
            #1 RECOMENDADO
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Logo */}
          <div className="bg-brand-navy rounded-xl p-4 h-20 flex items-center justify-center mb-4">
            <div className="relative h-12 w-full">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">{renderStars(topSite.stars)}</div>
            <span className="font-bold text-lg text-foreground">{topSite.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({topSite.reviews.toLocaleString()})</span>
          </div>

          {/* Bonus */}
          <div className="bg-secondary/50 rounded-xl p-4 text-center mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bónus Exclusivo</p>
            <p className="text-xl font-bold text-brand-green">{topSite.bonus}</p>
          </div>

          {/* CTA */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Obter Bónus <ExternalLink className="w-4 h-4" />
          </a>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            18+ | T&Cs Aplicam-se | Jogue com Responsabilidade
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
