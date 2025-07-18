"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
            className="relative z-10 bg-background border-t border-white/10 pt-16 pb-8 px-4 md:px-0"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
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
            <div className="mt-12 text-center text-xs text-white/40">
                &copy; {new Date().getFullYear()} Agency. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default FooterSection;
