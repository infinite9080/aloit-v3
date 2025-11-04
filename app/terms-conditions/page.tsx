import Link from 'next/link';

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-darkpurple mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-darkpurple/70">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">1. Acceptance of Terms</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                By engaging AloIT Consultant for IT consulting services or accessing our website,
                                you accept and agree to be bound by these terms and conditions. If you do not agree
                                to these terms, please do not use our services or website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">2. Service Description</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                AloIT Consultant provides comprehensive IT consulting and digital transformation services including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>IT strategy development and technology roadmapping</li>
                                <li>Digital transformation consulting</li>
                                <li>Software development and system integration</li>
                                <li>Cloud migration and infrastructure optimization</li>
                                <li>Business process automation</li>
                                <li>IT project management and implementation</li>
                                <li>Technology training and support services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">3. Client Responsibilities</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                As a client of AloIT Consultant, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>Provide accurate and complete project requirements and business information</li>
                                <li>Ensure timely access to necessary systems, data, and personnel</li>
                                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                                <li>Maintain confidentiality of proprietary consulting methodologies</li>
                                <li>Provide prompt feedback and approvals as required for project progress</li>
                                <li>Use our consulting services for legitimate business purposes only</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">4. Service Delivery</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                AloIT Consultant is committed to delivering high-quality IT consulting services within
                                agreed timelines. Project schedules and deliverables will be defined in separate
                                consulting agreements. We will communicate any potential delays or changes to project
                                scope promptly and work with clients to find suitable solutions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">5. Confidentiality and Data Protection</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                AloIT Consultant maintains strict confidentiality regarding all client information,
                                business processes, and proprietary data. We implement robust security measures
                                including secure communications, encrypted data storage, and access controls.
                                All client data is handled in accordance with applicable data protection laws
                                and industry best practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">6. Intellectual Property</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                All content, features, and functionality of our services are owned by us and are
                                protected by international copyright, trademark, and other intellectual property laws.
                                You may not reproduce, distribute, or create derivative works without our express
                                written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">7. Limitation of Liability</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                To the maximum extent permitted by law, we shall not be liable for any indirect,
                                incidental, special, consequential, or punitive damages, including without limitation,
                                loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">8. Termination</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                We may terminate or suspend your account and access to our services immediately,
                                without prior notice, for conduct that we believe violates these Terms or is harmful
                                to other users, us, or third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">9. Governing Law</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                These Terms shall be interpreted and governed by the laws of Bangladesh.
                                Any disputes arising from these terms or our consulting services shall be
                                resolved through the appropriate legal channels in Dhaka, Bangladesh.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">10. Contact Information</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                If you have any questions about these Terms & Conditions, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-darkpurple font-semibold">AloIT Consultant</p>
                                <p className="text-darkpurple font-semibold">Email: info@aloitconsultant.com</p>
                                <p className="text-darkpurple font-semibold">Phone: +880 1711 604329</p>
                                <p className="text-darkpurple font-semibold">Address: House#22, Road#12, Sector#14, Uttar Model Town, Dhaka-1230, Bangladesh</p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-neoncyan text-white font-semibold py-3 px-6 rounded-xl hover:bg-darkpurple transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}