"use client"

import { bettingSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { ExpertAnalysis } from "@/components/expert-analysis"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { SportsCategories } from "@/components/sports-categories"
import { WhyTrustUs } from "@/components/why-trust-us"
import { BonusGuide } from "@/components/bonus-guide"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RatingList sites={bettingSites} />
        <SportsCategories />
        <ExpertAnalysis />
        <WhyTrustUs />
        <BonusGuide />

      </main>
      <Footer />
      <TopOffersModal sites={bettingSites} />
      <CookieBanner />
    </div>
  )
}
