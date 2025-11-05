"use client";
import React, { useState, useEffect, useRef } from "react";

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
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

    const serviceCategories = [
        {
            title: "Core Infrastructure & Application Security",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" />
                </svg>
            ),
            color: "from-blue-500 to-blue-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
                        </svg>
                    ),
                    title: "Website Security",
                    description: "Protect your online presence from cyber threats.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                            <path d="M19 15L20.09 21.26L27 22L20.09 22.74L19 29L17.91 22.74L11 22L17.91 21.26L19 15Z" />
                        </svg>
                    ),
                    title: "API Security",
                    description: "Secure your digital interfaces and data exchanges.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18ZM12 8.5C10.62 8.5 9.5 9.62 9.5 11S10.62 13.5 12 13.5 14.5 12.38 14.5 11 13.38 8.5 12 8.5ZM12 15C10.34 15 9 16.34 9 18H15C15 16.34 13.66 15 12 15Z" />
                        </svg>
                    ),
                    title: "Mobile App Security",
                    description: "Ensure the safety and reliability of your mobile applications.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 9L2 8H21L22 9V10C22 10.55 21.55 11 21 11V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V11C2.45 11 2 10.55 2 10V9H1ZM5 20H19V11H5V20ZM6 5H18V7H6V5ZM7 1H17V3H7V1Z" />
                        </svg>
                    ),
                    title: "Network Security",
                    description: "Proactively defend your critical IT infrastructure.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 4C18.2 4 20 5.8 20 8V10C20.6 10 21 10.4 21 11V21C21 21.6 20.6 22 20 22H4C3.4 22 3 21.6 3 21V11C3 10.4 3.4 10 4 10V8C4 5.8 5.8 4 8 4H16ZM8 6C6.9 6 6 6.9 6 8V10H18V8C18 6.9 17.1 6 16 6H8ZM12 13C13.1 13 14 13.9 14 15S13.1 17 12 17 10 16.1 10 15 10.9 13 12 13Z" />
                        </svg>
                    ),
                    title: "Active Directory Security",
                    description: "Fortify your organization's user management systems.",
                },
            ],
        },
        {
            title: "Threat Simulation & Realistic Testing",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            color: "from-red-500 to-red-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z" />
                            <path d="M10.29 8.44L9.5 6L8.71 8.44L6.25 9.23L8.71 10.02L9.5 12.46L10.29 10.02L12.75 9.23L10.29 8.44Z" />
                        </svg>
                    ),
                    title: "Attack Simulation",
                    description: "Real-world scenarios to identify vulnerabilities.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                            <path d="M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20 4 16.41 4 12 7.59 4 12 4Z" opacity="0.3" />
                        </svg>
                    ),
                    title: "Advanced Persistent Threat Simulation",
                    description: "Simulate sophisticated cyber threats.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                            <path d="M18 8L16 10L18 12L20 10L18 8Z" />
                        </svg>
                    ),
                    title: "Insider Threat Detection",
                    description: "Safeguard your business from internal security risks.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                        </svg>
                    ),
                    title: "Security Controls Testing",
                    description: "Assess your EDR and defense stack against advanced threats.",
                },
            ],
        },
        {
            title: "AI-Enhanced Security Intelligence",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8H20V18ZM18 12L16 10V11H8V13H16V14L18 12Z" />
                </svg>
            ),
            color: "from-purple-500 to-purple-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                        </svg>
                    ),
                    title: "Intelligent Risk Profiling",
                    description: "Accurate, AI-driven risk assessment.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
                            <path d="M8 12H16V14H8V12ZM8 16H13V18H8V16Z" />
                        </svg>
                    ),
                    title: "AI Policy Advisor",
                    description: "Smart guidance on cybersecurity policy creation.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM15 16H7V14H15V16ZM17 8H7V6H17V8Z" />
                        </svg>
                    ),
                    title: "Automated Security Reports",
                    description: "Timely, clear, actionable security insights.",
                },
            ],
        },
        {
            title: "Security Awareness & Training",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" />
                </svg>
            ),
            color: "from-green-500 to-green-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                        </svg>
                    ),
                    title: "Interactive Awareness Training",
                    description: "Engaging sessions tailored to your team.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12 14.5V5.5L18 10L12 14.5Z" />
                        </svg>
                    ),
                    title: "Monthly Security Insights",
                    description: "Stay informed with the latest cybersecurity trends.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                            <path d="M12 15L8 12L9.41 10.59L12 13.17L14.59 10.59L16 12L12 15Z" />
                        </svg>
                    ),
                    title: "Phishing Awareness Campaigns",
                    description: "Hands-on training to prevent social engineering attacks.",
                },
            ],
        },
        {
            title: "Physical Security Evaluations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" />
                </svg>
            ),
            color: "from-orange-500 to-orange-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13 14 13.9 14 15 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" />
                        </svg>
                    ),
                    title: "Access Control Reviews",
                    description: "Ensure your physical locations are secure.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 10.5V7C17 4.24 14.76 2 12 2S7 4.24 7 7V10.5C6.4 10.5 6 10.9 6 11.5V20.5C6 21.1 6.4 21.5 7 21.5H17C17.6 21.5 18 21.1 18 20.5V11.5C18 10.9 17.6 10.5 17 10.5ZM12 18.5C11.2 18.5 10.5 17.8 10.5 17S11.2 15.5 12 15.5 13.5 16.2 13.5 17 12.8 18.5 12 18.5ZM15.1 10.5H8.9V7C8.9 5.29 10.29 3.9 12 3.9S15.1 5.29 15.1 7V10.5Z" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    ),
                    title: "RFID Security Checks",
                    description: "Verify the integrity of your access systems.",
                },
            ],
        },
        {
            title: "Collaborative Threat Modeling",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14H20.5L22 15.5V20.5L20.5 22H15.5L14 20.5V15.5L15.5 14ZM18.5 17.5C18.5 16.67 17.83 16 17 16S15.5 16.67 15.5 17.5 16.17 19 17 19 18.5 18.33 18.5 17.5ZM7.5 14H12.5L14 15.5V20.5L12.5 22H7.5L6 20.5V15.5L7.5 14ZM10.5 17.5C10.5 16.67 9.83 16 9 16S7.5 16.67 7.5 17.5 8.17 19 9 19 10.5 18.33 10.5 17.5Z" />
                </svg>
            ),
            color: "from-indigo-500 to-indigo-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
                            <path d="M12 8L8 10L12 12L16 10L12 8Z" />
                        </svg>
                    ),
                    title: "STRIDE Interactive Workshops",
                    description: "Identify, discuss, and mitigate potential threats collaboratively.",
                },
            ],
        },
    ];

    return (
        <section id="services-section" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Subtle Background Elements */}
            <div className={`absolute inset-0 opacity-5 transition-all duration-1000 ease-out bg-elements ${isVisible
                ? 'opacity-5 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
                }`}>
                <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-neoncyan/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Title */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple my-1 sm:my-2">Our Services.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-50 lg:mr-12 my-1 sm:my-2">Reliable.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-25 lg:mr-6 my-1 sm:my-2">Efficient.</h3>
                </div>

                {/* Category Navigation */}
                <div className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1200 ease-out delay-200 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                        {serviceCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg backdrop-blur-sm border text-xs sm:text-sm lg:text-base ${activeCategory === index
                                    ? "bg-neoncyan text-white shadow-neoncyan/25 border-neoncyan/50"
                                    : "bg-white/80 text-darkpurple hover:bg-neoncyan/10 hover:text-neoncyan border-neoncyan/20 hover:border-neoncyan/40"
                                    }`}
                            >
                                <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">{category.icon}</span>
                                <span className="font-semibold hidden sm:inline">
                                    {category.title}
                                </span>
                                <span className="font-semibold sm:hidden">
                                    {category.title.split(' ')[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Category Services */}
                <div className={`mb-8 sm:mb-12 lg:mb-20 transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {serviceCategories[activeCategory].services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 text-center shadow-lg rounded-2xl sm:rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 hover:border-neoncyan/30 overflow-hidden ${isVisible
                                    ? 'opacity-100 transform scale-100'
                                    : 'opacity-0 transform scale-95'
                                    }`}
                                style={{ transitionDelay: `${index * 150 + 600}ms` }}
                            >
                                {/* Hover Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className='relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-neoncyan/10 to-neoncyan/5 rounded-full group-hover:from-neoncyan/20 group-hover:to-neoncyan/10 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-neoncyan/20'>
                                        <div className="text-neoncyan transition-all duration-300 group-hover:text-neoncyan">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                                                {service.icon}
                                            </div>
                                        </div>
                                        {/* Icon glow effect */}
                                        <div className="absolute inset-0 bg-neoncyan/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                                    </div>

                                    {/* Title */}
                                    <h4 className='text-lg sm:text-xl lg:text-2xl font-bold text-darkpurple mb-3 sm:mb-4 group-hover:text-neoncyan transition-colors duration-300 leading-tight'>
                                        {service.title}
                                    </h4>

                                    {/* Description */}
                                    <p className='text-sm sm:text-base font-normal text-darkpurple/70 leading-relaxed group-hover:text-darkpurple/90 transition-colors duration-300 mb-4 sm:mb-6'>
                                        {service.description}
                                    </p>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center transition-all duration-1200 ease-out delay-600 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="bg-gradient-to-br from-neoncyan via-neoncyan/95 to-neoncyan/90 py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm border border-neoncyan/30 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/30 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                                Ready to Secure Your <span className="text-white/90">Digital Future?</span>
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                                Let our cybersecurity experts assess your current security posture and design a comprehensive protection strategy tailored to your business needs.
                            </p>
                            <button className="group bg-white text-neoncyan px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white/90 hover:text-darkpurple transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                                <span>Get Your Security Assessment</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;