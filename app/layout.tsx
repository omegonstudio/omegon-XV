import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans, Dancing_Script } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Mis 15 Años - Invitación Digital",
  description: "Te invitamos a celebrar mis 15 años en una noche especial e inolvidable",
  generator: "v0.app",
  openGraph: {
    title: "Mis 15 Años - Invitación Digital",
    description: "Te invitamos a celebrar mis 15 años en una noche especial e inolvidable",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${openSans.variable} ${dancingScript.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
