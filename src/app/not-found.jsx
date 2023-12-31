import React from 'react';

function NotFound(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Halaman tidak ditemukan.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Maaf, kami tidak dapat menemukan halaman tersebut.</p>
                    <a href="/" className="inline-flex text-white bg-primary hover:bg-primary_hover transition focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Kembali Ke Halaman Utama</a>
                </div>
            </div>
        </section>
    );
}

export default NotFound;