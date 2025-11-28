"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/football-stadium-green-grass-aerial-view-sports-fi.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-brand-green/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-brand-gold/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-green/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-gold/30 rounded-full" />
      </div>

      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
   

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight text-balance">
              Melhores Apostas Desportivas em <span className="text-brand-green">Portugal</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Guia completo das casas de apostas licenciadas pelo SRIJ com análises especializadas.
            </p>

                     <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green text-white rounded-full text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span>Atualizado Novembro 2025</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-6">
              <div className="flex items-center gap-1.5 text-xs md:text-sm">

                <span className="font-medium">100% Legal</span>
                <Image src="/flag.png" alt="Legal" width={20} height={20} />
              </div>
              <div className="flex items-center gap-1.5 text-xs md:text-sm">
                <span className="font-medium">Bónus Exclusivos</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs md:text-sm">
                <span className="font-medium">Pagamentos Rápidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
