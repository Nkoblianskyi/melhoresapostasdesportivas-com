export function BonusGuide() {
  const bonusTypes = [
    {
      number: "01",
      title: "Apostas Grátis",
      description:
        "Receba apostas grátis após uma aposta qualificativa. Os ganhos geralmente excluem a participação inicial.",
      tip: "Ideal para experimentar sem risco",
    },
    {
      number: "02",
      title: "Bónus de Depósito",
      description:
        "A casa iguala uma percentagem do seu depósito como fundos de bónus, sujeitos a requisitos de apostas.",
      tip: "Melhor valor para apostadores regulares",
    },
    {
      number: "03",
      title: "Sem Depósito",
      description: "Bónus ou apostas grátis apenas por se registar. Valores menores mas completamente livres de risco.",
      tip: "Perfeito para testar a plataforma",
    },
  ]

  return (
    <section id="guias" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-3">Guia de Bónus</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">Tipos de Bónus Explicados</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Entenda cada tipo de oferta para maximizar as suas vantagens
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {bonusTypes.map((bonus) => (
            <div
              key={bonus.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-brand-green/50 transition-colors"
            >
              <span className="text-3xl font-serif font-bold text-brand-green/20">{bonus.number}</span>
              <h3 className="font-semibold text-lg text-foreground mt-2 mb-2">{bonus.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{bonus.description}</p>
              <div className="pt-3 border-t border-border">
                <p className="text-xs font-medium text-brand-gold">{bonus.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-card border border-border rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="text-xl font-bold text-brand-red border border-brand-red/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              18+
            </span>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Lembre-se:</strong> Leia sempre os termos e condições completos antes
              de reivindicar qualquer bónus. Requisitos de apostas, prazos e restrições variam entre operadores. Jogue
              com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
