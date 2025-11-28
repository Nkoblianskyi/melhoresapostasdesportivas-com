import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"

export default function CookiePolicyPage() {
  return (
    <PolicyPageLayout title="Política de Cookies" lastUpdated="28 de Novembro de 2025">
      <PolicySection title="O que são Cookies">
        <PolicyParagraph>
          Os cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel quando
          visita um website. São amplamente utilizados para fazer os websites funcionarem de forma mais eficiente e
          fornecer informações aos proprietários do site. Os cookies melhoram a experiência do utilizador ao lembrar as
          suas preferências e ativar certas funcionalidades.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Como Usamos Cookies" delay={100}>
        <PolicyParagraph>
          O melhoresapostasdesportivas.com usa cookies por várias razões, incluindo para:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Fazer o nosso website funcionar como esperaria",
            "Lembrar as suas definições durante e entre visitas",
            "Melhorar a velocidade e segurança do site",
            "Permitir que partilhe páginas com redes sociais",
            "Melhorar continuamente o nosso website para si",
            "Tornar o nosso marketing mais eficiente",
          ]}
        />
      </PolicySection>

      <PolicySection title="Tipos de Cookies" delay={200}>
        <PolicyParagraph>Usamos os seguintes tipos de cookies:</PolicyParagraph>

        <div className="space-y-4 mt-4">
          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-2 text-foreground">Cookies Essenciais</h3>
            <PolicyParagraph>
              Estes cookies são necessários para o website funcionar adequadamente. Permitem funcionalidades principais
              como segurança, gestão de rede e acesso à conta. Pode desativar estes cookies alterando as definições do
              seu navegador, mas isto pode afetar como o website funciona.
            </PolicyParagraph>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-2 text-foreground">Cookies de Desempenho</h3>
            <PolicyParagraph>
              Estes cookies ajudam-nos a entender como os visitantes interagem com o nosso website recolhendo e
              reportando informações anonimamente. Permitem-nos reconhecer e contar o número de visitantes e ver como os
              visitantes se movem pelo nosso website.
            </PolicyParagraph>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-2 text-foreground">Cookies de Funcionalidade</h3>
            <PolicyParagraph>
              Estes cookies permitem ao website fornecer funcionalidade melhorada e personalização. Podem ser definidos
              por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas.
            </PolicyParagraph>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-2 text-foreground">Cookies de Segmentação</h3>
            <PolicyParagraph>
              Estes cookies registam a sua visita ao nosso website, as páginas que visitou e os links que seguiu.
              Usaremos esta informação para tornar o nosso website e a publicidade exibida nele mais relevante para os
              seus interesses.
            </PolicyParagraph>
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Cookies de Terceiros" delay={300}>
        <PolicyParagraph>
          Em alguns casos especiais, também usamos cookies fornecidos por terceiros de confiança:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis na web para nos ajudar a entender como usa o site e formas de melhorarmos a sua experiência.",
            "Também usamos botões de redes sociais e/ou plug-ins neste site que lhe permitem conectar-se com a sua rede social de várias formas.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Gerir Cookies" delay={400}>
        <PolicyParagraph>
          A maioria dos navegadores web permite algum controlo da maioria dos cookies através das definições do
          navegador. Para saber mais sobre cookies, incluindo como ver que cookies foram definidos, visite
          www.aboutcookies.org ou www.allaboutcookies.org.
        </PolicyParagraph>
        <PolicyParagraph>
          Para optar por não ser rastreado pelo Google Analytics em todos os websites, visite
          tools.google.com/dlpage/gaoptout.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Alterações à Política" delay={500}>
        <PolicyParagraph>
          Podemos atualizar a nossa Política de Cookies de tempos a tempos. Notificá-lo-emos de quaisquer alterações
          publicando a nova Política de Cookies nesta página e atualizando a data "Última atualização".
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={600}>
        <PolicyParagraph>
          Se tiver questões sobre a nossa Política de Cookies, contacte-nos em:{" "}
          <p className="text-brand-green hover:underline">
            privacidade@melhoresapostasdesportivas.com
          </p>
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
