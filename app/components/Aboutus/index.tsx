"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Our Mission",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'To provide enterprises with innovative SaaS implementation and consultancy services that strengthen information security, simplify compliance, and optimize operational efficiency.',
        link: '/our-mission'
    },
    {
        heading: "Our Vision",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "To become South Asia's most reliable partner for digital security and enterprise transformation, enabling every organization to operate with confidence, compliance, and continuity in a connected world.",
        link: '/our-vision'
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
        <div id="aboutus-section" className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50/50 to-gray-50" ref={sectionRef}>
            {/* Background decorative elements - matching your original design */}
            <div className={`absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-neoncyan opacity-5 rounded-full -translate-x-16 -translate-y-16 sm:-translate-x-24 sm:-translate-y-24 lg:-translate-x-32 lg:-translate-y-32 transition-all duration-1500 ease-out ${isVisible ? 'opacity-5 scale-100' : 'opacity-0 scale-75'}`}></div>
            <div className={`absolute top-10 right-10 sm:top-16 sm:right-16 lg:top-20 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-neoncyan opacity-10 rounded-lg rotate-45 transition-all duration-1500 ease-out delay-200 ${isVisible ? 'opacity-10 scale-100 rotate-45' : 'opacity-0 scale-75 rotate-0'}`}></div>
            <div className={`absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-tl from-neoncyan to-transparent opacity-8 rounded-full translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 lg:translate-x-40 lg:translate-y-40 transition-all duration-1500 ease-out delay-400 ${isVisible ? 'opacity-8 scale-100' : 'opacity-0 scale-75'}`}></div>
            <div className={`absolute bottom-10 left-10 sm:bottom-16 sm:left-16 lg:bottom-20 lg:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border-2 sm:border-3 lg:border-4 border-neoncyan opacity-20 rounded-full transition-all duration-1500 ease-out delay-600 ${isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-75'}`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header - Matching Manage Section Style */}
                <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black my-1 sm:my-2">Secure & Automate Your</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-50 my-1 sm:my-2">Business Future.</h3>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {Aboutdata.map((item, i) => (
                        <div
                            key={i}
                            className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            {/* Card - Clean white with shadow, no borders */}
                            <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon Container - Vibrant colors */}
                                <div className="relative mb-6">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-neoncyan rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-500">
                                        {i === 0 ? (
                                            // Mission Icon
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        ) : (
                                            // Vision Icon
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative space-y-4 mb-8">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-black group-hover:text-neoncyan transition-colors duration-300">
                                        {item.heading}
                                    </h3>

                                    <p className="text-base lg:text-lg text-lightblack leading-relaxed">
                                        {item.paragraph}
                                    </p>
                                </div>

                                {/* CTA Button - Matching your style */}
                                <Link
                                    href={item.link}
                                    className="relative z-10 inline-flex items-center gap-2 bg-neoncyan hover:bg-darkpurple text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                >
                                    <span>Learn More</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className={`mt-16 sm:mt-20 lg:mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { number: '27+', label: 'Years Experience' },
                            { number: '99.9%', label: 'Uptime Guarantee' },
                            { number: '24/7', label: 'Expert Support' },
                            { number: '100%', label: 'Compliance Ready' }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-neoncyan mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-sm lg:text-base text-lightblack font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
