import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph } from "@/components/policy-content"

export default function AboutPage() {
  return (
    <PolicyPageLayout title="Sobre Nós">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            melhoresapostasdesportivas.com
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O seu guia de confiança para as melhores experiências de apostas desportivas em Portugal
          </p>
        </div>

        <PolicySection title="A Nossa Missão">
          <PolicyParagraph>
            No melhoresapostasdesportivas.com, a nossa missão é fornecer aos apostadores portugueses informações
            precisas e atualizadas sobre os melhores sites de apostas desportivas disponíveis no mercado nacional.
            Acreditamos na transparência, honestidade e no jogo responsável como pilares fundamentais da nossa
            atividade.
          </PolicyParagraph>
          <PolicyParagraph>
            Somos uma equipa de especialistas portugueses apaixonados pelo desporto e pelas apostas, dedicados a ajudar
            os nossos utilizadores a tomar decisões informadas e seguras no mundo das apostas desportivas.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Análises Independentes" delay={100}>
          <PolicyParagraph>
            Todas as nossas análises são conduzidas de forma independente pela nossa equipa de especialistas em apostas
            desportivas. Testamos minuciosamente cada plataforma para garantir que fornecemos informações precisas sobre
            a experiência do utilizador, bónus, métodos de pagamento e atendimento ao cliente.
          </PolicyParagraph>
          <PolicyParagraph>
            A nossa equipa tem anos de experiência no mercado português de apostas e conhece profundamente as
            necessidades e preferências dos apostadores nacionais.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Metodologia de Classificação" delay={200}>
          <PolicyParagraph>
            Levamos as nossas classificações muito a sério. A nossa equipa utiliza um sistema de avaliação abrangente
            para garantir que apenas os melhores sites de apostas chegam ao topo da nossa lista.
          </PolicyParagraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Licenciamento e Segurança</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Apenas listamos sites de apostas devidamente licenciados pelo SRIJ ou outras autoridades respeitáveis.
                Verificamos encriptação SSL e medidas de proteção de dados.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Ofertas de Bónus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Avaliamos bónus de boas-vindas, promoções contínuas e programas de fidelidade. A nossa equipa lê os
                termos para avaliar requisitos de apostas e limites de tempo.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Experiência do Utilizador</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Testamos o website e aplicações móveis quanto à facilidade de uso, navegação, velocidades de
                carregamento e design geral.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Mercados e Odds</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comparamos a gama de desportos e eventos cobertos, bem como a competitividade das odds em diferentes
                mercados.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Métodos de Pagamento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Verificamos a variedade de opções de depósito e levantamento, tempos de processamento, taxas e limites.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-lg border border-border">
              <h3 className="text-base font-semibold mb-2 text-foreground">Apoio ao Cliente</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Testamos a capacidade de resposta, conhecimento e utilidade das equipas de apoio ao cliente.
              </p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Sistema de Pontuação" delay={300}>
          <div className="bg-brand-green/5 p-5 rounded-lg border border-brand-green/20">
            <PolicyParagraph>
              Cada site de apostas recebe uma pontuação de 10 baseada na nossa avaliação abrangente. A pontuação final é
              uma média ponderada de todos os critérios, com segurança e experiência do utilizador a receberem a maior
              prioridade. Apenas sites com pontuação superior a 8.0 chegam à nossa lista recomendada.
            </PolicyParagraph>
          </div>
        </PolicySection>

        <PolicySection title="Divulgação de Afiliação" delay={400}>
          <PolicyParagraph>
            O melhoresapostasdesportivas.com é financiado através de parcerias de afiliação com operadores de apostas.
            Quando se regista através dos nossos links, podemos receber uma comissão. Isto ajuda-nos a manter o nosso
            site e continuar a fornecer informações gratuitas aos nossos utilizadores. No entanto, isto não influencia
            as nossas análises ou classificações.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Jogo Responsável" delay={500}>
          <div className="bg-brand-red/5 border border-brand-red/20 p-5 rounded-lg">
            <PolicyParagraph>
              Defendemos fortemente o jogo responsável. As apostas devem ser divertidas e não uma forma de ganhar
              dinheiro. Encorajamos os nossos utilizadores a estabelecer limites, nunca perseguir perdas e procurar
              ajuda se o jogo se tornar problemático. Linha de Apoio: 213 950 213.
            </PolicyParagraph>
          </div>
        </PolicySection>

        <PolicySection title="Contacte-nos" delay={600}>
          <div className="bg-muted/30 p-5 rounded-lg border border-border">
            <PolicyParagraph>
              Tem questões ou sugestões? Adoraríamos ouvir de si. Contacte a nossa equipa em{" "}
              <p className="text-brand-green hover:underline">
                info@melhoresapostasdesportivas.com
              </p>
            </PolicyParagraph>
          </div>
        </PolicySection>
      </div>
    </PolicyPageLayout>
  )
}
