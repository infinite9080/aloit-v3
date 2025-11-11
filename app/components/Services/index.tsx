"use client"
import { useState, useEffect, useRef } from 'react'

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);
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
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const services = [
        {
            title: "Penetration Testing",
            subtitle: "Offensive Security",
            description: "Simulate real-world attacks to identify vulnerabilities before malicious actors do. Our certified ethical hackers use advanced techniques to test your defenses.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            features: ["Web Application Testing", "Network Penetration", "API Security Testing", "Mobile App Security", "Social Engineering", "Wireless Security"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Security Audits & Compliance",
            subtitle: "Regulatory Compliance",
            description: "Comprehensive security audits aligned with industry standards. Ensure your organization meets ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS requirements.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            features: ["ISO 27001 Audit", "SOC 2 Compliance", "GDPR Assessment", "HIPAA Compliance", "PCI DSS Audit", "Risk Assessment"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Threat Intelligence & Monitoring",
            subtitle: "24/7 Protection",
            description: "Real-time threat detection and response with advanced SIEM solutions. Stay ahead of emerging threats with our security operations center.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            features: ["24/7 SOC Monitoring", "Threat Detection", "Incident Response", "SIEM Implementation", "Threat Hunting", "Security Analytics"],
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Security Awareness Training",
            subtitle: "Human Firewall",
            description: "Transform your employees into your first line of defense. Interactive training programs with simulated phishing campaigns and security best practices.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            features: ["Phishing Simulations", "Security Workshops", "Awareness Campaigns", "Policy Training", "Incident Reporting", "Best Practices"],
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Identity & Access Management",
            subtitle: "Zero Trust Security",
            description: "Implement robust IAM solutions with single sign-on, multi-factor authentication, and role-based access controls to secure your digital assets.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            features: ["Single Sign-On", "Multi-Factor Auth", "Access Control", "User Provisioning", "Identity Governance", "Privileged Access"],
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Risk Management",
            subtitle: "Enterprise Protection",
            description: "Comprehensive enterprise risk management with vulnerability assessments, risk analysis, and strategic mitigation planning for your organization.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            features: ["Risk Assessment", "Vulnerability Management", "Compliance Tracking", "Business Continuity", "Disaster Recovery", "Security Metrics"],
            color: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <section className="pt-20 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-neoncyan/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-neoncyan/10 border border-neoncyan/20 rounded-full px-6 py-2 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neoncyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neoncyan"></span>
                        </span>
                        <span className="text-sm font-bold text-neoncyan tracking-wider uppercase">Our Services</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6">
                        Comprehensive Cybersecurity
                        <br />
                        <span className="bg-gradient-to-r from-neoncyan via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h1>
                    <p className="text-xl text-lightblack max-w-3xl mx-auto leading-relaxed">
                        Protect your business with enterprise-grade security services tailored to your needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveService(idx)}
                            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${activeService === idx ? 'ring-2 ring-neoncyan scale-105' : ''}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                            
                            {/* Icon */}
                            <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <span className="text-sm font-bold text-neoncyan uppercase tracking-wider">{service.subtitle}</span>
                                <h3 className="text-2xl font-bold text-black mt-2 mb-4 group-hover:text-neoncyan transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-lightblack mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-neoncyan flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-lightblack">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center gap-2 text-neoncyan font-bold group-hover:gap-4 transition-all duration-300">
                                    <span>Learn More</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {[
                        { number: '15+', label: 'Years Experience' },
                        { number: '99.9%', label: 'Success Rate' },
                        { number: '24/7', label: 'Support Available' },
                        { number: '100%', label: 'Client Satisfaction' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-black bg-gradient-to-r from-neoncyan to-blue-600 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-lightblack font-semibold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-neoncyan via-blue-600 to-purple-600"></div>
                    <div className="relative p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            Ready to Secure Your Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Get a free security assessment and discover how we can protect your organization
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-neoncyan font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                                Schedule Consultation
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
