

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white'>
            <div className='-mx-4 sm:-mx-6 lg:-mx-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>

                    {/* COLUMN-1 - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left relative">
                        {/* Status Badge */}
                        <div className="mb-8 flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neoncyan/10 via-blue-50 to-purple-50 border-2 border-neoncyan/40 rounded-full px-6 py-3 shadow-xl backdrop-blur-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <div className="relative flex items-center justify-center">
                                    <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold text-darkpurple tracking-wide">
                                    Certified Security Experts
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-8 lg:mb-10">
                            <h1 className="font-black leading-tight tracking-tight">
                                <div className="text-darkpurple text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-3">
                                    Empowering Your Business With
                                </div>
                                <div className="text-neoncyan text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
                                    {displayedText}
                                    <span className="animate-blink">|</span>
                                </div>

                                <div className="text-darkpurple text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium">
                                    Your Trusted Partner in Digital Transformation.
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
                            <button 
                                onClick={() => setIsContactModalOpen(true)}
                                className="group relative overflow-hidden bg-neoncyan text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl hover:bg-blue-600"
                            >
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

                    {/* COLUMN-2 - Radar Threat Scanner */}
                    <div className='order-1 lg:order-2 relative lg:-mr-24 lg:ml-0 xl:-mr-32 xl:ml-0 2xl:-mr-48 2xl:ml-0'>
                        <div className="flex justify-center items-center h-full">
                            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                                <svg viewBox="0 0 370 370" className="w-full h-full max-w-md">
                                    <defs>
                                        <radialGradient id="radarGradient">
                                            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3"/>
                                            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0"/>
                                        </radialGradient>
                                    </defs>
                                    
                                    {/* Radar Background */}
                                    <g id="radar-bg">
                                        <path fill="#0095E0" opacity="0.1" d="M185,365C85.75,365,5,284.25,5,185C5,85.75,85.75,5,185,5c99.25,0,180,80.75,180,180C365,284.25,284.25,365,185,365z"/>
                                        <path fill="#E6E7E8" opacity="0.2" d="M185,10c96.65,0,175,78.35,175,175s-78.35,175-175,175S10,281.65,10,185S88.35,10,185,10 M185,0c-24.97,0-49.2,4.89-72.01,14.54c-22.03,9.32-41.81,22.66-58.8,39.64s-30.32,36.77-39.64,58.8C4.89,135.8,0,160.03,0,185s4.89,49.2,14.54,72.01c9.32,22.03,22.66,41.81,39.64,58.8c16.99,16.99,36.77,30.32,58.8,39.64C135.8,365.11,160.03,370,185,370s49.2-4.89,72.01-14.54c22.03-9.32,41.81-22.66,58.8-39.64c16.99-16.99,30.32-36.77,39.64-58.8C365.11,234.2,370,209.97,370,185s-4.89-49.2-14.54-72.01c-9.32-22.03-22.66-41.81-39.64-58.8c-16.99-16.99-36.77-30.32-58.8-39.64C234.2,4.89,209.97,0,185,0L185,0z"/>
                                    </g>
                                    
                                    {/* Radar Pattern */}
                                    <path id="radar-pattern" opacity="0.15" fill="none" stroke="#00D9FF" strokeWidth="2" strokeMiterlimit="10" d="M308.5,185c0,68.21-55.29,123.5-123.5,123.5S61.5,253.21,61.5,185S116.79,61.5,185,61.5S308.5,116.79,308.5,185z M185,114.5c-38.94,0-70.5,31.56-70.5,70.5s31.56,70.5,70.5,70.5s70.5-31.56,70.5-70.5S223.94,114.5,185,114.5z"/>
                                    
                                    {/* Threat Icons - Skull images from public folder */}
                                    <g id="radar-icons" className="radar-threats">
                                        {/* Skull 1 */}
                                        <image className="threat-icon" x="120" y="35" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 2 */}
                                        <image className="threat-icon" x="220" y="55" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 3 */}
                                        <image className="threat-icon" x="290" y="120" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 4 */}
                                        <image className="threat-icon" x="227" y="132" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 5 */}
                                        <image className="threat-icon" x="32" y="180" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 6 */}
                                        <image className="threat-icon" x="55" y="92" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 7 */}
                                        <image className="threat-icon" x="288" y="208" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 8 */}
                                        <image className="threat-icon" x="202" y="217" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 9 */}
                                        <image className="threat-icon" x="95" y="220" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 10 */}
                                        <image className="threat-icon" x="125" y="291" width="35" height="35" xlinkHref="/skull.png"/>
                                        
                                        {/* Skull 11 */}
                                        <image className="threat-icon" x="235" y="280" width="35" height="35" xlinkHref="/skull.png"/>
                                    </g>
                                    
                                    {/* Radar Radius Pulse */}
                                    <circle id="radar-radius" className="animate-radar-pulse" opacity="0.1" fill="#00D9FF" cx="185" cy="185" r="45.67"/>
                                    
                                    {/* Center Circle */}
                                    <circle id="radar-stem" fill="#00D9FF" opacity="0.3" cx="185" cy="185" r="17.33"/>
                                    
                                    {/* Radar Hand */}
                                    <line id="radar-hand" className="animate-radar-sweep" fill="none" stroke="#00D9FF" strokeWidth="3" strokeMiterlimit="10" x1="185" y1="185" x2="185" y2="10"/>
                                    
                                    {/* Center Logo - Using SVG circle and image */}
                                    <circle cx="185" cy="185" r="50" fill="white" opacity="0.95"/>
                                    <circle cx="185" cy="185" r="50" fill="none" stroke="#00D9FF" strokeWidth="2" opacity="0.3"/>
                                    <image 
                                        x="145" 
                                        y="145" 
                                        width="80" 
                                        height="80" 
                                        xlinkHref="/aloitonlyicon.jpeg"
                                        clipPath="circle(40px at 40px 40px)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Company Logos Section - Full Width */}
            </div>
            <div className="mt-20 lg:mt-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 bg-gradient-to-br from-neoncyan/5 via-blue-50/50 to-purple-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-darkpurple/60 tracking-wide uppercase">
                            Trusted by leading organizations
                        </p>
                    </div>
                </div>

                    {/* Featured Client Logos - Infinite Scroll */}
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-logos">
                            {/* First set of logos */}
                            <div className="flex items-center gap-12 px-6 flex-shrink-0">
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/owasa.png"
                                        alt="OWASA - Orange Water and Sewer Authority"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/idi.png"
                                        alt="IDI"
                                        width={80}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/gov.om.png"
                                        alt="Government of Oman"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/national audit office.png"
                                        alt="National Audit Office"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/office of the auditor general.png"
                                        alt="Office of the Auditor General"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/one zambia one nation.svg"
                                        alt="One Zambia One Nation"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="flex items-center gap-12 px-6 flex-shrink-0">
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/owasa.png"
                                        alt="OWASA - Orange Water and Sewer Authority"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/idi.png"
                                        alt="IDI"
                                        width={80}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/gov.om.png"
                                        alt="Government of Oman"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/national audit office.png"
                                        alt="National Audit Office"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/office of the auditor general.png"
                                        alt="Office of the Auditor General"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/one zambia one nation.svg"
                                        alt="One Zambia One Nation"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                            {/* Third set for extra smooth loop */}
                            <div className="flex items-center gap-12 px-6 flex-shrink-0">
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/owasa.png"
                                        alt="OWASA - Orange Water and Sewer Authority"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/idi.png"
                                        alt="IDI"
                                        width={80}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/gov.om.png"
                                        alt="Government of Oman"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/national audit office.png"
                                        alt="National Audit Office"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/office of the auditor general.png"
                                        alt="Office of the Auditor General"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src="/one zambia one nation.svg"
                                        alt="One Zambia One Nation"
                                        width={70}
                                        height={60}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Trust Indicators */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}

export default Banner;
