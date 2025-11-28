import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Magazine stripe */}
      <div className="magazine-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="lg" className="mb-4" />
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
              O portal líder em análises de apostas desportivas em Portugal. Fornecemos comparações independentes e
              imparciais para ajudá-lo a encontrar as melhores plataformas de apostas.
            </p>
            <p className="text-xs text-white/50">
              Podemos receber comissões de marcas em destaque, o que pode influenciar a ordem de apresentação.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-brand-gold transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-brand-gold transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/70 hover:text-brand-gold transition-colors text-sm">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Jogo Responsável</h3>
            <p className="text-white/70 text-sm mb-4">Se precisa de ajuda com problemas de jogo:</p>
            <p
              className="inline-block px-4 py-2 bg-brand-red rounded-lg text-white font-medium text-sm hover:bg-brand-red-dark transition-colors mb-4"
            >
              Linha de Apoio: 213 950 213
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="text-sm font-semibold text-white/80 mb-4 text-center">Parceiros de Jogo Responsável</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"

            >
              <div className="relative w-20 h-14">
                <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain " />
              </div>
            </Link>
            <Link
              href="https://www.icad.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md"
            >
              <div className="relative w-24 h-14">
                <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md"
            >
              <div className="relative w-20 h-12">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md"
            >
              <div className="relative w-24 h-12">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain " />
              </div>
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"

            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-12 w-auto" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} melhoresapostasdesportivas.com. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            18+ | Jogue com responsabilidade | Os bónus estão sujeitos a termos e condições
          </p>
        </div>
      </div>
    </footer>
  )
}
