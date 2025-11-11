"use client"
import Link from "next/link";

export default function OurMotto() {
    return (
        <div className="min-h-screen bg-white pt-20 pb-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 mb-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-darkpurple mb-4">
                        Our Motto
                    </h1>
                    <p className="text-lg text-darkpurple/70">
                        Your Trusted Partner in Digital Transformation
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8">
                        
                        <div className="bg-gradient-to-r from-neoncyan/10 to-neoncyan/5 rounded-2xl p-8 mb-12 border-l-4 border-neoncyan">
                            <p className="text-2xl sm:text-3xl font-semibold text-darkpurple italic text-center">
                                "Your Trusted Partner in Digital Transformation"
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">What It Means</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                Our motto encapsulates the essence of our relationship with every client. We're not just a service provider—we're a partner invested in your success, committed to walking alongside you through every step of your digital transformation journey.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">The Three Pillars</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Trust</h3>
                                    <p className="text-darkpurple/80 mb-4">
                                        Trust is the foundation of everything we do. We earn it through:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                        <li>Transparent communication and honest advice</li>
                                        <li>Proven track record of successful implementations</li>
                                        <li>Unwavering commitment to data security and confidentiality</li>
                                        <li>Consistent delivery on our promises</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Partnership</h3>
                                    <p className="text-darkpurple/80 mb-4">
                                        We believe in true collaboration, which means:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                        <li>Understanding your unique business challenges and goals</li>
                                        <li>Tailoring solutions to fit your specific needs</li>
                                        <li>Being available when you need us most</li>
                                        <li>Celebrating your successes as our own</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Digital Transformation</h3>
                                    <p className="text-darkpurple/80 mb-4">
                                        We guide you through comprehensive transformation by:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                        <li>Modernizing legacy systems with cutting-edge solutions</li>
                                        <li>Implementing security-first approaches to innovation</li>
                                        <li>Ensuring compliance while enabling growth</li>
                                        <li>Building resilient infrastructures for the future</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">Living Our Motto</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                Every interaction, every solution, and every decision we make is guided by this motto. We measure our success not just by the systems we implement, but by the lasting relationships we build and the transformative impact we create for our clients.
                            </p>
                            <p className="text-darkpurple/80 leading-relaxed">
                                When you choose us, you're not just selecting a vendor—you're gaining a dedicated partner who is genuinely invested in your digital transformation success story.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
