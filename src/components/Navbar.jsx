import React from 'react';

function Navbar(props) {
    return (
        <nav
            className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto py-3 px-4">
                <a href="/" className="flex items-center">
                    <img src="/indoipo.svg" className="h-12 mr-10" alt="Indoipo Logo" />
                </a>
                <div className='flex items-center gap-8'>
                    <a href="#"
                       className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0"
                       aria-current="page">Beranda</a>
                    <div className="relative">
                        <label className="sr-only" htmlFor="email"> Email </label>

                        <input
                            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;