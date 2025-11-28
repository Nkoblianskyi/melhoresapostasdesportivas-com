export function FaqSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-emerald-950/30 rounded-lg border border-emerald-900/50 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Como escolhemos os melhores sites de apostas?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Avaliamos cada plataforma com base em critérios rigorosos incluindo licenciamento SRIJ, segurança,
                variedade de mercados, competitividade de odds, bónus, métodos de pagamento e qualidade do apoio ao
                cliente.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Os sites listados são legais em Portugal?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Sim, todos os sites que recomendamos possuem licença válida do SRIJ (Serviço de Regulação e Inspeção de
                Jogos) ou de outras autoridades reguladoras respeitáveis, garantindo operação legal em Portugal.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Como funcionam os bónus de apostas?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Os bónus de boas-vindas geralmente correspondem ao seu primeiro depósito até um determinado valor. Estão
                sujeitos a requisitos de apostas que devem ser cumpridos antes de poder levantar os ganhos. Leia sempre
                os termos e condições.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">É seguro apostar online?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Sim, desde que utilize sites licenciados e regulamentados. Todos os nossos sites recomendados utilizam
                encriptação SSL, protegem os seus dados pessoais e financeiros, e são auditados regularmente pelas
                autoridades competentes.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Qual é a idade mínima para apostar?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Em Portugal, a idade mínima legal para participar em apostas desportivas é 18 anos. Todos os operadores
                licenciados verificam a idade e identidade dos utilizadores durante o processo de registo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
