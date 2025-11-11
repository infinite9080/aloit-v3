"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsContactModalOpen(false);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsContactModalOpen(false);
    };

    const openModal = () => {
        setIsContactModalOpen(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
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

    const serviceCategories = [
        {
            title: "Core Infrastructure & Application Security",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L20 6V12C20 17.55 16.84 22.74 12 24C7.16 22.74 4 17.55 4 12V6L12 2Z" />
                </svg>
            ),
            color: "from-blue-500 to-blue-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
                        </svg>
                    ),
                    title: "Website Security",
                    image: "/web security.png",
                    description: "Protect your online presence from cyber threats with comprehensive web application security testing, vulnerability assessments, and continuous monitoring. Our expert team identifies and mitigates risks including SQL injection, XSS attacks, and CSRF vulnerabilities to keep your website secure.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                            <path d="M19 15L20.09 21.26L27 22L20.09 22.74L19 29L17.91 22.74L11 22L17.91 21.26L19 15Z" />
                        </svg>
                    ),
                    title: "API Security",
                    image: "/api security.png",
                    description: "Secure your digital interfaces and data exchanges with advanced API security testing and protection strategies. Our comprehensive API security assessments cover authentication mechanisms, authorization controls, input validation, rate limiting, and data encryption to protect against injection attacks, broken authentication, and sensitive data exposure across REST, GraphQL, and SOAP APIs.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18ZM12 8.5C10.62 8.5 9.5 9.62 9.5 11S10.62 13.5 12 13.5 14.5 12.38 14.5 11 13.38 8.5 12 8.5ZM12 15C10.34 15 9 16.34 9 18H15C15 16.34 13.66 15 12 15Z" />
                        </svg>
                    ),
                    title: "Mobile App Security",
                    image: "/mobile app security.png",
                    description: "Ensure the safety and reliability of your mobile applications across iOS and Android platforms with thorough security audits. We conduct comprehensive testing for insecure data storage, weak cryptography, improper platform usage, insecure communication, and reverse engineering vulnerabilities. Our mobile security experts analyze both native and hybrid applications to identify security flaws in authentication, session management, and data protection mechanisms.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 9L2 8H21L22 9V10C22 10.55 21.55 11 21 11V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V11C2.45 11 2 10.55 2 10V9H1ZM5 20H19V11H5V20ZM6 5H18V7H6V5ZM7 1H17V3H7V1Z" />
                        </svg>
                    ),
                    title: "Network Security",
                    image: "/network security.png",
                    description: "Proactively defend your critical IT infrastructure with comprehensive network security assessments, penetration testing, and real-time threat monitoring. We identify vulnerabilities in your network architecture and implement robust security measures to protect against unauthorized access and data breaches.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 4C18.2 4 20 5.8 20 8V10C20.6 10 21 10.4 21 11V21C21 21.6 20.6 22 20 22H4C3.4 22 3 21.6 3 21V11C3 10.4 3.4 10 4 10V8C4 5.8 5.8 4 8 4H16ZM8 6C6.9 6 6 6.9 6 8V10H18V8C18 6.9 17.1 6 16 6H8ZM12 13C13.1 13 14 13.9 14 15S13.1 17 12 17 10 16.1 10 15 10.9 13 12 13Z" />
                        </svg>
                    ),
                    title: "Active Directory Security",
                    image: "/active directory security.png",
                    description: "Fortify your organization's user management systems with advanced Active Directory security assessments and hardening. Our experts identify misconfigurations, weak permissions, privilege escalation paths, and potential attack vectors including Kerberoasting, Pass-the-Hash, and Golden Ticket attacks. We provide comprehensive recommendations for Group Policy hardening, privileged access management, and implementing least privilege principles across your domain infrastructure.",
                },
            ],
        },
        {
            title: "Threat Simulation & Realistic Testing",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            color: "from-red-500 to-red-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z" />
                            <path d="M10.29 8.44L9.5 6L8.71 8.44L6.25 9.23L8.71 10.02L9.5 12.46L10.29 10.02L12.75 9.23L10.29 8.44Z" />
                        </svg>
                    ),
                    title: "Attack Simulation",
                    image: "/Attack Simulation.png",
                    description: "Conduct realistic attack simulations using real-world scenarios to identify vulnerabilities in your systems before malicious actors can exploit them. Our comprehensive testing methodology covers multiple attack vectors and provides detailed remediation guidance.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                            <path d="M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20 4 16.41 4 12 7.59 4 12 4Z" opacity="0.3" />
                        </svg>
                    ),
                    title: "Advanced Persistent Threat Simulation",
                    image: "/Advanced Persistent Threat Simulation.png",
                    description: "Simulate sophisticated, long-term cyber threats that mimic advanced adversaries and nation-state actors. Test your organization's ability to detect and respond to complex, multi-stage attacks including initial compromise, lateral movement, privilege escalation, data exfiltration, and persistence mechanisms. Our APT simulations help validate your security operations center's detection capabilities, incident response procedures, and threat hunting effectiveness against the most sophisticated attack scenarios.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                            <path d="M18 8L16 10L18 12L20 10L18 8Z" />
                        </svg>
                    ),
                    title: "Insider Threat Detection",
                    image: "/Insider Threat Detection.png",
                    description: "Safeguard your business from internal security risks with comprehensive insider threat detection and monitoring solutions. We implement behavioral analytics, user activity monitoring, and anomaly detection systems to identify suspicious patterns indicating potential data theft, sabotage, or policy violations. Our insider threat program includes risk assessment, monitoring strategy development, and incident response planning to protect against both malicious insiders and unintentional security breaches by employees, contractors, and partners.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                        </svg>
                    ),
                    title: "Security Controls Testing",
                    image: "/Security Controls Testing.png",
                    description: "Thoroughly assess your EDR, SIEM, and defense stack against advanced threats to ensure your security controls are functioning effectively and providing adequate protection. We validate detection rules, test alert accuracy, evaluate response capabilities, and identify gaps in your security monitoring coverage. Our comprehensive testing includes firewall rule validation, IDS/IPS effectiveness, antivirus bypass techniques, and security tool configuration reviews to ensure your investments in security technology are delivering maximum value and protection.",
                },
            ],
        },
        {
            title: "AI-Enhanced Security Intelligence",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8H20V18ZM18 12L16 10V11H8V13H16V14L18 12Z" />
                </svg>
            ),
            color: "from-purple-500 to-purple-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                        </svg>
                    ),
                    title: "Intelligent Risk Profiling",
                    image: "/Intelligent Risk Profiling.png",
                    description: "Leverage advanced AI algorithms and machine learning models to conduct accurate, comprehensive risk assessments that identify potential vulnerabilities and prioritize security investments based on your organization's unique threat landscape, business requirements, and risk tolerance. Our intelligent risk profiling combines automated vulnerability scanning, threat intelligence feeds, business impact analysis, and predictive analytics to provide actionable insights and data-driven recommendations for optimizing your security posture and resource allocation.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
                            <path d="M8 12H16V14H8V12ZM8 16H13V18H8V16Z" />
                        </svg>
                    ),
                    title: "AI Policy Advisor",
                    image: "/AI Policy Advisor.png",
                    description: "Receive intelligent, data-driven guidance on cybersecurity policy creation and optimization tailored to your industry standards and regulatory requirements. Our AI-powered policy advisor analyzes your current security policies, identifies gaps and inconsistencies, and provides recommendations aligned with frameworks like NIST, ISO 27001, CIS Controls, and industry-specific regulations including GDPR, HIPAA, PCI DSS, and SOC 2. The system continuously monitors policy effectiveness and suggests updates based on emerging threats and evolving compliance requirements.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM15 16H7V14H15V16ZM17 8H7V6H17V8Z" />
                        </svg>
                    ),
                    title: "Automated Security Reports",
                    image: "/Automated Security Reports.png",
                    description: "Generate timely, clear, and actionable security insights through automated reporting systems that provide comprehensive analysis and recommendations. Our intelligent reporting platform aggregates data from multiple security tools, correlates events, identifies trends, and produces executive summaries, technical deep-dives, and compliance reports customized for different stakeholders. Automated dashboards provide real-time visibility into your security posture, vulnerability metrics, incident trends, and remediation progress with scheduled delivery and customizable alert thresholds.",
                },
            ],
        },
        {
            title: "Security Awareness & Training",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" />
                </svg>
            ),
            color: "from-green-500 to-green-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                        </svg>
                    ),
                    title: "Interactive Awareness Training",
                    image: "/Interactive Awareness Training.png",
                    description: "Deliver engaging, hands-on cybersecurity awareness sessions specifically tailored to your team's roles and responsibilities, featuring real-world scenarios and interactive learning modules to maximize retention and practical application. Our training programs cover password security, phishing recognition, social engineering tactics, secure remote work practices, data handling procedures, and incident reporting. We utilize gamification, simulated attacks, and role-based content to ensure employees at all levels understand their security responsibilities and can identify and respond to threats effectively.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12 14.5V5.5L18 10L12 14.5Z" />
                        </svg>
                    ),
                    title: "Monthly Security Insights",
                    image: "/Monthly Security Insights.png",
                    description: "Stay informed with comprehensive monthly briefings on the latest cybersecurity trends, emerging threats, and industry best practices. Our curated security insights include analysis of recent data breaches, new attack techniques, vulnerability disclosures, regulatory changes, and threat actor activities relevant to your industry. Each monthly report provides actionable recommendations, security tips, and strategic guidance to help your organization stay ahead of evolving cyber threats and maintain a proactive security posture in an ever-changing threat landscape.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                            <path d="M12 15L8 12L9.41 10.59L12 13.17L14.59 10.59L16 12L12 15Z" />
                        </svg>
                    ),
                    title: "Phishing Awareness Campaigns",
                    image: "/Phishing Awareness Campaigns.png",
                    description: "Implement comprehensive phishing awareness campaigns with simulated attacks and hands-on training to prevent social engineering attacks and strengthen your human firewall. Our campaigns include realistic phishing simulations, spear-phishing scenarios, business email compromise (BEC) exercises, and vishing attempts to test employee awareness and response. We provide detailed metrics on click rates, reporting rates, and credential submission, along with targeted remedial training for at-risk users and recognition programs for security champions.",
                },
            ],
        },
        {
            title: "Physical Security Evaluations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" />
                </svg>
            ),
            color: "from-orange-500 to-orange-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13 14 13.9 14 15 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" />
                        </svg>
                    ),
                    title: "Access Control Reviews",
                    image: "/Access Control Reviews.png",
                    description: "Conduct comprehensive evaluations of your physical security infrastructure to ensure your facilities, data centers, and office locations maintain appropriate access controls and security measures to protect against unauthorized entry and internal threats. Our physical security assessments examine badge systems, biometric readers, visitor management procedures, security camera coverage, alarm systems, and physical barriers. We identify vulnerabilities in perimeter security, tailgating risks, and gaps in access logging and monitoring to provide recommendations for strengthening your physical security posture.",
                },
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 10.5V7C17 4.24 14.76 2 12 2S7 4.24 7 7V10.5C6.4 10.5 6 10.9 6 11.5V20.5C6 21.1 6.4 21.5 7 21.5H17C17.6 21.5 18 21.1 18 20.5V11.5C18 10.9 17.6 10.5 17 10.5ZM12 18.5C11.2 18.5 10.5 17.8 10.5 17S11.2 15.5 12 15.5 13.5 16.2 13.5 17 12.8 18.5 12 18.5ZM15.1 10.5H8.9V7C8.9 5.29 10.29 3.9 12 3.9S15.1 5.29 15.1 7V10.5Z" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    ),
                    title: "RFID Security Checks",
                    image: "/RFID Security Checks.png",
                    description: "Perform thorough security assessments of your RFID and card-based access systems to verify integrity, identify vulnerabilities, and ensure proper authentication protocols. Our RFID security testing includes cloning attempts, relay attacks, eavesdropping detection, and encryption analysis to protect against unauthorized access and credential theft. We evaluate reader security, card technology, and backend system integration to ensure your physical access control systems meet security best practices and cannot be easily bypassed or compromised by attackers.",
                },
            ],
        },
        {
            title: "Collaborative Threat Modeling",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14H20.5L22 15.5V20.5L20.5 22H15.5L14 20.5V15.5L15.5 14ZM18.5 17.5C18.5 16.67 17.83 16 17 16S15.5 16.67 15.5 17.5 16.17 19 17 19 18.5 18.33 18.5 17.5ZM7.5 14H12.5L14 15.5V20.5L12.5 22H7.5L6 20.5V15.5L7.5 14ZM10.5 17.5C10.5 16.67 9.83 16 9 16S7.5 16.67 7.5 17.5 8.17 19 9 19 10.5 18.33 10.5 17.5Z" />
                </svg>
            ),
            color: "from-indigo-500 to-indigo-700",
            services: [
                {
                    icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
                            <path d="M12 8L8 10L12 12L16 10L12 8Z" />
                        </svg>
                    ),
                    title: "STRIDE Interactive Workshops",
                    image: "/STRIDE Interactive Workshops.png",
                    description: "Participate in comprehensive STRIDE methodology workshops where our security experts collaborate with your team to systematically identify, analyze, discuss, and develop mitigation strategies for potential security threats across your entire technology stack and business processes. STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) provides a structured framework for threat modeling that helps teams proactively identify security risks during design and development phases, reducing costly remediation efforts later in the lifecycle.",
                },
            ],
        },
    ];

    return (
        <section id="services-section" className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 xl:pb-32 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Subtle Background Elements */}
            <div className={`absolute inset-0 opacity-5 transition-all duration-1000 ease-out bg-elements ${isVisible
                ? 'opacity-5 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
                }`}>
                <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-neoncyan/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-neoncyan/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Title */}
                <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple my-1 sm:my-2">Our Services.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-50 my-1 sm:my-2 lg:ml-20">Reliable.</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkpurple opacity-25 my-1 sm:my-2 lg:ml-40">Efficient.</h3>
                </div>

                {/* Category Navigation */}
                <div className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1200 ease-out delay-200 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                        {serviceCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg backdrop-blur-sm border text-xs sm:text-sm lg:text-base ${activeCategory === index
                                    ? "bg-neoncyan text-white shadow-neoncyan/25 border-neoncyan/50"
                                    : "bg-white/80 text-darkpurple hover:bg-neoncyan/10 hover:text-neoncyan border-neoncyan/20 hover:border-neoncyan/40"
                                    }`}
                            >
                                <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">{category.icon}</span>
                                <span className="font-semibold hidden sm:inline">
                                    {category.title}
                                </span>
                                <span className="font-semibold sm:hidden">
                                    {category.title.split(' ')[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Category Services */}
                <div className={`mb-8 sm:mb-12 lg:mb-20 transition-all duration-1200 ease-out delay-400 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                        {serviceCategories[activeCategory].services.map((service, index) => {
                            // Create dynamic masonry-style layout
                            const patterns = [
                                'lg:col-span-2 lg:row-span-2', // Large
                                'lg:col-span-2', // Wide
                                'lg:col-span-2', // Wide
                                'lg:col-span-2 lg:row-span-2', // Large
                                'lg:col-span-2', // Wide
                            ];
                            const pattern = patterns[index % patterns.length];

                            return (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-3xl overflow-hidden transition-all duration-75 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2 ${pattern} ${isVisible
                                        ? 'opacity-100 transform scale-100'
                                        : 'opacity-0 transform scale-95'
                                        }`}
                                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                                >
                                    {/* Image Section */}
                                    <div className="relative h-40 overflow-hidden">
                                        {/* Placeholder gradient background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neoncyan/20 via-blue-500/20 to-purple-500/20"></div>

                                        {/* Image - Replace with actual service images */}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-100"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-75"></div>

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-neoncyan rounded-full animate-pulse shadow-lg shadow-neoncyan/50"></div>
                                    </div>

                                    {/* Content */}
                                    <div className={`p-5 bg-gradient-to-b from-white to-gray-50/50 flex flex-col ${pattern.includes('row-span-2') ? 'min-h-[240px]' : ''}`}>
                                        <h3 className={`font-bold text-darkpurple mb-3 group-hover:text-neoncyan transition-colors duration-75 ${pattern.includes('row-span-2') ? 'text-2xl' : 'text-xl'}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-darkpurple/70 leading-relaxed ${pattern.includes('row-span-2') ? 'text-base mb-4' : 'text-sm line-clamp-3'}`}>
                                            {service.description}
                                        </p>

                                        {/* Additional content for large cards */}
                                        {pattern.includes('row-span-2') && (
                                            <div className="mt-auto pt-4 border-t border-gray-200">
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-darkpurple/70">Comprehensive vulnerability assessment and remediation guidance</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-darkpurple/70">Detailed reporting with actionable recommendations</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <svg className="w-5 h-5 text-neoncyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-darkpurple/70">Industry-standard methodologies and best practices</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center transition-all duration-1200 ease-out delay-600 ${isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                    }`}>
                    <div className="bg-gradient-to-br from-neoncyan via-neoncyan/95 to-neoncyan/90 py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm border border-neoncyan/30 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/30 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                                Ready to Secure Your <span className="text-white/90">Digital Future?</span>
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                                Let our cybersecurity experts assess your current security posture and design a comprehensive protection strategy tailored to your business needs.
                            </p>
                            <button onClick={openModal} className="group bg-white text-neoncyan px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white/90 hover:text-darkpurple transition-all duration-150 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                                <span>Get Your Security Assessment</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            <Transition appear show={isContactModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm sm:max-w-md lg:max-w-lg transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all mx-4">
                                    <div className="py-6 sm:py-8 px-2 sm:px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-xl sm:text-2xl lg:text-3xl font-semibold text-black'>
                                                Aloit Consultants
                                            </Link>
                                        </div>
                                        <p className="mb-6 sm:mb-8 lg:mb-12 mt-6 sm:mt-8 font-light text-center text-gray-500 text-sm sm:text-base lg:text-lg">Contact us now? Want to send us feedback?</p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                                <input
                                                    id="text"
                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}
                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Name..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}
                                                    type="email"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Leave a comment..."></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                onClick={handleClick}
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </section>
    );
};

export default ServicesSection;


