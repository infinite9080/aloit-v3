"use client"
import Image from 'next/image';

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
    return (
        <div id="products-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>

                {/* Section Title - Matching Other Sections */}
                <div className="text-center mb-16">
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Product Deep Dive.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Product Deep Dive.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Product Deep Dive.</h3>
                </div>

                {/* Benefits Section */}
                <div className='md:flex md:justify-around mt-20 mb-16'>
                    <div className='flex gap-5 justify-center md:justify-start mb-4 md:mb-0'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Enterprise-Grade Security</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start mb-4 md:mb-0'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>24/7 Support & Maintenance</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Scalable Solutions</h4>
                    </div>
                </div>

                {/* Products Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-8'>
                    {products.map((product, i) => (
                        <div className='bg-white shadow-xl rounded-3xl text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2' key={i}>

                            {/* Product Logo */}
                            <div className='flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-lightgrey rounded-2xl'>
                                <Image
                                    src={product.logo}
                                    alt={product.name}
                                    width={80}
                                    height={80}
                                    className="object-contain max-w-full max-h-full"
                                />
                            </div>

                            {/* Product Name */}
                            <h4 className='text-3xl font-bold mb-2 text-neoncyan'>{product.name}</h4>
                            <h5 className='text-lg font-medium text-darkgrey mb-4'>{product.fullName}</h5>

                            {/* Description */}
                            <p className='text-sm text-darkgrey mb-6 leading-relaxed'>{product.description}</p>

                            {/* Features List */}
                            <div className='text-left mb-6'>
                                <h6 className='text-sm font-bold text-darkpurple mb-3 text-center'>Key Features:</h6>
                                {product.features.map((feature, index) => (
                                    <div key={index} className='flex items-center gap-2 mb-2'>
                                        <Image src="/images/manage/right.svg" alt="check" width={12} height={12} />
                                        <span className='text-xs text-darkgrey'>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Landing Page Button */}
                            <button
                                className='text-sm font-bold text-white bg-neoncyan hover:bg-blue hover:scale-105 rounded-full py-3 px-8 transition-all duration-300 shadow-md hover:shadow-lg'
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
