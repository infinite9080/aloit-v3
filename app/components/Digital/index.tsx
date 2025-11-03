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

        <div className="mx-2" ref={sectionRef}>
            <div className={`mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
                }`}>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24">
                        <h3 className={`text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start transition-all duration-1000 ease-out delay-200 ${isVisible
                            ? 'opacity-100 transform translate-x-0'
                            : 'opacity-0 transform -translate-x-10'
                            }`}>CYBERSECURITY EXPERTS</h3>
                        <h4 className={`text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start transition-all duration-1000 ease-out delay-400 ${isVisible
                            ? 'opacity-100 transform translate-x-0'
                            : 'opacity-0 transform -translate-x-10'
                            }`}>
                            Advanced threat protection and regulatory compliance solutions.
                        </h4>
                        <div className={`text-center lg:text-start transition-all duration-1000 ease-out delay-600 ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-5'
                            }`}>
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full hover:scale-105 transition-all duration-300">Security Assessment</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className={`lg:absolute girldoodle transition-all duration-1200 ease-out delay-300 ${isVisible
                            ? 'opacity-100 transform translate-x-0 scale-100'
                            : 'opacity-0 transform translate-x-10 scale-95'
                            }`}>
                            <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
