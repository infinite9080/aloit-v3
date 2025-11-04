import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    "w-80 max-w-sm left-0 absolute bg-white/95 backdrop-blur-lg h-screen shadow-2xl delay-400 duration-500 ease-in-out transition-all transform border-r border-neoncyan/20 top-0 " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative w-full flex flex-col h-screen">
                    <header className="px-6 py-6 flex items-center justify-between border-b border-neoncyan/10 flex-shrink-0">

                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className='text-xl font-bold text-darkpurple'>
                                Your Logo
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-xl bg-neoncyan/10 text-darkpurple hover:bg-neoncyan/20 transition-colors duration-300"
                        >
                            <XMarkIcon className="block h-6 w-6" />
                        </button>
                    </header>
                    <div className="flex-1 overflow-y-auto pb-6">
                        {children}
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
