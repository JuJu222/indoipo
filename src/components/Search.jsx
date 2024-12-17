'use client'

import React, {useEffect, useRef, useState} from 'react';
import prisma from "@/lib/prisma";
import Image from "next/image";

function Search({companies}) {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchData, setSearchData] = useState(companies)
    const [showSearchData, setShowSearchData] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowSearchData(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


    useEffect(()=>{
        if (searchQuery !== '') {
            const getSearch = async () => {
                const res = await fetch('https://indoipo.com/api/search?' + new URLSearchParams({
                    query: searchQuery
                }))
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        setSearchData(responseJSON)
                    });
            }
            getSearch()
        }
    },[searchQuery]);

    return (
        <div className="relative md:block w-full" ref={wrapperRef}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" onChange={(e) => setSearchQuery(e.target.value)} onFocus={(e) => setShowSearchData(true)}
                   className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                   placeholder="Cari IPO..."/>
            <div className='relative'>
                <ul className='absolute bg-white shadow rounded-lg overflow-hidden w-full max-h-[50vh] overflow-y-auto'>
                    {showSearchData && (
                        searchData.map((company, index) => (
                            <li key={index}>
                                <a href={'/ipo/' + company.ticker} className='hover:bg-gray-50 px-4 py-2.5 border-b last:border-0 transition cursor-pointer flex gap-2 items-center'>
                                    <Image
                                        src={company.img}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt={company.name}
                                        className='w-8 h-8 object-contain'
                                    />
                                    <span className='font-semibold'>{company.ticker}</span>
                                    <span> - </span>
                                    <span>{company.name}</span>
                                </a>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Search;