"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const testimonials = [
    {
        name: "Ava Smith",
        role: "CEO, StellarTech",
        quote: "The Agency team delivered beyond our expectations. Our digital presence has never looked better!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Liam Johnson",
        role: "Founder, GreenLeaf",
        quote: "Professional, creative, and always on time. Highly recommended for any business looking to grow online.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Lee",
        role: "Marketing Lead, NovaApps",
        quote: "Their expertise in branding and web development helped us stand out in a crowded market.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            // Remove 'type' or use the correct enum/type if available
            bounce: 0.22,
            duration: 0.7,
            delay: i * 0.15,
        },
    }),
};

const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelectorAll(".testimonial-card"),
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.18,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-8 mx-auto" ref={sectionRef}>
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground drop-shadow"
                >
                    Client Love
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
                >
                    Real feedback from real people. Here’s what our partners say
                    about working with us.
                </motion.p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="flex-1 testimonial-card"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <div
                                className="relative group flex-1 max-w-md mx-auto bg-gradient-to-br from-white via-gray-50 to-blue-50 border border-gray-200 rounded-2xl px-7 py-9 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:border-primary/60 transition-all duration-300"
                            >
                                <div className="relative mb-5">
                                    <span className="absolute -inset-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition" />
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full border-2 border-primary/40 shadow-md relative z-10"
                                        loading="lazy"
                                    />
                                </div>
                                <blockquote className="text-lg text-gray-700 font-medium mb-5 relative z-10">
                                    <span className="text-primary text-3xl leading-none align-top mr-1">“</span>
                                    {t.quote}
                                    <span className="text-primary text-3xl leading-none align-bottom ml-1">”</span>
                                </blockquote>
                                <div className="mt-auto">
                                    <div className="font-semibold text-gray-900 text-base">{t.name}</div>
                                    <div className="text-primary/80 text-xs mt-1">{t.role}</div>
                                </div>
                                {/* Blue border accent on hover is handled by hover:border-primary/60 above */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
