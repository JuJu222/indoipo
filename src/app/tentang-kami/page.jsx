import React from 'react';
import Image from "next/image";
import {Metadata} from "next";

export const metadata = {
    title: 'Tentang Kami | Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu ada dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta laporan keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
}

function AboutUs(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 md:flex'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-4xl font-bold pb-6'>Tentang Kami</h1>
                    <p className="mb-4">Indoipo, sumber informasi mengenai Penawaran Umum Perdana (Initial Public Offerings/IPO) di Indonesia. Berdiri pada tahun 2023, Indoipo hadir untuk membantu Anda menganalisa IPO di Indonesia.</p>
                    <h2 className="text-xl font-semibold mb-2">Misi Kami</h2>
                    <p className="mb-4">Di Indoipo, misi kami sederhana: memberikan informasi yang Anda butuhkan untuk membuat keputusan investasi yang bijak di pasar IPO Indonesia. Kami mengerti bahwa IPO bisa menjadi kompleks, dan kami hadir untuk memudahkan Anda dengan menyediakan informasi yang akurat dan terkini.</p>

                    <h2 className="text-xl font-semibold mb-2">Dikembangkan Dengan</h2>
                    <div className='flex gap-10'>
                        <a href="https://www.digitalocean.com/?refcode=efa4edab0d72&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" /></a>
                        <img className='w-40 object-contain' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png' alt='Next.js Logo' />
                    </div>
                    <p className="pt-3"><span className='font-semibold'>Dikembangkan Oleh:</span> Justin Yap</p>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <Image
                        src={"/indoipo.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt='Logo Indoipo'
                        className='hidden md:block w-full h-auto object-contain p-4'
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;