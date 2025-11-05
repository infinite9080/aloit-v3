"use client"
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// PRODUCT DATA

interface DataType {
    description: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        description: 'Identity Access Management',
        name: 'nIAM',
        imgSrc: '/niam.svg',
    },
    {
        description: 'Audit Management Software',
        name: 'nAMS',
        imgSrc: '/nams.png',
    },
    {
        description: 'ERP Software',
        name: 'nBsuits',
        imgSrc: '/nbsuits.png',
    },
    {
        description: 'Information Security Maturity',
        name: 'nISMA',
        imgSrc: '/nisma.png',
    },
    {
        description: 'Board Meeting Management',
        name: 'nBoard',
        imgSrc: '/nboard.png',
    },
    {
        description: 'Risk Management Software',
        name: 'nERIM',
        imgSrc: '/nerim.png',
    },
]

// CAROUSEL SETTINGS


const Wework = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        swipeToSlide: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2500,
                    autoplaySpeed: 3500,
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
                    speed: 2000,
                    autoplaySpeed: 4000,
                    pauseOnHover: true,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 4000,
                    pauseOnHover: true,
                    arrows: false
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
                    speed: 1500,
                    autoplaySpeed: 4500,
                    pauseOnHover: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    };


    return (
        <div className="bg-wework py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden" ref={sectionRef}>
            <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8'>
                {/* Section Title */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black my-1 sm:my-2">Our Products.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-50 lg:mr-12 my-1 sm:my-2">Solution.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-25 lg:mr-6 my-1 sm:my-2">Innovation.</h3>
                </div>
            </div>

            {/* Products Carousel */}
            <div className={`transition-all duration-1200 ease-out delay-300 pt-4 pb-8 sm:pb-12 lg:pb-16 ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
                }`}>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} className="px-2 sm:px-3 h-full py-2 sm:py-3">
                            <div className='bg-white mx-1 sm:mx-2 py-6 sm:py-8 lg:py-10 my-2 sm:my-3 lg:my-4 text-center shadow-lg hover:shadow-xl rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:min-h-[400px]'>
                                {/* Product Logo Container */}
                                <div className='flex-shrink-0'>
                                    <div className='relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto mb-4 sm:mb-6 bg-gray-50 rounded-xl sm:rounded-2xl group-hover:bg-neoncyan/5 transition-colors duration-300'>
                                        <Image
                                            src={items.imgSrc}
                                            alt={items.name}
                                            width={80}
                                            height={80}
                                            className="object-contain max-w-full max-h-full w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className='flex-grow flex flex-col justify-center'>
                                    {/* Product Name */}
                                    <h4 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 text-neoncyan group-hover:text-darkpurple transition-colors duration-300'>
                                        {items.name}
                                    </h4>

                                    {/* Product Description */}
                                    <p className='text-sm sm:text-base lg:text-lg font-normal opacity-60 group-hover:opacity-80 transition-opacity duration-300 px-2 sm:px-4 leading-relaxed'>
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Wework;
