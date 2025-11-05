"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState, useEffect, useRef } from 'react'

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            const currentRef = sectionRef.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div id="faq-section" className='w-full overflow-hidden' ref={sectionRef}>
            <div className='w-full min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32 bg-faqblue faq-bg relative'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header Section */}
                    <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                        }`}>
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-4 sm:mb-6">
                            <div className="relative">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-white/70 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase">
                                FAQ
                            </span>
                        </div>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2'>
                            Frequently asked <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>questions.
                        </h2>
                    </div>
                    {/* FAQ Items */}
                    <div className={`w-full max-w-4xl mx-auto transition-all duration-1200 ease-out delay-300 ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                        }`}>
                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">What products and services does AloIT Consultants offer?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            We offer a comprehensive suite of cybersecurity and IT solutions including nIAM (Identity Access Management), nAMS (Audit Management Software), nBsuits (ERP Software), nBoard (Board Meeting Management), nERIM (Risk Management), and nISMA (Security Maturity Assessment). Our services include penetration testing, compliance auditing, security consulting, and 24/7 monitoring.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">How does nAMS help with audit management and compliance?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            nAMS (Audit Management Software) streamlines your entire audit process with automated workflows, compliance tracking, and comprehensive reporting. It helps organizations meet GDPR, HIPAA, SOX, PCI DSS, and ISO 27001 requirements through automated evidence collection, risk assessment tools, and real-time compliance dashboards that ensure you&apos;re always audit-ready.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">How does nIAM enhance identity and access management?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            nIAM provides comprehensive identity and access management with Single Sign-On (SSO), Multi-Factor Authentication, automated user provisioning, and role-based access control. It ensures secure authentication, streamlines user lifecycle management, and provides detailed access governance to protect your organization from unauthorized access while improving user experience.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">What makes nERIM different from other risk management solutions?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            nERIM (Enterprise Risk Management) offers real-time risk monitoring, automated risk identification, and intelligent mitigation planning. Unlike traditional solutions, it provides predictive risk analytics, integrated compliance management, and customizable risk reporting dashboards that give you complete visibility into your organization&apos;s risk landscape with actionable insights.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">How does nISMA assess our security maturity?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            nISMA (Information Security Maturity Assessment) evaluates your cybersecurity posture through comprehensive vulnerability assessments, compliance gap analysis, and security maturity scoring. It provides detailed improvement roadmaps, benchmark reporting against industry standards, and prioritized recommendations to enhance your security framework systematically.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 mb-3 sm:mb-4 lg:mb-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">Can nBoard integrate with our existing governance systems?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            Yes, nBoard (Board Meeting Management) is designed for seamless integration with existing governance systems. It supports secure document sharing, meeting scheduling, digital voting, and automated minutes generation. The platform integrates with popular calendar systems, document management tools, and provides mobile access for board members while maintaining enterprise-grade security.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                        <div className="w-full rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-4 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-start rounded-lg px-2 sm:px-4 py-2 text-left text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hover:bg-neoncyan/5 transition-colors duration-200">
                                            <span className="pr-4">What implementation support and training do you provide?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-4 w-4 sm:h-5 sm:w-5 text-neoncyan flex-shrink-0 mt-1 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-2 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-black font-normal opacity-70 leading-relaxed">
                                            We provide end-to-end implementation support including dedicated project managers, technical specialists, and comprehensive training programs. Our services include system configuration, data migration, user training, and ongoing support. We typically deploy solutions within 2-8 weeks with 24/7 support for critical issues and regular security awareness training for your team.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;