'use client'

import React from 'react';
import {usePathname} from "next/navigation";

function NavbarItem({children, href}) {
    const pathname = usePathname()

    return (
        <div className='flex gap-8'>
            <a href={href}
               className={"block py-2 pl-3 pr-4 rounded whitespace-nowrap font-medium hover:text-primary_hover transition" + (pathname == href ? ' text-primary' : ' text-secondary')}
               aria-current="page">{children}</a>
        </div>
    );
}

export default NavbarItem;