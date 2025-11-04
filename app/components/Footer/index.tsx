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
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-1'>
                        {/* Logo */}
                        <div className="mb-6">
                            <Link href="/" className="inline-block">
                                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Image
                                        src="/logo.png"
                                        alt="Company Logo"
                                        width={120}
                                        height={80}
                                        className="transition-opacity duration-300 hover:opacity-80"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Company Description */}
                        <p className="text-gray-300 text-white leading-relaxed mb-8 max-w-sm">
                            AloIT Consultant - Leading IT solutions provider, delivering innovative technology consulting and digital transformation services.
                        </p>

                        {/* Contact Information */}
                        <div className="mb-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-white text-sm">+880 1711 604329</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-white text-sm">info@aloitconsultant.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-neoncyan" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white text-sm">House#22, Road#12, Sector#14, Uttar Model Town, Dhaka-1230, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5 text-white hover:text-neoncyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                            </div>
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
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@{currentYear} - All Rights Reserved by <Link href="/" target="_blank">AloIT Consultant</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/privacy-policy">
                                <h3 className="text-offwhite pr-6 hover:text-neoncyan transition-colors duration-300">Privacy policy</h3>
                            </Link>
                            <Link href="/terms-conditions">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer hover:text-neoncyan transition-colors duration-300">Terms & conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
