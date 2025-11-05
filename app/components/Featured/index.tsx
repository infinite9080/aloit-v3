"use client"
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
        imgSrc: '/niam-feature.jpeg',
    },
    {
        heading: 'nAMS - Audit Management Software',
        description: 'Streamline your audit processes with automated workflows, compliance tracking, and comprehensive reporting capabilities for regulatory requirements.',
        imgSrc: '/nams-feature.png',
    },
    {
        heading: 'nBsuits - Enterprise Resource Planning',
        description: 'Integrated ERP solution that manages your business operations, from finance and HR to supply chain and customer relationships in one unified platform.',
        imgSrc: '/nbsuits-feature.jpeg',
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
        imgSrc: '/nerim-feature.jpeg',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "16px",
                borderRadius: "12px",
                width: "40px",
                height: "40px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "16px",
                borderRadius: "12px",
                width: "40px",
                height: "40px"
            }}
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
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div id="products-section" className="bg-bgblue bg-featured overflow-hidden" ref={sectionRef}>
            <div className='w-full min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32'>
                <div className='max-w-7xl mx-auto'>
                    {/* Section Title */}
                    <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                        }`}>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white my-1 sm:my-2">Featured Products.</h3>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-opacity-50 lg:mr-12 my-1 sm:my-2">Discover.</h3>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-opacity-25 lg:mr-6 my-1 sm:my-2">Transform.</h3>
                    </div>

                    {/* Products Carousel */}
                    <div className={`featured-carousel transition-all duration-1200 ease-out delay-300 ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                        }`}>
                        <Slider {...settings}>
                            {postData.map((items, i) => (
                                <div key={i} className="px-2 sm:px-3 lg:px-4">
                                    <div className='featured-product-card bg-transparent pb-6 sm:pb-8 lg:pb-12 my-4 sm:my-6 lg:my-10 rounded-2xl sm:rounded-3xl'>
                                        {/* Product Image */}
                                        <div className={`relative mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 ease-out ${isVisible
                                            ? 'opacity-100 transform scale-100'
                                            : 'opacity-0 transform scale-95'
                                            }`} style={{ transitionDelay: `${i * 200 + 500}ms` }}>
                                            <div className="featured-image-container relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                                                <Image
                                                    src={items.imgSrc}
                                                    alt={items.heading}
                                                    width={636}
                                                    height={620}
                                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                    priority={i < 2}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>

                                        {/* Product Content */}
                                        <div className="max-w-full px-2 sm:px-4">
                                            <h4 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-start mt-4 sm:mt-6 lg:mt-10 text-white transition-all duration-1000 ease-out leading-tight ${isVisible
                                                ? 'opacity-100 transform translate-x-0'
                                                : 'opacity-0 transform -translate-x-5'
                                                }`} style={{ transitionDelay: `${i * 200 + 700}ms` }}>
                                                {items.heading}
                                            </h4>
                                            <p className={`text-sm sm:text-base lg:text-lg font-normal text-white/80 text-center lg:text-start mt-3 sm:mt-4 leading-relaxed transition-all duration-1000 ease-out ${isVisible
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
        </div>
    );
};

export default FeaturedProducts;
