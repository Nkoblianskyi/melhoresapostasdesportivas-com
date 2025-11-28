export function ExpertAnalysis() {
  const criteria = [
    {
      title: "Competitividade das Odds",
      description: "Comparamos margens e valores em centenas de mercados para garantir as melhores cotações.",
      score: "40%",
    },
    {
      title: "Segurança & Licença",
      description: "Verificação rigorosa de licenciamento SRIJ e protocolos de proteção de dados.",
      score: "25%",
    },
    {
      title: "Pagamentos & Suporte",
      description: "Testamos velocidade de levantamentos e qualidade do apoio ao cliente em português.",
      score: "20%",
    },
    {
      title: "Bónus & Condições",
      description: "Análise transparente de ofertas, requisitos de apostas e termos aplicáveis.",
      score: "15%",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-3">Metodologia</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como Avaliamos Cada Casa de Apostas
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A nossa equipa de especialistas testa pessoalmente cada plataforma durante semanas, avaliando todos os
              aspetos da experiência de apostas para apostadores portugueses.
            </p>

            <div className="space-y-3">
              {criteria.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border"
                >
                  <span className="text-sm font-bold text-brand-green w-6">{index + 1}.</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                        {item.score}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-serif text-xl font-bold text-foreground mb-5 text-center border-b border-border pb-4">
              Sistema de Pontuação
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-brand-green/5 rounded-lg border-l-4 border-brand-green">
                <div className="text-2xl font-serif font-bold text-brand-green">9.0+</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Excelente</div>
                  <div className="text-xs text-muted-foreground">Plataformas premium recomendadas</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-brand-gold/5 rounded-lg border-l-4 border-brand-gold">
                <div className="text-2xl font-serif font-bold text-brand-gold">8.0+</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Muito Bom</div>
                  <div className="text-xs text-muted-foreground">Casas confiáveis com boa qualidade</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg border-l-4 border-muted-foreground/30">
                <div className="text-2xl font-serif font-bold text-muted-foreground">7.0+</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Bom</div>
                  <div className="text-xs text-muted-foreground">Opções sólidas para necessidades específicas</div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-5 pt-4 border-t border-border">
              Todas as avaliações são atualizadas mensalmente pela nossa equipa editorial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
