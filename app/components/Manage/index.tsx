"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { AnimatedTabs } from '../AnimatedTabs';

const products = [
    {
        name: "nIAM",
        fullName: "Identity Access Management",
        logo: "/niam.svg",
        description: "Comprehensive identity and access management solution that provides secure authentication, authorization, and user lifecycle management for your organization.",
        features: [
            "Single Sign-On (SSO)",
            "Multi-Factor Authentication",
            "User Provisioning & Deprovisioning",
            "Role-Based Access Control",
            "Identity Governance",
            "Compliance Reporting"
        ],
        landingPage: "https://niam.nnur.ca/"
    },
    {
        name: "nAMS",
        fullName: "Audit Management Software",
        logo: "/nams.png",
        description: "Streamline your audit processes with automated workflows, compliance tracking, and comprehensive reporting capabilities for regulatory requirements.",
        features: [
            "Automated Audit Workflows",
            "Compliance Tracking",
            "Risk Assessment Tools",
            "Evidence Management",
            "Regulatory Reporting",
            "Audit Trail Documentation"
        ],
        landingPage: "https://nams.nnur.ca/"
    },
    {
        name: "nBsuits",
        fullName: "Enterprise Resource Planning",
        logo: "/nbsuits.png",
        description: "Integrated ERP solution that manages your business operations, from finance and HR to supply chain and customer relationships in one unified platform.",
        features: [
            "Financial Management",
            "Human Resources",
            "Supply Chain Management",
            "Customer Relationship Management",
            "Business Intelligence",
            "Real-time Analytics"
        ],
        landingPage: "https://nbsuits.com/"
    },
    {
        name: "nISMA",
        fullName: "Information Security Maturity Assessment",
        logo: "/nisma.png",
        description: "Advanced information security maturity assessment tool that evaluates your cybersecurity posture and provides actionable improvement recommendations.",
        features: [
            "Security Maturity Scoring",
            "Vulnerability Assessment",
            "Compliance Gap Analysis",
            "Risk Prioritization",
            "Improvement Roadmaps",
            "Benchmark Reporting"
        ],
        landingPage: "/products/nisma"
    },
    {
        name: "nBoard",
        fullName: "Board Meeting Management",
        logo: "/nboard.png",
        description: "Digital boardroom solution that facilitates secure board meetings, document management, and governance processes with enterprise-grade security.",
        features: [
            "Secure Document Sharing",
            "Meeting Scheduling & Management",
            "Digital Voting & Approvals",
            "Governance Workflows",
            "Minutes & Action Items",
            "Mobile Board Portal"
        ],
        landingPage: "/products/nboard"
    },
    {
        name: "nERIM",
        fullName: "Enterprise Risk Management",
        logo: "/nerim.png",
        description: "Comprehensive enterprise risk management platform that identifies, assesses, and mitigates risks across your organization with real-time monitoring.",
        features: [
            "Risk Identification & Assessment",
            "Real-time Risk Monitoring",
            "Mitigation Planning",
            "Compliance Management",
            "Risk Reporting & Analytics",
            "Incident Management"
        ],
        landingPage: "/products/nerim"
    }
];

const ProductDeepDive = () => {
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
        <div id="products-section" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50 overflow-hidden relative" ref={sectionRef}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border border-neoncyan/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10'>

                {/* Section Title - Matching Other Sections */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black my-1 sm:my-2">Product Deep Dive.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-50 lg:mr-12 my-1 sm:my-2">Insights.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black opacity-25 lg:mr-6 my-1 sm:my-2">Benefits.</h3>
                </div>

                {/* Benefits Section */}
                <div className={`product-benefits flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1200 ease-out delay-200 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className='flex items-center gap-3 sm:gap-4 justify-center'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={16} height={12} className="sm:w-5 sm:h-4 flex-shrink-0" />
                        <h4 className='text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left'>Enterprise-Grade Security</h4>
                    </div>
                    <div className='flex items-center gap-3 sm:gap-4 justify-center'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={16} height={12} className="sm:w-5 sm:h-4 flex-shrink-0" />
                        <h4 className='text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left'>24/7 Support & Maintenance</h4>
                    </div>
                    <div className='flex items-center gap-3 sm:gap-4 justify-center'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={16} height={12} className="sm:w-5 sm:h-4 flex-shrink-0" />
                        <h4 className='text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left'>Scalable Solutions</h4>
                    </div>
                </div>

                {/* Products Tabs */}
                <div className={`flex justify-center transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <AnimatedTabs
                        tabs={products.map((product) => ({
                            id: product.name,
                            label: product.name,
                            content: (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full">
                                    {/* Product Logo and Info */}
                                    <div className="flex flex-col items-center justify-center">
                                        <div className='flex items-center justify-center w-32 h-32 mb-6 bg-white/10 rounded-2xl'>
                                            <Image
                                                src={product.logo}
                                                alt={product.name}
                                                width={100}
                                                height={100}
                                                className="object-contain max-w-full max-h-full"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2 text-white mt-0 !m-0">
                                            {product.name}
                                        </h2>
                                        <h3 className="text-lg font-medium text-gray-300 mb-4">
                                            {product.fullName}
                                        </h3>
                                        <button
                                            className='text-sm font-bold text-white bg-neoncyan hover:bg-darkpurple hover:scale-105 rounded-full py-3 px-8 transition-all duration-300 shadow-md hover:shadow-lg'
                                            onClick={() => window.open(product.landingPage, '_blank')}
                                        >
                                            View Product Details
                                        </button>
                                    </div>

                                    {/* Description and Features */}
                                    <div className="flex flex-col gap-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-3">About</h4>
                                            <p className="text-sm text-gray-200 leading-relaxed">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                                            <div className="space-y-2">
                                                {product.features.map((feature, index) => (
                                                    <div key={index} className='flex items-start gap-3'>
                                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className='text-sm text-gray-200 leading-tight'>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ),
                        }))}
                    />
                </div>

            </div>
        </div>
    );
}

export default ProductDeepDive;
