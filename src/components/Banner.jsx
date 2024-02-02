'use client'

import React, {useState} from 'react';

function Banner(props) {
    const isBannerButtonPressed = localStorage.getItem("isBannerButtonPressed") || ""

    document.cookie = 'ga-disable-G-FQQYZWNC68' + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window['ga-disable-G-FQQYZWNC68'] = true;

    if (document.cookie.indexOf('ga-disable-G-FQQYZWNC68' + '=true') > -1) {
        window['ga-disable-G-FQQYZWNC68'] = true;
    }

    const [showBanner, setShowBanner] = useState(() => {
        return isBannerButtonPressed !== "true";
    })

    function acceptButtonPressed() {
        setShowBanner(false)
        localStorage.setItem("isBannerButtonPressed", "true")
        document.cookie = 'ga-disable-G-FQQYZWNC68' + '=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window['ga-disable-G-FQQYZWNC68'] = false;
        location.reload(true);
    }

    function rejectButtonPressed() {
        setShowBanner(false)
        localStorage.setItem("isBannerButtonPressed", "true")
        document.cookie = 'ga-disable-G-FQQYZWNC68' + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window['ga-disable-G-FQQYZWNC68'] = true;
        location.reload(true);
    }

    if (showBanner) {
        return (
            <section className="fixed bottom-0 w-full bg-gray-50 shadow-lg">
                <div className="container px-4 py-6 mx-auto lg:flex lg:items-center lg:gap-x-16">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Dengan menekan &quot;Terima Semua&quot;, Anda setuju untuk menyimpan cookie di perangkat Anda untuk menganalisis penggunaan situs dan membantu kami meningkatkan pengalaman pengguna di website kami.</p>

                    <div className="flex items-center mt-6 shrink-0 lg:mt-0">
                        <a href="/kebijakan-cookie" className="w-1/2 mr-6 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
                            Kebijakan Cookie
                        </a>

                        <button onClick={() => acceptButtonPressed()} className=" text-sm w-1/2 md:w-auto font-medium rounded-lg bg-primary hover:bg-primary_hover text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                            Terima Semua
                        </button>

                        <button onClick={() => rejectButtonPressed()} className="ml-2 text-sm w-1/2 md:w-auto font-medium rounded-lg border-primary border hover:bg-gray-100 text-primary px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                            Tolak Semua
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;