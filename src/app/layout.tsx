import './globals.css'
import type {Metadata} from 'next'
import {Quicksand} from 'next/font/google'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from 'next/head'
import Script from 'next/script'
import Banner from "@/components/Banner";

const quicksand = Quicksand({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu ada dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta laporan keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
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
            <body className={quicksand.className + ' bg-white'}>
                <Navbar></Navbar>
                <main>
                    {children}
                </main>
                <Footer></Footer>
                <Banner></Banner>
            </body>
        </html>
    )
}
