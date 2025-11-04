"use client";
import React from "react";
import Image from "next/image";

const ClientLogos = () => {
    // Sample client logos - you can replace these with your actual client logos
    const clientLogos = [
        {
            name: "Microsoft",
            logo: "/logos/microsoft.svg", // You'll need to add these logo files
            width: 120,
            height: 40
        },
        {
            name: "Google",
            logo: "/logos/google.svg",
            width: 100,
            height: 40
        },
        {
            name: "Amazon",
            logo: "/logos/amazon.svg",
            width: 100,
            height: 40
        },
        {
            name: "IBM",
            logo: "/logos/ibm.svg",
            width: 80,
            height: 40
        },
        {
            name: "Oracle",
            logo: "/logos/oracle.svg",
            width: 100,
            height: 40
        },
        {
            name: "Cisco",
            logo: "/logos/cisco.svg",
            width: 100,
            height: 40
        }
    ];

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Trusted by text */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-darkpurple/60 tracking-wide uppercase">
                        Trusted by leading organizations
                    </p>
                </div>

                {/* Client logos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {clientLogos.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <div className="w-24 h-12 flex items-center justify-center">
                                {/* Placeholder for actual logos */}
                                <div className="w-full h-8 bg-darkpurple/20 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-darkpurple/60">
                                        {client.name}
                                    </span>
                                </div>
                                {/* Uncomment when you have actual logo files */}
                                {/* <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={client.width}
                                    height={client.height}
                                    className="max-w-full max-h-full object-contain"
                                /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;