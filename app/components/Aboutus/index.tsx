import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Our Mission and Our vision.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Protecting businesses from cyber threats with cutting-edge security solutions and comprehensive compliance frameworks tailored to your industry needs.',
        link: 'Learn more'
    },
    {
        heading: "Security Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'From vulnerability assessments to incident response, we provide 24/7 monitoring, threat detection, and rapid remediation to keep your business secure.',
        link: 'Learn more'
    },
    {
        heading: "Compliance Expertise.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Navigate complex regulatory requirements with confidence. We ensure your organization meets GDPR, HIPAA, SOX, and other critical compliance standards.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative overflow-hidden'>
                {/* Decorative shapes */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-neoncyan opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-neoncyan opacity-20 rounded-lg rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-neoncyan to-transparent opacity-15 rounded-full translate-x-20 translate-y-20"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-neoncyan opacity-30 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-24 h-1 bg-neoncyan opacity-20 -translate-x-12"></div>

                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-neoncyan text-lg tracking-widest'>CYBERSECURITY AGENCY</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Securing your digital future.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32 gap-y-8 items-stretch'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='aboutus-card glass-card hover:glass-card-hover rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 group relative transition-all duration-500 flex flex-col h-full min-h-[450px] overflow-hidden'>
                            {/* Glass reflection */}
                            <div className="glass-reflection"></div>

                            {/* Subtle accent line */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neoncyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <h4 className='text-4xl font-semibold text-darkpurple mb-5 group-hover:text-darkpurple transition-colors duration-300 flex-shrink-0'>{item.heading}</h4>
                            <div className="relative mb-5 flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-neoncyan/20 to-neoncyan/10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    {i === 0 && (
                                        // Mission - Shield with target
                                        <svg width="48" height="48" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan">
                                            <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" fill="currentColor" opacity="0.2" />
                                            <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        // Security Services - Lock with gear
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan">
                                            <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" opacity="0.2" />
                                            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 11V7C8 4.79 9.79 3 12 3S16 4.79 16 7V11" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="12" cy="16" r="2" fill="currentColor" />
                                            <path d="M14 16L15 15M10 16L9 15M12 14V18" stroke="currentColor" strokeWidth="1" fill="none" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        // Compliance - Document with checkmarks
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neoncyan">
                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" opacity="0.2" />
                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 12L10 14L16 8" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M8 16L10 18L16 12" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    )}
                                </div>
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neoncyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h4 className='text-lg font-normal text-darkpurple/80 group-hover:text-darkpurple mb-5 transition-colors duration-300 flex-grow'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-neoncyan text-neoncyan hover-underline flex items-center transition-colors duration-300 flex-shrink-0 mt-auto'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional floating elements */}
                <div className="aboutus-floating-elements"></div>
                <div className="aboutus-shape-1"></div>
                <div className="aboutus-shape-2"></div>
            </div>
        </div>

    )
}

export default Aboutus;