"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';

const CareerPage = () => {
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

    return (
        <div className="bg-white overflow-hidden relative" ref={sectionRef}>
            {/* Dark Header for Navbar */}
            <div className="relative h-20 bg-gradient-to-r from-[#0f172a] via-[#1E013A] to-[#00224A]">
                <Navbar />
            </div>
            
            <div className="pb-12 sm:pb-16 lg:pb-20 xl:pb-32">
            {/* Background Elements */}
            <div className="absolute inset-0">
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
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple my-1 sm:my-2">We&apos;re Hiring!</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-50 my-1 sm:my-2 lg:ml-16">Join Our Team.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-25 my-1 sm:my-2 lg:ml-32">Start Your Career.</h3>
                </div>

                {/* We Hire Image */}
                <div className={`text-center mb-8 sm:mb-12 transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="/wehire.jpeg"
                            alt="We're Hiring"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-auto"
                        />
                    </div>
                </div>

                {/* Job Posting */}
                <div className={`max-w-4xl mx-auto transition-all duration-1200 ease-out delay-600 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div
                        className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-200 hover:-translate-y-3"
                        style={{
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)'
                        }}
                    >
                        <div className="p-7 sm:p-8 lg:p-10">
                            {/* Job Header */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="px-3 py-1.5 bg-gradient-to-r from-neoncyan/10 to-blue-500/10 text-neoncyan text-xs font-medium rounded-full border border-neoncyan/20">
                                    Paid Internship
                                </span>
                                <span className="px-3 py-1.5 bg-gradient-to-r from-neoncyan/10 to-blue-500/10 text-neoncyan text-xs font-medium rounded-full border border-neoncyan/20">
                                    3-6 Months
                                </span>
                                <span className="text-sm text-gray-500 ml-auto">
                                    Deadline: 30.04.2026
                                </span>
                            </div>

                            {/* Job Title and Location */}
                            <div className="mb-6">
                                <h4 className="text-2xl sm:text-3xl font-bold text-darkpurple mb-3">
                                    Intern
                                </h4>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm font-semibold text-neoncyan">
                                            Uttara, Dhaka
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm font-semibold text-neoncyan">
                                            Competitive Stipend
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                ALO IT Consultants is inviting applications from motivated and ambitious individuals who are eager to gain hands-on experience in a dynamic and professional technology environment.
                            </p>

                            {/* Job Description */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-base font-bold text-darkpurple uppercase tracking-wide">Job Description</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Assist in ongoing projects across assigned departments (Software Development, QA, UI/UX, Business/Marketing)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Support the team in research, documentation, and execution of tasks</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Participate in team meetings, brainstorming sessions, and progress reviews</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Learn and apply industry tools, technologies, and best practices</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Collaborate with cross-functional teams to deliver project outcomes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Eligibility Criteria */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <p className="text-base font-bold text-darkpurple uppercase tracking-wide">Eligibility Criteria</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Final-year students or recent graduates in CSE, IT, BBA, or relevant disciplines</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Basic knowledge in programming, business processes, or digital tools (role-dependent)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Strong willingness to learn and grow in a fast-paced environment</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Good communication and teamwork skills</span>
                                    </div>
                                </div>
                            </div>

                            {/* What We Offer */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 110-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-base font-bold text-darkpurple uppercase tracking-wide">What We Offer</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Hands-on experience with real-world projects</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Structured mentorship from experienced professionals</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Exposure to modern tools, technologies, and industry practices</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Competitive, market-aligned remuneration</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Collaborative and supportive work environment</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Opportunity to build a strong professional portfolio</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-600">Certificate of completion upon successful internship</span>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Button */}
                            <a
                                href="mailto:career@aloitconsultants.com?subject=Internship Application"
                                className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-neoncyan hover:bg-darkpurple font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                                style={{ color: 'white' }}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>Apply Now</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`mt-16 sm:mt-20 lg:mt-24 text-center transition-all duration-1200 ease-out delay-800 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-darkpurple my-1 sm:my-2">Start Your Career With Us</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">
                            Gain the experience that sets you apart. Apply now and join our growing team at ALO IT Consultants.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:career@aloitconsultants.com?subject=Internship Application"
                                className="inline-flex items-center justify-center gap-2 bg-neoncyan text-white font-semibold py-3 px-8 rounded-full hover:bg-darkpurple transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Apply Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CareerPage;
