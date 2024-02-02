'use client'

import React from 'react';

function ResetCookie(props) {
    function resetCookie() {
        localStorage.removeItem("isBannerButtonPressed")
        document.cookie = 'ga-disable-G-FQQYZWNC68' + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window['ga-disable-G-FQQYZWNC68'] = true;
        location.reload(true);
    }

    return (
        <>
            <button onClick={resetCookie} className='underline'>link</button>
        </>
    );
}

export default ResetCookie;