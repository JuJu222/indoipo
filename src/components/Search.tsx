'use client'

import React, {useEffect, useState} from 'react';
import prisma from "@/lib/prisma";

function Search(props) {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchData, setSearchData] = useState({})

    useEffect(()=>{
        const getSearch = async () => {
            const data = await fetch('http://localhost:3000/api/search')
            console.log(data.json())
        }
        getSearch()
    },[searchQuery]);

    return (
        <div className="relative hidden md:block w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar"
                   className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search..."/>
            <div className='relative'>
                <ul className='absolute bg-white shadow rounded-lg overflow-hidden w-full'>
                    <li className='hover:bg-gray-50 px-4 py-2.5 border-b last:border-0 transition cursor-pointer'>aaa</li>
                </ul>
            </div>
        </div>
    );
}

export default Search;