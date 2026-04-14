"use client"
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// TRUSTED COMPANIES DATA
interface CompanyType {
    name: string;
    logo: string;
}

const trustedCompanies: CompanyType[] = [
    {
        name: "Microsoft",
        logo: "/images/companies/microsoft-logo.png",
    },
    {
        name: "Google",
        logo: "/images/companies/google-logo.png",
    },
    {
        name: "Amazon",
        logo: "/images/companies/amazon-logo.png",
    },
    {
        name: "IBM",
        logo: "/images/companies/ibm-logo.png",
    },
    {
        name: "Oracle",
        logo: "/images/companies/oracle-logo.png",
    },
    {
        name: "Cisco",
        logo: "/images/companies/cisco-logo.png",
    },
    {
        name: "Dell",
        logo: "/images/companies/dell-logo.png",
    },
    {
        name: "HP",
        logo: "/images/companies/hp-logo.png",
    },
    {
        name: "Intel",
        logo: "/images/companies/intel-logo.png",
    },
    {
        name: "VMware",
        logo: "/images/companies/vmware-logo.png",
    },
    {
        name: "Salesforce",
        logo: "/images/companies/salesforce-logo.png",
    },
    {
        name: "Adobe",
        logo: "/images/companies/adobe-logo.png",
    }
]

const OurClients = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
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

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 0,
                    pauseOnHover: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 0,
                    pauseOnHover: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 0,
                    pauseOnHover: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 0,
                    pauseOnHover: false
                }
            }
        ]
    };

    return (
        <div className="bg-lightgrey py-16 sm:py-20 lg:py-24" id="clients-section" ref={sectionRef}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                {/* Section Title */}
                <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}>
                    <div className="relative">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black my-2">Our Clients.</h3>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2 hidden lg:block">Our Clients.</h3>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2 hidden lg:block">Our Clients.</h3>
                    </div>
                    <p className="text-base sm:text-lg text-darkgrey mt-6 lg:mt-8 max-w-3xl mx-auto leading-relaxed">
                        We&apos;re proud to serve leading organizations worldwide with our cybersecurity and compliance solutions, helping them protect their digital assets and maintain regulatory compliance.
                    </p>
                </div>

                {/* Infinite Rotating Company Logos */}
                <div className={`transition-all duration-1200 ease-out delay-300 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}>
                    <Slider {...settings}>
                        {trustedCompanies.map((company, i) => (
                            <div key={i} className="px-2 sm:px-3 lg:px-4">
                                <div className='bg-white mx-1 sm:mx-2 py-6 sm:py-8 px-4 sm:px-6 shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-20 sm:h-24'>
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={120}
                                        height={60}
                                        className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                        style={{ width: 'auto', height: 'auto', maxWidth: '100px', maxHeight: '50px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Trust Indicators */}
                <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-12 lg:mt-16 transition-all duration-1400 ease-out delay-600 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkgrey font-medium'>Powering Modern Businesses</span>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkgrey font-medium'>99.9% Uptime Guarantee</span>
                    </div>
                    {/* <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkgrey font-medium'>ISO 27001 Certified</span>
                    </div> */}
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkgrey font-medium'>24/7 Global Support</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurClients;
