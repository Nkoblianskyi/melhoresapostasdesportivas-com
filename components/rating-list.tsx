import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 text-border" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-border" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
            </div>
          </div>,
        )
      }
    }
    return starElements
  }

  const getBadgeColor = (index: number, badge: string) => {
    if (index === 0) return "bg-brand-gold text-brand-navy"
    if (badge.includes("POPULAR")) return "bg-brand-green text-white"
    if (badge.includes("TENDÊNCIA") || badge.includes("CRESCIMENTO")) return "bg-brand-red text-white"
    return "bg-brand-navy text-white"
  }

  return (
    <section id="rankings" className="py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/green-grass-texture-sports-field-turf-pattern.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/97 via-background/95 to-secondary/97" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-brand-green/5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-brand-green/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-brand-green/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rankings List */}
        <div className="space-y-3">
          {sites.map((site, index) => {
            const isFirst = index === 0
            const showBadge = site.badges.length > 0

            return (
              <div
                key={site.id}
                className={`relative bg-card/95 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  showBadge ? "pt-4 mt-3" : ""
                } ${isFirst ? "border-brand-gold border-2 shadow-md" : "border-border hover:border-brand-green/30"}`}
              >
                {/* Feature Badge */}
                {showBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm ${getBadgeColor(index, site.badges[0])}`}
                    >
                      {site.badges[0]}
                    </span>
                  </div>
                )}

                {/* Ranking Badge */}
                <div
                  className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-sm z-10 ${
                    isFirst
                      ? "bg-brand-gold text-brand-navy"
                      : index < 3
                        ? "bg-brand-green text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Desktop Layout - More compact */}
                  <div className="hidden md:grid grid-cols-[160px_1fr_140px_140px_120px] items-center gap-4 p-4 pl-14">
                    {/* Logo */}
                    <div className="bg-brand-navy rounded-lg p-3 h-24 flex items-center justify-center">
                      <div className="relative h-24 w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="text-center px-2">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-0.5">Bónus</p>
                      <h3 className="text-2xl font-bold text-foreground leading-tight">{site.bonus}</h3>
                    </div>

                    {/* Rating */}
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-brand-green">{site.rating.toFixed(1)}</div>
                      <div className="flex justify-center gap-0.5">{renderStars(site.rating)}</div>
                      <p className="text-xs text-muted-foreground mt-1">{site.reviews.toLocaleString()} avaliações</p>
                    </div>

                    {/* Score Label */}
                    <div className="text-center">
                      <div
                        className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          site.rating >= 9.5
                            ? "bg-brand-green/10 text-brand-green"
                            : site.rating >= 9.0
                              ? "bg-brand-gold/10 text-brand-gold"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {site.rating >= 9.5 ? "Excelente" : site.rating >= 9.0 ? "Muito Bom" : "Bom"}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <span className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 text-sm">
                        Visitar <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden p-4 pl-14">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-brand-navy rounded-lg p-3 h-20 w-32 flex items-center justify-center flex-shrink-0">
                        <div className="relative h-14 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bónus</p>
                        <p className="text-2xl font-bold text-foreground leading-tight">{site.bonus}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-serif font-bold text-brand-green">{site.rating.toFixed(1)}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-xs text-muted-foreground">{site.reviews.toLocaleString()} avaliações</p>
                      </div>
                      <span className="bg-brand-green text-white font-bold py-2.5 px-6 rounded-lg text-center text-sm">
                        Visitar
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Terms Footer */}
                <div className="border-t border-border px-4 py-2 bg-muted/30">
                  <p className="text-[10px] text-muted-foreground text-center">{site.terms}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
