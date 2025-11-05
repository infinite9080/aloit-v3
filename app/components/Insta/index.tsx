"use client"
import Image from "next/image";

// Team member data
const teamMembers = [
    {
        name: "Mohammad Arif Rahim",
        title: "Head of Operations",
        image: "/1636123774508-removebg-preview.png",
        linkedin: "https://www.linkedin.com/in/mohammad-arif-rahim/"
    },
    {
        name: "Zaman Asaduzzaman",
        title: "HR & Admin",
        image: "/Generated_Image_November_05__2025_-_3_32PM-removebg-preview.png",
        linkedin: "https://www.linkedin.com/in/zaman-asaduzzaman-1530852a5/"
    },
    {
        name: "Mohammed Shafat Patvary",
        title: "CEO & Founder",
        image: "/CEO-Mohammed-Shafat-Patvary-removebg-preview.png",
        linkedin: "https://www.linkedin.com/in/sifatullah/"
    },
    {
        name: "Firoz Haider Khan",
        title: "Director and Co-Founder",
        image: "/Firoz-Haider-Khan-removebg-preview.png",
        linkedin: "https://www.linkedin.com/in/firoz-haider-khan-15a56922/"
    }
];

const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {teamMembers.map((member, index) => (
                    <div key={index} className="mx-auto relative w-[306px] h-[306px] group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <Image
                            src={member.image}
                            width={306}
                            height={306}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Hover Overlay with Name and Title */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <h3 className="text-white font-bold text-lg mb-3 text-shadow-lg">{member.name}</h3>
                                <p className="text-white text-base mb-6 font-medium">{member.title}</p>

                                {/* LinkedIn Button */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    View LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Insta
