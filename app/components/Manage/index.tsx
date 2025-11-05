"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

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
        landingPage: "/products/niam"
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
        landingPage: "/products/nams"
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
        landingPage: "/products/nbsuits"
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

                {/* Products Grid */}
                <div className={`manage-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    {products.map((product, i) => (
                        <div 
                            className={`product-card bg-white shadow-lg hover:shadow-xl rounded-2xl sm:rounded-3xl text-center p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group border border-gray-100 hover:border-neoncyan/20 ${isVisible
                                ? 'opacity-100 transform scale-100'
                                : 'opacity-0 transform scale-95'
                                }`}
                            style={{ transitionDelay: `${i * 150 + 600}ms` }}
                            key={i}
                        >

                            {/* Product Logo */}
                            <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-lightgrey rounded-xl sm:rounded-2xl group-hover:bg-neoncyan/5 transition-colors duration-300'>
                                <Image
                                    src={product.logo}
                                    alt={product.name}
                                    width={60}
                                    height={60}
                                    className="object-contain max-w-full max-h-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Product Name */}
                            <h4 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-neoncyan group-hover:text-darkpurple transition-colors duration-300'>{product.name}</h4>
                            <h5 className='text-sm sm:text-base lg:text-lg font-medium text-darkgrey mb-3 sm:mb-4 leading-tight'>{product.fullName}</h5>

                            {/* Description */}
                            <p className='text-xs sm:text-sm text-darkgrey mb-4 sm:mb-6 leading-relaxed group-hover:text-darkgrey/90 transition-colors duration-300'>{product.description}</p>

                            {/* Features List */}
                            <div className='product-features text-left mb-4 sm:mb-6'>
                                <h6 className='text-xs sm:text-sm font-bold text-darkpurple mb-2 sm:mb-3 text-center'>Key Features:</h6>
                                <div className="space-y-1 sm:space-y-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className='flex items-start gap-2'>
                                            <Image src="/images/manage/right.svg" alt="check" width={10} height={10} className="sm:w-3 sm:h-3 mt-0.5 flex-shrink-0" />
                                            <span className='text-xs sm:text-xs text-darkgrey leading-tight'>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Landing Page Button */}
                            <button
                                className='text-xs sm:text-sm font-bold text-white bg-neoncyan hover:bg-darkpurple hover:scale-105 rounded-full py-2 sm:py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto'
                                onClick={() => window.open(product.landingPage, '_blank')}
                            >
                                View Product Details
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ProductDeepDive;
