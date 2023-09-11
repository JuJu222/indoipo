import React from 'react';

function Footer(props) {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#"
                   className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src="/indoipo.svg" className="h-10" alt="Logo Indoipo" />
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and
                    interactive elements built for better web.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Beranda</a>
                    </li>
                    <li>
                        <a href="/ipo" className="mr-4 hover:underline md:mr-6">Semua IPO</a>
                    </li>
                    <li>
                        <a href="/syarat-ketentuan" className="mr-4 hover:underline md:mr-6 ">Syarat & Ketentuan</a>
                    </li>
                    <li>
                        <a href="/kebijakan-privasi" className="mr-4 hover:underline md:mr-6 ">Kebijakan Privasi</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Kontak</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Indoipo™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;