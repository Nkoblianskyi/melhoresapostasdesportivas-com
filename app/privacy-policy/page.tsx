import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout title="Política de Privacidade" lastUpdated="28 de Novembro de 2025">
      <PolicySection title="Introdução">
        <PolicyParagraph>
          No melhoresapostasdesportivas.com, respeitamos a sua privacidade e estamos comprometidos em proteger os seus
          dados pessoais. Esta política de privacidade informá-lo-á sobre como cuidamos dos seus dados pessoais quando
          visita o nosso website e dir-lhe-á sobre os seus direitos de privacidade e como a lei o protege.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Os Dados que Recolhemos" delay={100}>
        <PolicyParagraph>
          Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Dados de Identidade incluem primeiro nome, apelido, nome de utilizador ou identificador similar.",
            "Dados de Contacto incluem endereço de email e números de telefone.",
            "Dados Técnicos incluem endereço IP, dados de login, tipo e versão do navegador, definição de fuso horário e localização, sistema operativo e plataforma.",
            "Dados de Uso incluem informações sobre como usa o nosso website, produtos e serviços.",
            "Dados de Marketing incluem as suas preferências em receber marketing e comunicações.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Como Usamos os Seus Dados" delay={200}>
        <PolicyParagraph>
          Só usaremos os seus dados pessoais quando a lei nos permitir. Mais comummente, usaremos os seus dados nas
          seguintes circunstâncias:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Onde precisamos de executar o contrato que celebrámos consigo.",
            "Onde é necessário para os nossos interesses legítimos.",
            "Onde precisamos de cumprir uma obrigação legal.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Propósitos de Utilização" delay={300}>
        <PolicyParagraph>Utilizamos os seus dados pessoais para:</PolicyParagraph>
        <PolicyList
          items={[
            "Registá-lo como novo utilizador",
            "Gerir a nossa relação consigo",
            "Permitir participação em competições ou inquéritos",
            "Administrar e proteger o nosso negócio e website",
            "Entregar conteúdo relevante e anúncios",
            "Usar análise de dados para melhorar o website e serviços",
          ]}
        />
      </PolicySection>

      <PolicySection title="Cookies" delay={400}>
        <PolicyParagraph>
          Pode definir o seu navegador para recusar todos ou alguns cookies, ou para alertá-lo quando os websites
          definem ou acedem a cookies. Se desativar ou recusar cookies, note que algumas partes deste website podem
          tornar-se inacessíveis ou não funcionar adequadamente. Para mais informações, consulte a nossa Política de
          Cookies.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Segurança de Dados" delay={500}>
        <PolicyParagraph>
          Implementámos medidas de segurança apropriadas para prevenir que os seus dados pessoais sejam acidentalmente
          perdidos, usados ou acedidos de forma não autorizada, alterados ou divulgados. Limitamos o acesso aos seus
          dados pessoais àqueles que têm uma necessidade comercial de saber.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Retenção de Dados" delay={600}>
        <PolicyParagraph>
          Só reteremos os seus dados pessoais pelo tempo razoavelmente necessário para cumprir os propósitos para os
          quais os recolhemos, incluindo para satisfazer requisitos legais, regulamentares, fiscais, contabilísticos ou
          de relatório.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Os Seus Direitos" delay={700}>
        <PolicyParagraph>
          Sob as leis de proteção de dados, tem direitos em relação aos seus dados pessoais:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Solicitar acesso aos seus dados pessoais",
            "Solicitar correção dos seus dados pessoais",
            "Solicitar eliminação dos seus dados pessoais",
            "Objetar ao processamento dos seus dados",
            "Solicitar restrição do processamento",
            "Solicitar transferência dos seus dados",
            "Direito de retirar consentimento",
          ]}
        />
      </PolicySection>

      <PolicySection title="Links de Terceiros" delay={800}>
        <PolicyParagraph>
          Este website pode incluir links para websites de terceiros. Clicar nesses links pode permitir que terceiros
          recolham ou partilhem dados sobre si. Não controlamos estes websites e não somos responsáveis pelas suas
          declarações de privacidade.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Alterações à Política" delay={900}>
        <PolicyParagraph>
          Podemos atualizar a nossa política de privacidade de tempos a tempos. Notificá-lo-emos de quaisquer alterações
          publicando a nova política nesta página e atualizando a data "Última atualização".
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={1000}>
        <PolicyParagraph>
          Se tiver questões sobre esta política de privacidade, contacte-nos em:{" "}
          <p className="text-brand-green hover:underline">
            privacidade@melhoresapostasdesportivas.com
          </p>
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
