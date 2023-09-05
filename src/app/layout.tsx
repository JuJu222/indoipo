import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indoipo - Analisa IPO dengan Mudah',
  description: 'Analisa IPO dengan Mudah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className + ' bg-white'}>
        <Navbar></Navbar>
          <main>
            {children}
          </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
