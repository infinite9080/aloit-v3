"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Digital = () => {
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
    return (
        <div className="w-full overflow-hidden" ref={sectionRef}>
            <div className={`w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32 bg-digital bg-blue relative transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
                }`}>
                <div className='max-w-7xl mx-auto h-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center h-full'>

                        {/* COLUMN-1 - Content */}
                        <div className="order-2 lg:order-1 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12 px-2 sm:px-0">
                            {/* Badge */}
                            <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible
                                ? 'opacity-100 transform translate-x-0'
                                : 'opacity-0 transform -translate-x-10'
                                }`}>
                                <h3 className="text-sm sm:text-base lg:text-lg font-normal text-white mb-3 sm:mb-4 lg:mb-5 tracking-widest text-center lg:text-start">
                                    Security & Compliance Experts
                                </h3>
                            </div>

                            {/* Main Heading */}
                            <div className={`transition-all duration-1000 ease-out delay-400 ${isVisible
                                ? 'opacity-100 transform translate-x-0'
                                : 'opacity-0 transform -translate-x-10'
                                }`}>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight sm:leading-snug text-center lg:text-start">
                                    Advanced threat protection, IT solutions, and regulatory compliance tailored for your business.
                                </h4>
                            </div>

                            {/* CTA Button */}
                            <div className={`text-center lg:text-start transition-all duration-1000 ease-out delay-600 ${isVisible
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-5'
                                }`}>
                                <button className="text-base sm:text-lg lg:text-xl font-semibold text-white bg-btnblue py-3 px-8 sm:py-4 sm:px-10 lg:px-12 hover:bg-hoblue rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                                    Request Security Assessment
                                </button>
                            </div>
                        </div>

                        {/* COLUMN-2 - Visual */}
                        <div className="order-1 lg:order-2 relative flex items-center justify-center mb-6 sm:mb-8 lg:mb-0">
                            <div className={`relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl transition-all duration-1200 ease-out delay-300 ${isVisible
                                ? 'opacity-100 transform translate-x-0 scale-100'
                                : 'opacity-0 transform translate-x-10 scale-95'
                                }`}>
                                <Image
                                    src="/images/digital/girldoodle.svg"
                                    alt="girldoodle"
                                    width={815}
                                    height={691}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;
