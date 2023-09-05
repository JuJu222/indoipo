import React from 'react';

function NavbarItem({children, href}) {
    return (
        <div className='flex gap-8'>
            <a href={href}
               className="block py-2 pl-3 pr-4 text-secondary bg-blue-700 rounded md:bg-transparent md:p-0 whitespace-nowrap"
               aria-current="page">{children}</a>
        </div>
    );
}

export default NavbarItem;