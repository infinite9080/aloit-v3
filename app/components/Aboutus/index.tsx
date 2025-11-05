"use client"
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState, useEffect, useRef } from 'react'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Our Mission & Vision",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Empowering organizations through innovative digital solutions that drive efficiency, enhance security, and accelerate growth.We aim to build a connected, intelligent future where technology simplifies business operations and inspires progress.',
        link: 'Learn more'
    },
    {
        heading: "IT & Security Services",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'We deliver end-to-end IT and cybersecurity solutions from cloud infrastructure and automation to advanced threat protection and identity management ensuring your business operates securely and efficiently, 24/7.',
        link: 'Learn more'
    },
    {
        heading: "Compliance & Governance",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Simplify governance and regulatory compliance with our expert-driven frameworks. We help you align with global standards while maintaining transparency, accountability, and operational excellence.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (

        <div id="aboutus-section" className="w-full bg-lightgrey py-16 sm:py-20 lg:py-24 xl:py-32 mb-16 sm:mb-20 lg:mb-24 xl:mb-32 relative overflow-hidden" ref={sectionRef}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
                {/* Background decorative elements */}
                <div className={`absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-neoncyan opacity-5 rounded-full -translate-x-16 -translate-y-16 sm:-translate-x-24 sm:-translate-y-24 lg:-translate-x-32 lg:-translate-y-32 transition-all duration-1500 ease-out ${isVisible
                    ? 'opacity-5 scale-100'
                    : 'opacity-0 scale-75'
                    }`}></div>
                <div className={`absolute top-10 right-10 sm:top-16 sm:right-16 lg:top-20 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-neoncyan opacity-10 rounded-lg rotate-45 transition-all duration-1500 ease-out delay-200 ${isVisible
                    ? 'opacity-10 scale-100 rotate-45'
                    : 'opacity-0 scale-75 rotate-0'
                    }`}></div>
                <div className={`absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-tl from-neoncyan to-transparent opacity-8 rounded-full translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 lg:translate-x-40 lg:translate-y-40 transition-all duration-1500 ease-out delay-400 ${isVisible
                    ? 'opacity-8 scale-100'
                    : 'opacity-0 scale-75'
                    }`}></div>
                <div className={`absolute bottom-10 left-10 sm:bottom-16 sm:left-16 lg:bottom-20 lg:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border-2 sm:border-3 lg:border-4 border-neoncyan opacity-20 rounded-full transition-all duration-1500 ease-out delay-600 ${isVisible
                    ? 'opacity-20 scale-100'
                    : 'opacity-0 scale-75'
                    }`}></div>
                <div className={`absolute top-1/2 left-0 w-24 h-1 sm:w-32 lg:w-40 bg-neoncyan opacity-15 -translate-x-12 sm:-translate-x-16 lg:-translate-x-20 transition-all duration-1000 ease-out delay-800 ${isVisible
                    ? 'opacity-15 scale-x-100'
                    : 'opacity-0 scale-x-0'
                    }`}></div>
                <div className={`absolute top-1/2 right-0 w-24 h-1 sm:w-32 lg:w-40 bg-neoncyan opacity-15 translate-x-12 sm:translate-x-16 lg:translate-x-20 transition-all duration-1000 ease-out delay-1000 ${isVisible
                    ? 'opacity-15 scale-x-100'
                    : 'opacity-0 scale-x-0'
                    }`}></div>

                <Image src="/images/aboutus/dots.svg" width={80} height={80} alt="dots-image" className={`absolute bottom-5 left-5 sm:bottom-10 sm:left-10 lg:bottom-16 lg:left-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-30 transition-all duration-1200 ease-out delay-1200 ${isVisible
                    ? 'opacity-30 scale-100 rotate-0'
                    : 'opacity-0 scale-75 -rotate-45'
                    }`} />
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 relative z-10 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className='text-center mb-2 sm:mb-3 text-neoncyan text-sm sm:text-base lg:text-lg tracking-widest'>Security & Compliance Solutions</h3>
                    <h4 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Secure & Automate Your Business Future</h4>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch relative z-10 transition-all duration-1200 ease-out delay-300 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className={`aboutus-card glass-card hover:glass-card-hover rounded-2xl sm:rounded-3xl mt-6 sm:mt-8 lg:mt-16 pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10 group relative transition-all duration-500 flex flex-col h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] overflow-hidden ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-10'
                            }`} style={{ transitionDelay: `${600 + i * 200}ms` }}>
                            {/* Glass reflection */}
                            <div className="glass-reflection"></div>

                            {/* Subtle accent line */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neoncyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <h4 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-darkpurple mb-3 sm:mb-4 lg:mb-5 group-hover:text-darkpurple transition-colors duration-300 flex-shrink-0 leading-tight'>{item.heading}</h4>
                            <div className="relative mb-4 sm:mb-5 flex-shrink-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-neoncyan/20 to-neoncyan/10 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    {i === 0 && (
                                        // Mission - Shield with target
                                        <svg width="32" height="32" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                                            <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" fill="currentColor" opacity="0.2" />
                                            <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        // Security Services - Lock with gear
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                                            <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" opacity="0.2" />
                                            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 11V7C8 4.79 9.79 3 12 3S16 4.79 16 7V11" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="12" cy="16" r="2" fill="currentColor" />
                                            <path d="M14 16L15 15M10 16L9 15M12 14V18" stroke="currentColor" strokeWidth="1" fill="none" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        // Compliance - Document with checkmarks
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" opacity="0.2" />
                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 12L10 14L16 8" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 16L10 18L16 12" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    )}
                                </div>
                                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-neoncyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <p className='text-sm sm:text-base lg:text-lg font-normal text-darkpurple/80 group-hover:text-darkpurple mb-4 sm:mb-5 transition-colors duration-300 flex-grow leading-relaxed'>{item.paragraph}</p>
                            <Link href="#" className='text-sm sm:text-base lg:text-lg font-semibold group-hover:text-neoncyan text-neoncyan hover-underline flex items-center transition-colors duration-300 flex-shrink-0 mt-auto'>
                                {item.link}
                                <ChevronRightIcon width={16} height={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional floating elements */}
                <div className="aboutus-floating-elements"></div>
                <div className="aboutus-shape-1"></div>
                <div className="aboutus-shape-2"></div>
            </div>
        </div>

    )
}

export default Aboutus;