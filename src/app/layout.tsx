import './globals.css'
import type {Metadata} from 'next'
import {Quicksand} from 'next/font/google'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from 'next/head'
import Script from 'next/script'

const quicksand = Quicksand({subsets: ['latin']})

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
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-FQQYZWNC68" />
            <Script id="google-analytics">
                {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                 
                          gtag('config', 'G-FQQYZWNC68');
                        `}
            </Script>
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6258132678019384" />
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
