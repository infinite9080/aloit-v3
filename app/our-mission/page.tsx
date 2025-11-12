"use client"
import Link from "next/link";

export default function OurMission() {
    return (
        <div className="min-h-screen bg-white pt-20 pb-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 mb-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-darkpurple mb-4">
                        Our Mission
                    </h1>
                    <p className="text-lg text-darkpurple/70">
                        Empowering Enterprises Through Innovation
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8">
                        <p className="text-xl text-darkpurple/80 leading-relaxed mb-6">
                            To provide enterprises with innovative SaaS implementation and consultancy services that strengthen information security, simplify compliance, and optimize operational efficiency.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">What Drives Us</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                In today&apos;s rapidly evolving digital landscape, organizations face unprecedented challenges in securing their data, maintaining compliance, and ensuring business continuity. Our mission is rooted in the belief that every enterprise deserves access to world-class security and compliance solutions, regardless of their size or industry.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">Our Commitment</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Innovation First</h3>
                                    <p className="text-darkpurple/80">
                                        We continuously explore and implement cutting-edge technologies to deliver solutions that not only meet today&apos;s challenges but anticipate tomorrow&apos;s needs.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Security Excellence</h3>
                                    <p className="text-darkpurple/80">
                                        We prioritize robust information security frameworks that protect your most valuable assets while enabling seamless business operations.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Simplified Compliance</h3>
                                    <p className="text-darkpurple/80">
                                        We transform complex regulatory requirements into manageable processes, ensuring your organization stays compliant without compromising agility.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Operational Excellence</h3>
                                    <p className="text-darkpurple/80">
                                        We optimize your workflows and processes to maximize efficiency, reduce costs, and empower your teams to focus on what matters most.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">Making a Difference</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                Every day, we work alongside our clients to build resilient, secure, and compliant digital infrastructures. Our mission extends beyond technology implementation—we&apos;re dedicated to empowering organizations with the knowledge, tools, and confidence they need to thrive in an increasingly connected world.
                            </p>
                            <p className="text-darkpurple/80 leading-relaxed">
                                Through strategic consultancy, hands-on implementation, and ongoing support, we help businesses transform their security and compliance challenges into competitive advantages.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
