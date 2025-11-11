"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Contactusform from './Contactus';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About', href: '/our-team', current: false },
    { name: 'Services', href: '/our-services', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'FAQ', href: '/faq', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled
            ? 'bg-transparent mt-3'
            : 'bg-transparent mt-3'
            }`}>
            <>
                <div className={`transition-all duration-500 ease-in-out ${isScrolled
                    ? 'mx-auto max-w-7xl px-4 lg:px-8 transform scale-95'
                    : 'mx-auto max-w-7xl px-4 lg:px-8 transform scale-100'
                    }`}>
                    <div className={`transition-all duration-500 ease-in-out ${isScrolled
                        ? 'bg-white/70 backdrop-blur-xl shadow-2xl rounded-full border border-white/30'
                        : 'bg-white/60 backdrop-blur-xl shadow-xl rounded-full border border-white/30'
                        }`}>
                        <div className={`relative flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'h-12 py-2' : 'h-16 py-3'
                            }`}>

                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/" className='group'>
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={60}
                                        height={50}
                                        className="ml-5 transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                </Link>
                            </div>

                            {/* NAVIGATION LINKS */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative px-4 py-2 text-darkpurple font-semibold hover:text-neoncyan transition-all duration-300 group"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <div className="absolute inset-0 bg-neoncyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-neoncyan group-hover:w-8 transition-all duration-300"></div>
                                    </Link>
                                ))}
                            </div>

                            {/* CTA BUTTON */}
                            <div className="mr-5 hidden lg:flex items-center">
                                <Contactusform />
                            </div>

                            {/* MOBILE MENU BUTTON */}
                            <div className='flex lg:hidden relative mr-5'>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 rounded-xl bg-neoncyan/10 text-darkpurple hover:bg-neoncyan/20 transition-colors duration-300"
                                >
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* MOBILE DROPDOWN MENU */}
                                {isOpen && (
                                    <div className="absolute top-12 right-0 w-64 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 z-50">
                                        <div className="py-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-6 py-3 text-darkpurple font-semibold hover:bg-neoncyan/10 hover:text-neoncyan transition-colors duration-300"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                            <div className="border-t border-neoncyan/10 mt-2 pt-2 px-6">
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="w-full bg-neoncyan text-white font-semibold py-2 px-4 rounded-xl hover:bg-darkpurple transition-colors duration-300"
                                                >
                                                    Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
