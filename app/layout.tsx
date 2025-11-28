import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Melhores Apostas Desportivas - O Guia Definitivo de Apostas em Portugal",
  description:
    "O portal líder em análises de apostas desportivas em Portugal. Comparações especializadas, bónus exclusivos e guias completos para futebol, ténis, basquetebol e mais.",
  keywords: [
    "melhores apostas desportivas",
    "apostas desportivas Portugal",
    "sites de apostas Portugal",
    "casas de apostas Portugal",
    "apostas online Portugal",
    "apostas futebol",
    "betting Portugal",
    "odds apostas",
    "bónus apostas",
    "apostas legais Portugal",
  ],
  authors: [{ name: "Melhores Apostas Desportivas" }],
  openGraph: {
    title: "Melhores Apostas Desportivas - O Guia Definitivo de Apostas em Portugal",
    description:
      "O portal líder em análises de apostas desportivas em Portugal. Comparações especializadas e bónus exclusivos.",
    url: "https://melhoresapostasdesportivas.com",
    siteName: "Melhores Apostas Desportivas",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
