"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import Beams from "../reactbits/Beams/Beams";
import SplitText from "../reactbits/SplitText/SplitText";
import ShinyText from "../reactbits/ShinyText/ShinyText";

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

        // Removed GSAP animation from .hero-button to ensure visibility
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Beams animated background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>
            {/* Foreground content */}
            <div className="container px-4 md:px-6 text-center relative z-10">
                <SplitText
                    text="Building Digital Experiences That Matter"
                    className="hero-title text-4xl md:text-6xl font-bold mb-6 pb-3"
                    splitType="words"
                    delay={60}
                    duration={0.7}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="center"
                />

                <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    We craft bespoke software solutions tailored to your
                    business needs, helping you stand out in the digital
                    landscape.
                </p>

                <div className="flex w-full justify-center">
                    <Button
                        className="hero-button px-8 py-6 rounded-full font-bold border border-white/30 bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                    >
                        <ShinyText text="Get In Touch" speed={2.5} className="text-lg md:text-xl font-bold" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
