import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-darkpurple mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-darkpurple/70">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8">
                        
                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">1. Information We Collect</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                At AloIT Consultant, we collect information you provide when you engage our IT consulting services, 
                                request quotes, or contact us for technical support. This may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>Name, email address, phone number, and business contact information</li>
                                <li>Company details, industry type, and organizational structure</li>
                                <li>Project requirements and technical specifications</li>
                                <li>Communications regarding consulting engagements</li>
                                <li>Website usage data and consultation preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">2. How We Use Your Information</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>Provide IT consulting services and digital transformation solutions</li>
                                <li>Develop customized technology strategies for your business</li>
                                <li>Send project updates, technical recommendations, and service notifications</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Improve our consulting methodologies and service offerings</li>
                                <li>Ensure secure and reliable delivery of our IT solutions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                We do not sell, trade, or otherwise transfer your personal information to third parties 
                                without your consent, except as described in this policy. We may share information in 
                                the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>With your consent or at your direction</li>
                                <li>With service providers who assist in our operations</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and prevent fraud</li>
                                <li>In connection with a business transaction</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">4. Data Security</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                As an IT consulting firm, we understand the critical importance of data security. 
                                We implement industry-standard security measures including encrypted communications, 
                                secure data storage, access controls, and regular security audits to protect your 
                                business information and personal data from unauthorized access or disclosure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">5. Data Retention</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                We retain your personal information for as long as necessary to provide our services, 
                                comply with legal obligations, resolve disputes, and enforce our agreements. When we 
                                no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">6. Your Rights</h2>
                            <p className="text-darkpurple/80 leading-relaxed mb-4">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-darkpurple/80">
                                <li>Access and receive a copy of your personal information</li>
                                <li>Rectify inaccurate or incomplete information</li>
                                <li>Delete your personal information</li>
                                <li>Restrict or object to processing</li>
                                <li>Data portability</li>
                                <li>Withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-darkpurple mb-4">7. Contact Us</h2>
                            <p className="text-darkpurple/80 leading-relaxed">
                                If you have any questions about this Privacy Policy or our privacy practices, 
                                please contact us at:
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