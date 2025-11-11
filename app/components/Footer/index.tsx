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
        <div className="bg-gradient-to-br from-gray-50 to-white -mt-16" id="first-section">
            <div className="mx-auto max-w-2xl pt-20 pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-16 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-1'>
                        {/* Logo */}
                        <div className="mb-3">
                            <Link href="/" className="inline-block">
                                <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <Image
                                        src="/logo.png"
                                        alt="Company Logo"
                                        width={90}
                                        height={50}
                                        className="transition-opacity duration-300 hover:opacity-80"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Company Description */}
                        <p className="text-gray-700 leading-snug mb-3 max-w-sm text-xs">
                            AloIT Consultant - Leading IT solutions provider, delivering innovative technology consulting and digital transformation services.
                        </p>

                        {/* Contact Information */}
                        <div className="mb-3 space-y-1.5">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-neoncyan flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-700 text-xs">+880 1711 604329</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-neoncyan flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-700 text-xs">info@aloitconsultant.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-neoncyan flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 text-xs">House#22, Road#12, Sector#14, Uttar Model Town, Dhaka-1230, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className='flex gap-4'>
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-neoncyan transition-all duration-300 group">
                                <svg className="w-5 h-5 text-darkpurple group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-neoncyan transition-all duration-300 group">
                                <svg className="w-5 h-5 text-darkpurple group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-neoncyan transition-all duration-300 group">
                                <svg className="w-5 h-5 text-darkpurple group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
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

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-3 pb-3 px-4 sm:px-6 lg:px-4">
                    <div className="mt-1 grid grid-cols-1 gap-y-3 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-gray-600 text-sm'>@{currentYear} - All Rights Reserved by <Link href="/" target="_blank" className="text-neoncyan hover:text-darkpurple transition-colors">AloIT Consultant</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/privacy-policy">
                                <h3 className="text-gray-600 text-sm pr-6 hover:text-neoncyan transition-colors duration-300">Privacy policy</h3>
                            </Link>
                            <Link href="/terms-conditions">
                                <h3 className="text-gray-600 text-sm pl-6 hover:text-neoncyan transition-colors duration-300">Terms & conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
