
"use client"
import { useState, useEffect, useRef } from 'react';

const Join = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div id="contact-section" className="bg-joinus py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden" ref={sectionRef}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                {/* Header Section */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className='mb-2 sm:mb-3 text-neoncyan text-sm sm:text-base lg:text-lg tracking-widest'>JOIN US</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Ready to get started?</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Transform your business.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Secure your future.</h3>
                    <p className="text-base sm:text-lg text-lightblack mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed px-4">
                        Ready to transform your business with cutting-edge cybersecurity solutions? Join thousands of organizations that trust AloIT for their digital security and compliance needs.
                    </p>
                </div>

                {/* Newsletter Signup Form */}
                <div className={`mx-auto max-w-4xl transition-all duration-1200 ease-out delay-300 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <form onSubmit={handleSubmit} className="relative">
                        {/* Desktop/Tablet Layout */}
                        <div className="hidden sm:flex items-center bg-white/95 backdrop-blur-md shadow-xl rounded-full p-2 border border-neoncyan/20 hover:border-neoncyan/40 transition-all duration-300 hover:shadow-2xl">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-6 text-base lg:text-lg text-darkpurple bg-transparent focus:outline-none placeholder-darkpurple/60"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="w-px h-12 bg-linegrey"></div>
                            <div className="flex-1">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-6 text-base lg:text-lg text-darkpurple bg-transparent focus:outline-none placeholder-darkpurple/60"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-neoncyan hover:bg-darkpurple text-white font-semibold py-4 px-8 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base lg:text-lg whitespace-nowrap"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Layout */}
                        <div className="sm:hidden space-y-4">
                            <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-1 border border-neoncyan/20">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-6 text-base text-darkpurple bg-transparent focus:outline-none placeholder-darkpurple/60 rounded-2xl"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-1 border border-neoncyan/20">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-6 text-base text-darkpurple bg-transparent focus:outline-none placeholder-darkpurple/60 rounded-2xl"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-neoncyan hover:bg-darkpurple text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base"
                            >
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>

                {/* Trust Indicators */}
                <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 transition-all duration-1400 ease-out delay-600 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkpurple/70 font-medium'>Free Security Assessment</span>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkpurple/70 font-medium'>No Spam, Ever</span>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-neoncyan rounded-full'></div>
                        <span className='text-sm sm:text-base text-darkpurple/70 font-medium'>Unsubscribe Anytime</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
