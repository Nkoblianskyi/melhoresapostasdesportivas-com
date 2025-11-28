export function WhyTrustUs() {
  const stats = [
    { value: "50K+", label: "Leitores Mensais" },
    { value: "15+", label: "Anos de Experiência" },
    { value: "100%", label: "Sites Licenciados SRIJ" },
    { value: "24h", label: "Atualizações Diárias" },
  ]

  return (
    <section className="py-12 md:py-16 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Porquê Confiar em Nós?</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Somos o portal de referência em apostas desportivas em Portugal, com uma equipa dedicada à transparência e
            qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border border-white/10 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="font-semibold text-lg mb-2">Independência Editorial</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              As nossas análises são imparciais e baseadas em testes reais. Embora recebamos compensações de algumas
              marcas, isso nunca influencia as nossas classificações ou recomendações.
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="font-semibold text-lg mb-2">Compromisso com o Jogo Responsável</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Promovemos ativamente o jogo responsável e trabalhamos com organizações como o SICAD. Apostar deve ser
              apenas entretenimento - nunca jogue mais do que pode perder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
