"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
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
        // centerMode: true,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
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
        <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section" ref={sectionRef}>
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                <div className={`text-center transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                </div>

                <div className={`transition-all duration-1200 ease-out delay-300 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative px-3">
                                <div className='bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl m-3 p-8 my-20 rounded-3xl border border-neoncyan/10 hover:border-neoncyan/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden'>
                                    {/* Background gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Profile Image */}
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 mx-auto mb-6 relative">
                                            <Image
                                                src={items.imgSrc}
                                                alt={items.name}
                                                width={80}
                                                height={80}
                                                className="rounded-full shadow-lg border-4 border-white group-hover:border-neoncyan/20 transition-all duration-300"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-neoncyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Quote Icon */}
                                        <div className="text-center mb-4">
                                            <svg className="w-8 h-8 text-neoncyan/60 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>

                                        {/* Comment */}
                                        <p className='text-lg font-medium text-darkpurple leading-relaxed mb-6 text-center italic'>
                                            &ldquo;{items.comment}&rdquo;
                                        </p>

                                        {/* Divider */}
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-neoncyan to-darkpurple mx-auto mb-6 rounded-full"></div>

                                        {/* User Info and Rating */}
                                        <div className="flex flex-col items-center space-y-3">
                                            <div className="text-center">
                                                <h3 className='text-xl font-bold text-darkpurple'>{items.name}</h3>
                                                <p className='text-sm font-medium text-darkpurple/70'>{items.profession}</p>
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex space-x-1">
                                                {[...Array(5)].map((_, index) => (
                                                    <StarIcon
                                                        key={index}
                                                        className="w-5 h-5 text-neoncyan"
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
