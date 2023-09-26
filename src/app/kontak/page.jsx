import React from 'react';
import Image from "next/image";

export const metadata = {
    title: 'Kontak | Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu ada dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
}

function AboutUs(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 flex'>
                <div className='w-1/2'>
                    <h1 className='text-center text-4xl font-bold pb-8'>Kontak Kami</h1>
                    <p className="text-base leading-relaxed mb-9 text-body-color">
                        Jangan ragu untuk menghubungi kami dengan pertanyaan atau masukan apa pun melalui kontak di bawah.
                    </p>
                    {/*<div className="mb-8 flex w-full max-w-[370px]">*/}
                    {/*    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">*/}
                    {/*        <svg*/}
                    {/*            width={24}*/}
                    {/*            height={24}*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            className="fill-current"*/}
                    {/*        >*/}
                    {/*            <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*    <div className="w-full">*/}
                    {/*        <h4 className="mb-1 text-xl font-bold text-dark">*/}
                    {/*            Our Location*/}
                    {/*        </h4>*/}
                    {/*        <p className="text-base text-body-color">*/}
                    {/*            99 S.t Jomblo Park Pekanbaru 28292. Indonesia*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="fill-current"
                                 className="bi bi-instagram" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                                Instagram
                            </h4>
                            <p className="text-base text-body-color">
                                @indoipo
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width={28}
                                height={19}
                                viewBox="0 0 28 19"
                                className="fill-current"
                            >
                                <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                                Alamat Email
                            </h4>
                            <p className="text-base text-body-color">
                                <a className='underline'
                                   href="mailto:info@contohwebsite.com">info@indoipo.com</a>
                            </p>
                        </div>
                    </div>
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