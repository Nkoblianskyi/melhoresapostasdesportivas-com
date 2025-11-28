import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FadeIn } from "./animations/fade-in"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
}

export function PolicyPageLayout({ children, title, lastUpdated }: PolicyPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Compact */}
        <div className="relative py-12 md:py-16 bg-gradient-to-b from-brand-green/10 to-background border-b border-border">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground text-center mb-2">
                {title}
              </h1>
              {lastUpdated && (
                <p className="text-sm text-muted-foreground text-center">Última atualização: {lastUpdated}</p>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-border p-6 md:p-8 lg:p-10">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
