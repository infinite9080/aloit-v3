

"use client";

import { useState, useEffect } from "react";
import ContactModal from "../ContactModal";

const Banner = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const rotatingTexts = [
            "Secure IT",
            "Compliance",
            "Audit Tools",
            "Risk Management",
            "Data Protection"
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
        <div className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-bgblue">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                >
                    <source src="/banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-bgblue via-bgblue/90 to-transparent"></div>
            </div>

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full'>
                <div className='max-w-4xl'>

                    {/* Content */}
                    <div className="text-left relative">
                        {/* Stats or Tagline */}
                        <div className="mb-8 flex justify-start gap-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-neoncyan rounded-full animate-pulse shadow-lg shadow-neoncyan/50"></div>
                                <span className="text-base text-white font-semibold">15+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-neoncyan rounded-full animate-pulse shadow-lg shadow-neoncyan/50"></div>
                                <span className="text-base text-white font-semibold">Global Clients</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-8 lg:mb-10">
                            <h1 className="font-black leading-tight tracking-tight">
                                <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3">
                                    Empowering Your Business With
                                </div>
                                <div className="text-neoncyan text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
                                    {displayedText}
                                    <span className="animate-blink">|</span>
                                </div>

                                <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium">
                                    Your Trusted Partner in Digital Transformation.
                                </div>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className="mb-10 lg:mb-12">
                            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                                AloIT Consultants delivers compliance driven, security focused  <span className="font-semibold text-neoncyan"> IT solutions</span> that safeguard your business.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="group relative overflow-hidden bg-neoncyan text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl hover:bg-blue-600"
                            >
                                <span className="relative z-10 text-lg">Start Free Assessment</span>
                            </button>

                            <button className="group flex items-center gap-3 bg-white/10 border-2 border-white/40 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white hover:text-darkpurple hover:shadow-lg backdrop-blur-sm">
                                <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                <span className="text-lg">Watch Demo</span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 lg:mt-16">
                            <div className="flex flex-wrap justify-start items-center gap-6 text-sm text-white/70">
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

                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}

export default Banner;
