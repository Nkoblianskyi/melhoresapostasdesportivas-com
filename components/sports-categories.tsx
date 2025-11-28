export function SportsCategories() {
  const sports = [
    {
      name: "Futebol",
      description: "Liga Portugal, Champions, Premier League",
    },
    {
      name: "Ténis",
      description: "Grand Slams, ATP, WTA Tours",
    },
    {
      name: "Basquetebol",
      description: "NBA, Euroliga, FIBA",
    },
    {
      name: "Fórmula 1",
      description: "Grandes Prémios, Qualificações",
    },
    {
      name: "Ciclismo",
      description: "Tour, Giro, Volta a Portugal",
    },
    {
      name: "MMA & Boxe",
      description: "UFC, Boxe Profissional",
    },
  ]

  return (
    <section id="desportos" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-3">Cobertura Completa</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            Aposte nos Seus Desportos Favoritos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Odds competitivas e mercados especiais para todas as modalidades
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-brand-green/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1">{sport.name}</h3>
              <p className="text-xs text-muted-foreground">{sport.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          E muito mais: Hóquei, Voleibol, Andebol, Golfe, Rugby, eSports e dezenas de outras modalidades
        </p>
      </div>
    </section>
  )
}
