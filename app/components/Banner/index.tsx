

"use client";

import { useState, useEffect } from "react";
import ContactModal from "../ContactModal";
import Navbar from "../Navbar/Navbar";

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
        <div className='relative min-h-screen flex items-center' style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1E013A 50%, #00224A 100%)' }}>
            {/* Navbar */}
            <Navbar />
            
            {/* Background Elements */}
            <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
                {/* Animated Wave Layers */}
                <svg className="absolute bottom-0 left-0 w-full h-full" style={{ opacity: 0.2 }} viewBox="0 0 1440 800" preserveAspectRatio="none">
                    {/* Wave 1 - Slow */}
                    <path className="animate-wave-1" fill="rgba(96, 165, 250, 0.15)"
                        d="M0,400 C360,500 720,300 1080,400 C1260,450 1380,380 1440,400 L1440,800 L0,800 Z">
                    </path>
                    {/* Wave 2 - Medium */}
                    <path className="animate-wave-2" fill="rgba(96, 165, 250, 0.1)"
                        d="M0,450 C320,350 640,550 960,450 C1200,380 1360,500 1440,450 L1440,800 L0,800 Z">
                    </path>
                    {/* Wave 3 - Fast */}
                    <path className="animate-wave-3" fill="rgba(96, 165, 250, 0.08)"
                        d="M0,500 C400,600 800,400 1200,500 C1320,530 1400,480 1440,500 L1440,800 L0,800 Z">
                    </path>
                </svg>

                {/* Glowing Orbs */}
                <div className="absolute top-10 right-20 w-96 h-96 rounded-full animate-pulse" style={{ background: 'rgba(96, 165, 250, 0.2)', filter: 'blur(100px)' }}></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.2)', filter: 'blur(100px)', animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full animate-pulse" style={{ background: 'rgba(34, 211, 238, 0.15)', filter: 'blur(80px)', animationDelay: '0.8s' }}></div>

                {/* Dot Grid Pattern */}
                <div className="absolute inset-0" style={{ opacity: 0.1, backgroundImage: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Content */}
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-20 lg:py-24 w-full'>
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
                                    <span className="animate-blink text-white">|</span>
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

                            <button className="group flex items-center gap-3 bg-white/10 border-2 border-white/40 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white hover:text-darkblue hover:shadow-lg backdrop-blur-sm">
                                <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                <span className="text-lg">Watch Demo</span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        {/* <div className="mt-12 lg:mt-16">
                            <div className="flex flex-wrap justify-start items-center gap-6 text-sm text-white/70">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">SOC 2</span>
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
                        </div> */}
                    </div>

                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}

export default Banner;
