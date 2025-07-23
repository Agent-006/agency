"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import DarkVeil from "../reactbits/DarkVeil/DarkVeil";
import SplitText from "../reactbits/SplitText/SplitText";
import ShinyText from "../reactbits/ShinyText/ShinyText";
import Link from "next/link";

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
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Logo at top left */}
            <div className="absolute top-6 left-6 z-20 hidden md:block">
                <Link href="/" aria-label="Home">
                    <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
                        Agency
                    </h1>
                </Link>
            </div>
            {/* DarkVeil animated background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <DarkVeil
                    hueShift={25}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={3}
                    scanlineFrequency={5}
                    warpAmount={5}
                    resolutionScale={1}
                />
            </div>
            {/* Foreground content */}
            <div className="container px-4 md:px-6 text-center relative z-10">
                <SplitText
                    text="Building Digital Experiences That Matter"
                    className="hero-title text-white text-4xl md:text-6xl font-bold mb-6 pb-3"
                    splitType="words"
                    delay={60}
                    duration={0.7}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="center"
                />

                <p className="hero-description text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                    We craft bespoke software solutions tailored to your
                    business needs, helping you stand out in the digital
                    landscape.
                </p>

                <div className="flex w-full justify-center">
                    <HoverBorderGradient
                        className="text-lg md:text-xl font-bold"
                        containerClassName="hero-button px-8 rounded-full font-bold shadow-xl transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                        as="button"
                    >
                        <ShinyText
                            text="Get In Touch"
                            speed={2.5}
                            className="text-lg md:text-xl font-bold"
                        />
                    </HoverBorderGradient>
                </div>
            </div>
        </section>
    );
}
