"use client"
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Sarah Johnson",
        profession: 'CISO, TechCorp Solutions',
        comment: 'AloIT\'s nIAM solution transformed our identity management. The implementation was seamless, and we achieved 99.9% uptime with enhanced security across all our systems.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Michael Chen",
        profession: 'IT Director, Global Finance Inc',
        comment: 'nAMS streamlined our audit processes completely. What used to take weeks now takes days, and we\'re always compliance-ready. Outstanding support team and robust platform.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Emily Rodriguez",
        profession: 'CEO, Healthcare Dynamics',
        comment: 'nERIM\'s risk management capabilities are exceptional. Real-time monitoring and predictive analytics helped us prevent three major security incidents this year.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "David Thompson",
        profession: 'CTO, Manufacturing Plus',
        comment: 'The nISMA security assessment revealed critical vulnerabilities we didn\'t know existed. Their improvement roadmap helped us achieve ISO 27001 certification.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Lisa Wang",
        profession: 'Board Chair, Innovation Labs',
        comment: 'nBoard revolutionized our governance processes. Secure document sharing and digital voting made our board meetings more efficient and transparent.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "James Miller",
        profession: 'VP Operations, Retail Chain',
        comment: 'nBsuits integrated all our business operations seamlessly. From finance to HR, everything is now connected and automated. Excellent ROI and support.',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


const MultipleItems = () => {
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
            const currentRef = sectionRef.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 4500,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnHover: true,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 5500,
                    pauseOnHover: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    pauseOnHover: true,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px'
                }
            }
        ]
    };


    return (
        <div className="bg-testimonial py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden" id="testimonial-section" ref={sectionRef}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className='mb-2 sm:mb-3 text-neoncyan text-sm sm:text-base lg:text-lg tracking-widest'>Client Testimonials</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">See what others are saying.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Feedback.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Experience.</h3>
                </div>

                <div className={`testimonials-carousel transition-all duration-1200 ease-out delay-300 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative px-2 sm:px-3 lg:px-4">
                                <div className='bg-white/95 backdrop-blur-md shadow-lg hover:shadow-xl mx-1 sm:mx-2 lg:mx-3 p-5 sm:p-6 lg:p-8 xl:p-10 my-4 sm:my-6 lg:my-8 xl:my-12 rounded-2xl sm:rounded-3xl border border-neoncyan/10 hover:border-neoncyan/30 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-between'>
                                    {/* Background gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Profile Image */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-4 sm:mb-5 lg:mb-6 relative">
                                            <Image
                                                src={items.imgSrc}
                                                alt={items.name}
                                                width={96}
                                                height={96}
                                                className="rounded-full shadow-lg border-2 sm:border-3 lg:border-4 border-white group-hover:border-neoncyan/20 transition-all duration-300 w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-neoncyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Quote Icon */}
                                        <div className="text-center mb-3 sm:mb-4 lg:mb-5">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-neoncyan/60 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>

                                        {/* Comment */}
                                        <div className="flex-grow flex items-center">
                                            <p className='text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-darkpurple leading-relaxed mb-4 sm:mb-5 lg:mb-6 text-center italic px-1 sm:px-2'>
                                                &ldquo;{items.comment}&rdquo;
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="w-12 h-0.5 sm:w-16 lg:w-20 bg-gradient-to-r from-neoncyan to-darkpurple mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-full"></div>

                                        {/* User Info and Rating */}
                                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4 flex-shrink-0">
                                            <div className="text-center">
                                                <h3 className='text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-darkpurple'>{items.name}</h3>
                                                <p className='text-xs sm:text-sm lg:text-base font-medium text-darkpurple/70 mt-1'>{items.profession}</p>
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex space-x-1 sm:space-x-1.5">
                                                {[...Array(5)].map((_, index) => (
                                                    <StarIcon
                                                        key={index}
                                                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neoncyan drop-shadow-sm"
                                                    />
                                                ))}
                                            </div>
                                        </div>
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

export default MultipleItems;
