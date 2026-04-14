"use client";

import Image from "next/image";

const CompanyLogos = () => {
    return (
        <div className="w-full py-12 bg-gradient-to-br from-neoncyan/5 via-blue-50/50 to-purple-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-darkpurple/60 tracking-wide uppercase">
                        Trusted by leading organizations
                    </p>
                </div>
            </div>

            {/* Featured Client Logos - Infinite Scroll */}
            <div className="relative overflow-hidden">
                <div className="flex animate-scroll-logos">
                    {/* First set of logos */}
                    <div className="flex items-center gap-12 px-6 flex-shrink-0">
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/owasa.png"
                                alt="OWASA - Orange Water and Sewer Authority"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/idi.png"
                                alt="IDI"
                                width={80}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/gov.om.png"
                                alt="Government of Oman"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/national audit office.png"
                                alt="National Audit Office"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/office of the auditor general.png"
                                alt="Office of the Auditor General"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/one zambia one nation.svg"
                                alt="One Zambia One Nation"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/mjf.png"
                                alt="MJF Team"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-12 px-6 flex-shrink-0">
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/owasa.png"
                                alt="OWASA - Orange Water and Sewer Authority"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/idi.png"
                                alt="IDI"
                                width={80}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/gov.om.png"
                                alt="Government of Oman"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/national audit office.png"
                                alt="National Audit Office"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/office of the auditor general.png"
                                alt="Office of the Auditor General"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/one zambia one nation.svg"
                                alt="One Zambia One Nation"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/mjf.png"
                                alt="MJF Team"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    {/* Third set for extra smooth loop */}
                    <div className="flex items-center gap-12 px-6 flex-shrink-0">
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/owasa.png"
                                alt="OWASA - Orange Water and Sewer Authority"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/idi.png"
                                alt="IDI"
                                width={80}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/gov.om.png"
                                alt="Government of Oman"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/national audit office.png"
                                alt="National Audit Office"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/office of the auditor general.png"
                                alt="Office of the Auditor General"
                                width={120}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/one zambia one nation.svg"
                                alt="One Zambia One Nation"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src="/mjf.png"
                                alt="MJF Team"
                                width={70}
                                height={60}
                                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Indicators */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-wrap justify-center gap-6 mt-8'>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>Powering Modern Businesses</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>99.9% Uptime</span>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>ISO 27001 Certified</span>
                    </div> */}
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogos;
