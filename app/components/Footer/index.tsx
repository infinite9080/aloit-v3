import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA - COMMENTED OUT FOR FUTURE USE
// interface ProductType {
//     id: number;
//     section: string;
//     link: string[];
// }

// const products: ProductType[] = [
//     {
//         id: 1,
//         section: "Company",
//         link: ['About Us', 'Our Team', 'Careers', 'Contact'],
//     },
//     {
//         id: 2,
//         section: "Services",
//         link: ['Cybersecurity', 'Compliance', 'Risk Assessment', 'Consulting']
//     },
//     {
//         id: 3,
//         section: "Products",
//         link: ['nIAM', 'nAMS', 'nBsuits', 'nISMA']
//     },
//     {
//         id: 4,
//         section: "Resources",
//         link: ['Documentation', 'Support', 'Blog', 'Case Studies']
//     }
// ]

const footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 -mt-16 overflow-hidden" id="first-section">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 bg-neoncyan rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-darkpurple rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-20 left-20 w-32 h-32 border-2 border-neoncyan rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-darkpurple rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-neoncyan rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-darkpurple rounded-full"></div>
            </div>

            <div className="mx-auto max-w-2xl pt-12 sm:pt-16 lg:pt-20 pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative z-10">
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-16 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-1'>
                        {/* Logo */}
                        <div className="mb-4 sm:mb-6 text-center sm:text-left">
                            <Link href="/" className="inline-block group">
                                <Image
                                    src="/logo.png"
                                    alt="Company Logo"
                                    width={100}
                                    height={55}
                                    className="transition-all duration-300 group-hover:scale-105 w-20 h-auto sm:w-24 md:w-28"
                                />
                            </Link>
                        </div>

                        {/* Company Description */}
                        <p className="text-darkpurple/80 leading-relaxed mb-4 sm:mb-6 max-w-sm text-xs sm:text-sm text-center sm:text-left mx-auto sm:mx-0">
                            AloIT Consultant - Leading IT solutions provider, delivering innovative technology consulting and digital transformation services with cutting-edge cybersecurity expertise.
                        </p>

                        {/* Contact Information */}
                        <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer justify-center sm:justify-start">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neoncyan/10 to-neoncyan/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-neoncyan group-hover:to-neoncyan transition-all duration-300 shadow-sm flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neoncyan group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-darkpurple text-xs sm:text-sm font-medium group-hover:text-neoncyan transition-colors">+880 1711 604329</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer justify-center sm:justify-start">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neoncyan/10 to-neoncyan/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-neoncyan group-hover:to-neoncyan transition-all duration-300 shadow-sm flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neoncyan group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-darkpurple text-xs sm:text-sm font-medium group-hover:text-neoncyan transition-colors break-all">info@aloitconsultant.com</span>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3 group cursor-pointer justify-center sm:justify-start">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neoncyan/10 to-neoncyan/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-neoncyan group-hover:to-neoncyan transition-all duration-300 flex-shrink-0 shadow-sm">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neoncyan group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-darkpurple text-xs sm:text-sm font-medium group-hover:text-neoncyan transition-colors text-center sm:text-left">House#22, Road#12, Sector#14, Uttar Model Town, Dhaka-1230, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className='flex gap-3 sm:gap-4 justify-center sm:justify-start'>
                            <Link href="https://www.facebook.com/aloitconsultants" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-xl hover:from-[#1877F2] hover:to-[#1877F2] hover:scale-110 transition-all duration-300 group border-2 border-gray-200 hover:border-[#1877F2]">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1877F2] group-hover:text-white transition-all group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>

                            <Link href="https://www.linkedin.com/company/aloitconsultants/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-xl hover:from-[#0A66C2] hover:to-[#0A66C2] hover:scale-110 transition-all duration-300 group border-2 border-gray-200 hover:border-[#0A66C2]">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2] group-hover:text-white transition-all group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 - NAVIGATION LINKS COMMENTED OUT FOR FUTURE USE */}

                    {/* {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))} */}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl relative z-10">
                <div className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-4">
                    <div className="mt-1 grid grid-cols-1 gap-y-3 sm:gap-y-4 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center sm:text-start text-darkpurple/70 text-xs sm:text-sm'>
                                © {currentYear} - All Rights Reserved by <Link href="/" target="_blank" className="text-neoncyan hover:text-darkpurple font-semibold transition-colors duration-300">AloIT Consultant</Link>
                            </h3>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 items-center">
                            <Link href="/privacy-policy">
                                <h3 className="text-darkpurple/70 text-xs sm:text-sm hover:text-neoncyan transition-colors duration-300 hover:font-medium whitespace-nowrap">Privacy Policy</h3>
                            </Link>
                            <span className="text-darkpurple/30 hidden sm:inline">|</span>
                            <Link href="/terms-conditions">
                                <h3 className="text-darkpurple/70 text-xs sm:text-sm hover:text-neoncyan transition-colors duration-300 hover:font-medium whitespace-nowrap">Terms & Conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
