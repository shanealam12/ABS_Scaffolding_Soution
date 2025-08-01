import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABS Scaffolding Solution - Shuttering & Scaffolding Material on hire in Delhi NCR",
  description: "Providing quality scaffolding and shuttering materials for over 5 years",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
