
"use client"
import { useEffect, useRef, useState } from "react";

const Beliefs = () => {
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
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl' ref={sectionRef}>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 - Reel Video */}

                <div className={`flex justify-center transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform -translate-x-10'
                    }`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ width: '400px', height: '711px', aspectRatio: '9/16' }}>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/White and Grey Modern Corporate Business Instagram Reels Video.mp4" type="video/mp4" />
                            <source src="/videos/cybersecurity-reel.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* COLUMN-2 - Reel Video */}

                <div className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${isVisible
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-10'
                    }`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ width: '400px', height: '711px', aspectRatio: '9/16' }}>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/Event Recap Mobile Video in Yellow Meta Style.mp4" type="video/mp4" />
                            <source src="/videos/compliance-reel.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
