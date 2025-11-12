"use client"
import Link from "next/link";

export default function OurVision() {
    return (
        <div className="min-h-screen bg-white pt-20 pb-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 mb-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-darkpurple mb-4">
                        Our Vision
                    </h1>
                    <p className="text-lg text-darkpurple/70">
                        Leading South Asia&apos;s Digital Security Future
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8">
                        
                        <p className="text-xl text-darkpurple/80 leading-relaxed mb-6">
                            To become South Asia&apos;s most reliable partner for digital security and enterprise transformation, enabling every organization to operate with confidence, compliance, and continuity in a connected world.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">Our Aspirations</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                We envision a future where businesses across South Asia can embrace digital transformation without fear, where security and compliance are enablers rather than obstacles, and where every organization—from startups to enterprises—has access to world-class solutions that protect and empower them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">The Future We&apos;re Building</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Regional Leadership</h3>
                                    <p className="text-darkpurple/80">
                                        We aim to be the go-to partner for organizations across South Asia seeking to strengthen their digital security posture and achieve operational excellence. Our goal is to set the standard for quality, reliability, and innovation in the region.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Confidence Through Security</h3>
                                    <p className="text-darkpurple/80">
                                        We believe every organization should operate with complete confidence in their digital infrastructure. Our vision includes creating security frameworks so robust and intuitive that businesses can focus entirely on growth and innovation.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Seamless Compliance</h3>
                                    <p className="text-darkpurple/80">
                                        We envision a world where compliance is no longer a burden but a seamless part of business operations. Through intelligent automation and expert guidance, we&apos;re making regulatory adherence effortless and efficient.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-darkpurple mb-3">Business Continuity</h3>
                                    <p className="text-darkpurple/80">
                                        In an increasingly unpredictable world, we&apos;re committed to ensuring that businesses can maintain operations regardless of challenges. Our vision includes building resilient systems that guarantee continuity and minimize disruption.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">A Connected World</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                As the world becomes more interconnected, the challenges of security, compliance, and operational efficiency grow more complex. Our vision acknowledges this reality and embraces it as an opportunity to innovate and lead.
                            </p>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                We&apos;re building solutions that not only address today&apos;s challenges but anticipate tomorrow&apos;s needs. Through continuous innovation, strategic partnerships, and unwavering commitment to excellence, we&apos;re creating a future where digital transformation is accessible, secure, and sustainable for all.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">Join Us on This Journey</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                Our vision is ambitious, but it&apos;s grounded in the real needs of businesses across South Asia. Every client we serve, every solution we implement, and every challenge we overcome brings us one step closer to realizing this vision. Together, we&apos;re building a more secure, compliant, and resilient digital future.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
