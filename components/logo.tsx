import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
}

export function Logo({ className = "", size = "md", variant = "dark" }: LogoProps) {
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg md:text-xl"
  const textColor = variant === "light" ? "text-white" : "text-foreground"

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      {/* Magazine-style logo mark */}
      <Image src="/favicon.ico" alt="Logo" width={size === "sm" ? 32 : size === "lg" ? 64 : 48} height={size === "sm" ? 32 : size === "lg" ? 64 : 48} />
      <div className="flex items-center gap-1 uppercase">
        <span className={`${textSize} font-serif font-bold text-brand-green`}>melhores</span>
        <span className={`${textSize} font-serif font-bold text-brand-red`}>apostas</span>
        <span className={`${textSize} font-serif font-bold text-brand-green`}>desportivas</span>
      </div>
    </Link>
  )
}
