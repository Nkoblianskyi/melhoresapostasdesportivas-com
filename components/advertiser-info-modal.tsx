"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X, Shield, AlertCircle } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[500px] p-0 bg-card border-border overflow-hidden">
        {/* Header */}
        <div className="bg-brand-green p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif font-bold text-center text-white">
              Informação Publicitária
            </DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-full p-1 bg-white/20 hover:bg-white/30 transition-colors">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Sobre as Nossas Análises</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Melhores Apostas Desportivas é um serviço gratuito de comparação. Recebemos compensações de algumas
                marcas em destaque, o que pode influenciar a ordem de apresentação. Todos os sites listados são
                licenciados pelo SRIJ.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Restrição de Idade</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este site destina-se a maiores de 18 anos. O jogo deve ser apenas entretenimento. Se está a enfrentar
                problemas com o jogo, procure ajuda através do SICAD (213 950 213).
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Bónus e ofertas estão sujeitos a alterações. Leia sempre os termos completos no site do operador.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
