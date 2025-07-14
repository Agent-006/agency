"use client";

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    useGSAP(() => {
        gsap.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(".hero-description", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
        });

        gsap.from(".hero-button", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.6,
            ease: "power2.out",
        });
    });

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
            <div className="container px-4 md:px-6 text-center">
                <motion.h1
                    className="hero-title text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Building Digital Experiences That Matter
                </motion.h1>

                <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    We craft bespoke software solutions tailored to your
                    business needs, helping you stand out in the digital
                    landscape.
                </p>

                <Button className="hero-button" size="lg">
                    Get Started
                </Button>
            </div>
        </section>
    );
}
