export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
    {
    id: 1,
    name: "BWIN",
    logo: "/bwin.png",
    bonus: "Aposta Grátis por Nossa Conta!",
    url: "https://www.bwin.pt/pt",
    rating: 9.8,
    stars: 4,
    reviews: 5173,
    badges: [],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
  },
  {
    id: 2,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 9.7,
    stars: 4,
    reviews: 6851,
    badges: [],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
  },
  {
    id: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 9.6,
    stars: 5,
    reviews: 4527,
    badges: ["ESCOLHA DO EDITOR"],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
    isTopRating: true,
  },
  {
    id: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.4,
    stars: 5,
    reviews: 6244,
    badges: ["MAIS POPULAR"],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
    isPopular: true,
  },
  {
    id: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 9.3,
    stars: 5,
    reviews: 3837,
    badges: ["TENDÊNCIA"],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
    isTrending: true,
  },
  {
    id: 6,
    name: "ESC Online",
    logo: "/esc.svg",
    bonus: "Até 250€ em Freebets",
    url: "https://www.estorilsolcasinos.pt/pt",
    rating: 9.1,
    stars: 5,
    reviews: 5148,
    badges: ["MELHOR BÓNUS"],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
  },
  {
    id: 7,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 8.9,
    stars: 5,
    reviews: 2727,
    badges: [],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
  },
  {
    id: 8,
    name: "Betano",
    logo: "/betano.svg",
    bonus: "10€ Apostas + 50 Rodadas Grátis no Registo",
    url: "https://www.betano.pt/",
    rating: 8.8,
    stars: 4,
    reviews: 4755,
    badges: [],
    terms: "18+ | Jogo Seguro | Licença SRIJ",
  },

]
