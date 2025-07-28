"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { EnhancedSpotlight } from "@/components/enhanced/EnhancedSpotlight";
import { WebGLErrorBoundary } from "@/components/error-boundaries/WebGLErrorBoundary";
import gsap from "gsap";
import { Twitter, Github, Linkedin, Instagram, Mail } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
];

const socialLinks = [
    {
        icon: <Twitter size={22} />,
        href: "https://twitter.com/",
        label: "Twitter",
    },
    {
        icon: <Github size={22} />,
        href: "https://github.com/",
        label: "GitHub",
    },
    {
        icon: <Linkedin size={22} />,
        href: "https://linkedin.com/",
        label: "LinkedIn",
    },
    {
        icon: <Instagram size={22} />,
        href: "https://instagram.com/",
        label: "Instagram",
    },
    {
        icon: <Mail size={22} />,
        href: "mailto:hello@agency.com",
        label: "Email",
    },
];

const footerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, type: "spring" as const, bounce: 0.2 },
    },
};

const FooterSection = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current.querySelectorAll(".footer-link"),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.7,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    return (
        <motion.footer
            ref={footerRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="relative z-10 bg-foreground border-t border-white/10 pt-16 pb-8 px-4 md:px-0 overflow-hidden"
        >
            {/* Spotlight BG */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <WebGLErrorBoundary fallback={<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-background/50" />}>
                    <EnhancedSpotlight
                        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .10) 0, hsla(210, 100%, 55%, .03) 50%, hsla(210, 100%, 45%, 0) 80%)"
                        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .03) 80%, transparent 100%)"
                        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 45%, .03) 80%, transparent 100%)"
                        translateY={-250}
                        width={600}
                        height={900}
                        smallWidth={260}
                        duration={8}
                        xOffset={80}
                    />
                </WebGLErrorBoundary>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
                {/* Left: Brand & Social */}
                <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-2xl font-bold text-white tracking-tight"
                    >
                        Agency<span className="text-primary">.</span>
                    </motion.div>
                    <p className="text-muted-foreground max-w-xs text-center md:text-left">
                        Building digital experiences that help brands grow and
                        connect with their audience.
                    </p>
                    <div className="flex gap-4 mt-2">
                        {socialLinks.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link text-white/80 hover:text-primary text-2xl transition"
                                whileHover={{ scale: 1.2, color: "#38bdf8" }}
                                aria-label={s.label}
                                tabIndex={0}
                                style={{ transition: "color 0.2s" }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
                {/* Center: Quick Links */}
                <div className="flex-1 flex flex-col gap-4 items-center">
                    <div className="text-md text-white mb-2 flex flex-col justify-start item-center">
                        <div className="text-lg font-semibold text-white mb-2">
                            Quick Links
                        </div>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer-link text-white/80 hover:text-primary transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Right: Legal */}
                <div className="flex-1 flex flex-col gap-4 justify-start items-center md:items-end">
                    <div className="text-md text-white mb-2 flex flex-col justify-start item-center">
                        <div className="text-lg font-semibold text-white mb-2">
                            Legal
                        </div>
                        <ul className="flex flex-col gap-2">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer-link text-white/80 hover:text-primary transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative z-10 mt-12 text-center text-xs text-white/40">
                &copy; {new Date().getFullYear()} Agency. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default FooterSection;
