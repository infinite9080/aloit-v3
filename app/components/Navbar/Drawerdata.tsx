import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About', href: '#aboutus-section', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'Products', href: '#products-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-1 py-6">
                <nav className="space-y-2 px-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-darkpurple font-semibold hover:bg-neoncyan/10 hover:text-neoncyan rounded-xl transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {/* Bottom section with contact button */}
            <div className="px-6 py-6 border-t border-neoncyan/10">
                <button className="w-full bg-neoncyan text-white font-semibold py-3 px-4 rounded-xl hover:bg-darkpurple transition-all duration-300">
                    Contact Us
                </button>
                
                {/* Trust indicators */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-darkpurple/60">
                        Trusted by 500+ enterprises
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Data;
