

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const rotatingTexts = ["nAMS", "nIAM", "nBsuits", "nBoard", "nERIM", "nISMA"];
        const currentText = rotatingTexts[currentTextIndex];
        let timeoutId: NodeJS.Timeout;

        if (isTyping) {
            // Typing animation
            if (displayedText.length < currentText.length) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, 100); // Typing speed
            } else {
                // Finished typing, wait then start erasing
                timeoutId = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // Wait 2 seconds before erasing
            }
        } else {
            // Erasing animation
            if (displayedText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 50); // Erasing speed (faster than typing)
            } else {
                // Finished erasing, move to next text
                setCurrentTextIndex((prevIndex) =>
                    (prevIndex + 1) % rotatingTexts.length
                );
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [displayedText, isTyping, currentTextIndex]);

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>

                {/* COLUMN-1 - Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left relative">
                    {/* Status Badge */}
                    <div className="mb-8 flex justify-center lg:justify-start">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-neoncyan/30 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
                            <div className="relative">
                                <div className="w-3 h-3 bg-neoncyan rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-neoncyan/70 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="text-sm font-semibold text-darkpurple tracking-wide">
                                Trusted by Businesses That Matter
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-8 lg:mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                            <div className="mb-2">
                                <span className="text-darkpurple">Experience The Power of </span>
                                <span className="text-neoncyan font-extrabold">
                                    {displayedText}
                                    <span className="animate-blink">|</span>
                                </span>
                            </div>

                            <div className="text-darkpurple text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-4">
                                Building Trust in Every System We Touch.

                            </div>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-10 lg:mb-12">
                        <p className="text-lg sm:text-xl md:text-2xl text-darkpurple leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            AloIT Consultants delivers compliance driven, security focused  <span className="font-semibold text-neoncyan"> IT solutions</span> that safeguard your business.


                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <button className="group relative overflow-hidden bg-neoncyan text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl hover:bg-blue-600">
                            <span className="relative z-10 text-lg">Start Free Assessment</span>
                        </button>

                        <button className="group flex items-center gap-3 bg-white border-2 border-neoncyan text-darkpurple font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-neoncyan hover:text-white hover:shadow-lg">
                            <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg">Watch Demo</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 lg:mt-16">
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-darkpurple/70">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">SOC 2 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">ISO 27001</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">GDPR Compliant</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMN-2 - Animated Security Illustration */}
                <div className='order-1 lg:order-2 relative lg:-mr-24 lg:ml-0 xl:-mr-32 xl:ml-0 2xl:-mr-48 2xl:ml-0'>
                    <div className="flex justify-center items-center h-full">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96">
                            {/* Central Shield */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Outer rotating ring */}
                                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 sm:border-3 lg:border-4 border-neoncyan/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>

                                    {/* Middle pulsing ring */}
                                    <div className="absolute inset-3 sm:inset-4 w-42 h-42 sm:w-48 sm:h-48 lg:w-56 lg:h-56 border border-neoncyan/50 rounded-full animate-pulse"></div>

                                    {/* Inner shield */}
                                    <div className="absolute inset-6 sm:inset-7 lg:inset-8 w-36 h-36 sm:w-42 sm:h-42 lg:w-48 lg:h-48 bg-gradient-to-br from-neoncyan/20 to-darkpurple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-neoncyan/40">
                                        {/* Shield Icon */}
                                        <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-neoncyan animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Floating threat indicators */}
                            <div className="absolute top-8 left-8 w-8 h-8 bg-red-500/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute top-16 right-12 w-6 h-6 bg-red-500/80 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-20 left-16 w-7 h-7 bg-red-500/80 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-12 right-8 w-5 h-5 bg-red-500/80 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

                            {/* Blocked threat animations */}
                            <div className="absolute top-8 left-8 w-8 h-8 border-2 border-green-500 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute top-16 right-12 w-6 h-6 border-2 border-green-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-20 left-16 w-7 h-7 border-2 border-green-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-12 right-8 w-5 h-5 border-2 border-green-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '1.5s' }}></div>

                            {/* Data flow lines */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neoncyan/50 to-transparent animate-pulse"></div>
                                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-neoncyan/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Corner security nodes */}
                            <div className="absolute top-4 left-4 w-4 h-4 bg-neoncyan rounded-full animate-pulse"></div>
                            <div className="absolute top-4 right-4 w-4 h-4 bg-neoncyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-4 left-4 w-4 h-4 bg-neoncyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-4 right-4 w-4 h-4 bg-neoncyan rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>


                        </div>
                    </div>
                </div>

            </div>

            {/* Company Logos Section */}
            <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-darkpurple/60 tracking-wide uppercase">
                        Trusted by leading organizations
                    </p>
                </div>

                {/* Featured Client Logo */}
                <div className="flex justify-center">
                    <div className="w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                        <Image
                            src="/owasa.png"
                            alt="OWASA - Orange Water and Sewer Authority"
                            width={80}
                            height={40}
                            className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className='flex flex-wrap justify-center gap-6 mt-12'>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>Powering Modern Businesses</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>99.9% Uptime</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>ISO 27001 Certified</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-neoncyan rounded-full'></div>
                        <span className='text-sm text-darkpurple/70 font-medium'>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
