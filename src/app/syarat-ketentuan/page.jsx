import React from 'react';

export const metadata = {
    title: 'Syarat & Ketentuan | Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu ada dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
}

function Penafian(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12'>
                <h1 className="text-2xl font-semibold mb-2">Syarat dan Ketentuan</h1>
                <p className="mb-4">Terakhir diperbarui: 11 September 2023</p>
                <p className="mb-4">Selamat datang di situs web kami. Dengan menggunakan situs web ini, Anda setuju
                    untuk mematuhi syarat dan ketentuan kami. Jika Anda tidak setuju dengan salah satu bagian dari
                    syarat dan ketentuan ini, kami sarankan untuk tidak menggunakan situs web kami.</p>
                <h2 className="text-xl font-semibold mb-2">Data yang Dikumpulkan</h2>
                <p className="mb-4">Kami hanya mengumpulkan data non-pribadi yang berkaitan dengan penggunaan situs
                    web ini. Data tersebut digunakan untuk analisis melalui layanan Google Analytics dan tidak akan
                    digunakan untuk mengidentifikasi individu secara pribadi.</p>
                <h2 className="text-xl font-semibold mb-2">Batasan Tanggung Jawab</h2>
                <p className="mb-4">Kami berusaha untuk menyediakan informasi yang akurat dan berguna mengenai
                    perusahaan yang sedang IPO, namun tidak dapat menjamin kelengkapan atau keakuratan informasi
                    tersebut. Penggunaan informasi yang Anda dapatkan dari situs ini adalah tanggung jawab Anda
                    sendiri.</p>
                <h2 className="text-xl font-semibold mb-2">Penafian</h2>
                <p className="mb-4">
                    Informasi yang disediakan oleh situs ini hanya berlaku untuk tujuan informasional. Situs web ini
                    menyediakan informasi keuangan mengenai perusahaan publik yang bersifat umum dan dapat diakses
                    oleh publik. Informasi yang terdapat di situs ini tidak dapat dianggap sebagai saran investasi
                    atau rekomendasi pembelian atau penjualan saham.

                    Indoipo tidak dapat menjamin keakuratan, kelengkapan, atau ketersediaan informasi yang terdapat
                    di situs ini. Informasi keuangan perusahaan dapat berubah dari waktu ke waktu, dan kami tidak
                    bertanggung jawab atas setiap kerugian yang timbul sebagai akibat dari penggunaan informasi yang
                    terdapat di situs ini.

                    Indoipo hanya bertindak sebagai penyedia platform yang memungkinkan akses ke informasi keuangan
                    perusahaan publik yang tersedia secara publik. Kami tidak mengubah dan tidak memiliki hak atas
                    prospektus dan segala informasi perusahaan lainnya yang terdapat pada situs web ini. Kami tidak
                    menyimpan atau mengumpulkan data pribadi dari pengguna.
                </p>
                <h2 className="text-xl font-semibold mb-2">Perubahan pada Syarat dan Ketentuan</h2>
                <p className="mb-4">Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu tanpa
                    pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah diposting di situs web ini.</p>
                <h2 className="text-xl font-semibold mb-2">Kebijakan Privasi</h2>
                <p className="mb-4">Anda dapat membaca Kebijakan Privasi kami <a href="/kebijakan-privasi">di
                    sini</a> untuk memahami bagaimana kami mengelola data pribadi.</p>
                <h2 className="text-xl font-semibold mb-2">Hubungi Kami</h2>
                <p className="mb-4">Jika Anda memiliki pertanyaan atau masalah mengenai syarat dan ketentuan ini,
                    silakan hubungi kami di alamat email berikut: <a className='underline'
                                                                     href="mailto:info@contohwebsite.com">info@indoipo.com</a></p>
            </div>
        </section>
    );
}

export default Penafian;