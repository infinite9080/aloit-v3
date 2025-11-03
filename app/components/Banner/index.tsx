

"use client";


import { useState, useEffect } from "react";

const Banner = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const rotatingTexts = [
            "Digital Future",
            "Cyber Defense",
            "Data Protection",
            "Zero Trust",
            "Cloud Security"
        ];
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
                                TRUSTED BY 500+ ENTERPRISES
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-8 lg:mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                            <div className="mb-2">
                                <span className="text-darkpurple">Secure Your</span>
                            </div>
                            <div className="mb-2">
                                <span className="text-neoncyan font-extrabold">
                                    {displayedText}
                                    <span className="animate-blink">|</span>
                                </span>
                            </div>
                            <div className="text-darkpurple text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-4">
                                with enterprise-grade cybersecurity
                            </div>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-10 lg:mb-12">
                        <p className="text-lg sm:text-xl md:text-2xl text-darkpurple leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Protect your business with AI-powered threat detection,
                            <span className="font-semibold text-neoncyan"> zero-trust architecture</span>,
                            and comprehensive compliance solutions.
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

                {/* COLUMN-2 - Video */}
                <div className='order-1 lg:order-2 relative lg:-mr-24 lg:ml-0 xl:-mr-32 xl:ml-0 2xl:-mr-48 2xl:ml-0'>
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-7xl 2xl:max-w-none">
                            <video
                                width={1200}
                                height={960}
                                className="w-full h-auto mx-auto block rounded-2xl shadow-2xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/Blue Purple Modern Animated Computer Science Presentation(1).mp4" type="video/mp4" />
                                <source src="/Blue-Purple-Modern-Animated-Co-unscreen.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;
