"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Mohammed Shafat Patvary",
        role: "CEO & Founder",
        image: "/CEO-Mohammed-Shafat-Patvary-removebg-preview.png",
        bio: "Visionary leader driving innovation in cybersecurity consulting and IT solutions. Leading AloIT Consultant to deliver cutting-edge security services to organizations worldwide.",
        expertise: ["Strategic Leadership", "Cybersecurity", "Business Development"],
        linkedin: "https://www.linkedin.com/in/sifatullah/",
    },
    {
        name: "Firoz Haider Khan",
        role: "Director and Co-Founder",
        image: "/Firoz-Haider-Khan-removebg-preview.png",
        bio: "Co-founder with extensive experience in technology consulting and security solutions. Instrumental in shaping the company's strategic direction and client relationships.",
        expertise: ["Technology Consulting", "Security Solutions", "Client Relations"],
        linkedin: "https://www.linkedin.com/in/firoz-haider-khan-15a56922/",
    },
    {
        name: "Mohammad Arif Rahim",
        role: "Head of Operations",
        image: "/1636123774508-removebg-preview.png",
        bio: "Oversees operational excellence and ensures seamless delivery of security services. Expert in process optimization and team management.",
        expertise: ["Operations Management", "Process Optimization", "Team Leadership"],
        linkedin: "https://www.linkedin.com/in/mohammad-arif-rahim/",
    },
    {
        name: "Zaman Asaduzzaman",
        role: "HR & Admin",
        image: "/Generated_Image_November_05__2025_-_3_32PM-removebg-preview.png",
        bio: "Manages human resources and administrative functions, ensuring a productive and positive work environment for the team.",
        expertise: ["Human Resources", "Administration", "Team Development"],
        linkedin: "https://www.linkedin.com/in/zaman-asaduzzaman-1530852a5/",
    },
];

const OurTeamPage = () => {
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

    return (
        <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 xl:pb-32 bg-white overflow-hidden relative" ref={sectionRef}>
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border border-neoncyan/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Title */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple my-1 sm:my-2">Our Team.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-50 my-1 sm:my-2 lg:ml-16">Experts.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-25 my-1 sm:my-2 lg:ml-32">Dedicated.</h3>
                </div>

                {/* Team Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-200 hover:-translate-y-3 flex flex-col ${isVisible
                                ? 'opacity-100 transform scale-100'
                                : 'opacity-0 transform scale-95'
                                }`}
                            style={{ 
                                transitionDelay: `${index * 100 + 600}ms`,
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)'
                            }}
                        >
                            {/* Gradient Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neoncyan via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity duration-200"></div>

                            {/* Team Member Image */}
                            <div className="relative h-80 bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/5 to-transparent"></div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={350}
                                    height={350}
                                    className="relative z-10 w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col h-full bg-gradient-to-b from-white to-gray-50/30">
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-darkpurple mb-1 group-hover:text-neoncyan transition-colors duration-200">
                                        {member.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-neoncyan to-transparent"></div>
                                        <p className="text-sm font-semibold text-neoncyan">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {member.bio}
                                </p>

                                {/* Expertise Tags */}
                                <div className="mb-4 flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg className="w-4 h-4 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-bold text-darkpurple uppercase tracking-wide">Expertise</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-gradient-to-r from-neoncyan/10 to-blue-500/10 text-neoncyan text-xs font-medium rounded-full border border-neoncyan/20 hover:border-neoncyan/40 transition-colors duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* LinkedIn Button */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0A66C2] to-[#004182] hover:from-[#004182] hover:to-[#0A66C2] font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] mt-auto overflow-hidden"
                                    style={{ color: 'white', boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)' }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                    <svg className="w-4 h-4 fill-white relative z-10" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-white relative z-10 font-semibold">View LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default OurTeamPage;
