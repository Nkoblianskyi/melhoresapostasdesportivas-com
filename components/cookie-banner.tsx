"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50">
      <div className="bg-card border border-border rounded-t-2xl md:rounded-2xl shadow-xl p-5 m-0 md:m-0">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Utilizamos Cookies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Para melhorar a sua experiência de navegação e personalizar conteúdo.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Aceitar
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-muted text-muted-foreground text-sm font-semibold rounded-lg hover:bg-muted/80 transition-colors"
              >
                Recusar
              </button>
            </div>
          </div>
          <button onClick={handleDecline} className="p-1 hover:bg-muted rounded-full transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
