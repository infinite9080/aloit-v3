"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Dedicated = () => {
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
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
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
        <div className="relative" ref={sectionRef}>

            <Image
                src="/images/dedicated/spiral.svg"
                height={272}
                width={686}
                alt="spiral-design"
                className={`absolute left-0 hidden lg:block -z-10 transition-all duration-1000 ease-out ${isVisible
                    ? 'animate-spiral-rotate opacity-100 transform translate-x-0'
                    : 'opacity-0 transform -translate-x-20'
                    }`}
            />

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>

                    {/* COLUMN-1 - Video */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
                            <video
                                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/Blue Purple Modern Cyber Security Mobile Video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="ml-5 order-1 lg:order-2 relative text-center lg:text-left">
                        <Image
                            src="images/dedicated/comma.svg"
                            alt="comma-image"
                            width={200}
                            height={106}
                            className={`absolute comma-pos hidden lg:block transition-all duration-1200 ease-out delay-300 ${isVisible
                                ? 'animate-comma-float opacity-100 transform translate-y-0'
                                : 'opacity-0 transform -translate-y-10'
                                }`}
                        />
                        <h2 className="text-4xl lg:text-65xl pt-20 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicated to Securing Your Digital Future</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Our experts provide 24/7 support, advanced IT solutions, and compliance guidance to protect your business, streamline operations, and ensure confidence in today’s digital world.</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
