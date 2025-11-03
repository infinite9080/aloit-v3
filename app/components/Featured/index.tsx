"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// PRODUCT CAROUSEL DATA

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'nIAM - Identity Access Management',
        description: 'Comprehensive identity and access management solution that provides secure authentication, authorization, and user lifecycle management for your organization.',
        imgSrc: '/niam-feature.png',
    },
    {
        heading: 'nAMS - Audit Management Software',
        description: 'Streamline your audit processes with automated workflows, compliance tracking, and comprehensive reporting capabilities for regulatory requirements.',
        imgSrc: '/nams-feature.png',
    },
    {
        heading: 'nBsuits - Enterprise Resource Planning',
        description: 'Integrated ERP solution that manages your business operations, from finance and HR to supply chain and customer relationships in one unified platform.',
        imgSrc: '/nbsuits-feature.png',
    },
    {
        heading: 'nISMA - Security Maturity Assessment',
        description: 'Advanced information security maturity assessment tool that evaluates your cybersecurity posture and provides actionable improvement recommendations.',
        imgSrc: '/nisma-feature.png',
    },
    {
        heading: 'nBoard - Board Meeting Management',
        description: 'Digital boardroom solution that facilitates secure board meetings, document management, and governance processes with enterprise-grade security.',
        imgSrc: '/nboard-feature.png',
    },
    {
        heading: 'nERIM - Risk Management Software',
        description: 'Comprehensive enterprise risk management platform that identifies, assesses, and mitigates risks across your organization with real-time monitoring.',
        imgSrc: '/nERIM-feature.png',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


const FeaturedProducts = () => {
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
                threshold: 0.2, // Trigger when 20% of the section is visible
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            const currentRef = sectionRef.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        speed: 500,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="bg-bgblue py-20 marginFeature bg-featured" ref={sectionRef}>
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                <div className={`text-center pt-48 pb-10 md:pt-96 transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Featured Products.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Featured Products.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Featured Products.</h3>
                </div>

                <div className={`transition-all duration-1200 ease-out delay-300 ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                    }`}>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <div className={`transition-all duration-1000 ease-out ${isVisible
                                            ? 'opacity-100 transform scale-100'
                                            : 'opacity-0 transform scale-95'
                                        }`} style={{ transitionDelay: `${i * 200 + 500}ms` }}>
                                        <Image src={items.imgSrc} alt={items.heading} width={636} height={620} className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" />
                                    </div>
                                    <div className="w-345">
                                        <h4 className={`sm:text-4xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white transition-all duration-1000 ease-out ${isVisible
                                                ? 'opacity-100 transform translate-x-0'
                                                : 'opacity-0 transform -translate-x-5'
                                            }`} style={{ transitionDelay: `${i * 200 + 700}ms` }}>
                                            {items.heading}
                                        </h4>
                                        <p className={`text-lg font-normal text-white/80 text-center sm:text-start mt-4 leading-relaxed transition-all duration-1000 ease-out ${isVisible
                                                ? 'opacity-100 transform translate-x-0'
                                                : 'opacity-0 transform -translate-x-5'
                                            }`} style={{ transitionDelay: `${i * 200 + 900}ms` }}>
                                            {items.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
