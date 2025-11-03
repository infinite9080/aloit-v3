"use client"
import Slider from "react-slick";
import React, { Component } from "react";
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

// CAROUSEL SETTINGS


export default class OurClients extends Component {

    render() {
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
                }
            ]
        };

        return (
            <div className="bg-lightgrey py-20" id="clients-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    {/* Section Title - Matching Other Sections */}
                    <div className="text-center mb-16">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Our Clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Our Clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Our Clients.</h3>
                        <p className="text-lg text-darkgrey mt-8 max-w-3xl mx-auto">
                            We&apos;re proud to serve leading organizations worldwide with our cybersecurity and compliance solutions, helping them protect their digital assets and maintain regulatory compliance.
                        </p>
                    </div>

                    {/* Infinite Rotating Company Logos */}
                    <Slider {...settings}>
                        {trustedCompanies.map((company, i) => (
                            <div key={i} className="px-4">
                                <div className='bg-white mx-2 py-8 px-6 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-24'>
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={120}
                                        height={60}
                                        className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                        style={{ width: 'auto', height: 'auto', maxWidth: '120px', maxHeight: '60px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Trust Indicators */}
                    <div className='flex flex-wrap justify-center gap-8 mt-16'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-neoncyan rounded-full'></div>
                            <span className='text-darkgrey font-medium'>500+ Enterprise Clients</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-neoncyan rounded-full'></div>
                            <span className='text-darkgrey font-medium'>99.9% Uptime Guarantee</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-neoncyan rounded-full'></div>
                            <span className='text-darkgrey font-medium'>ISO 27001 Certified</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-neoncyan rounded-full'></div>
                            <span className='text-darkgrey font-medium'>24/7 Global Support</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
