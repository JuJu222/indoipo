import React from 'react';
import Image from "next/image";

function AboutUs(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 flex'>
                <div className='w-1/2'>
                    <h1 className='text-center text-4xl font-bold pb-8'>Tentang Kami</h1>

                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <Image
                        src={"/indoipo.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt='aaa'
                        className='w-full h-auto object-contain p-4'
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;