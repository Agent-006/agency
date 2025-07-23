"use client";

import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Badge } from "@/components/ui/badge";
import {
    Sparkles,
    TrendingUp,
    Palette,
    Globe2,
    Code2,
    BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Sparkles className="w-7 h-7 text-primary" />,
        title: "Digital Marketing",
        desc: "Grow your business with targeted digital campaigns and analytics.",
        tag: "Growth",
    },
    {
        icon: <TrendingUp className="w-7 h-7 text-primary" />,
        title: "SEO Optimization",
        desc: "Boost your search engine rankings and drive organic traffic.",
        tag: "SEO",
    },
    {
        icon: <Palette className="w-7 h-7 text-primary" />,
        title: "Design & Branding",
        desc: "Craft a memorable brand with stunning visuals and design.",
        tag: "Branding",
    },
    {
        icon: <Globe2 className="w-7 h-7 text-primary" />,
        title: "Social Media Marketing",
        desc: "Engage your audience and build your brand on social platforms.",
        tag: "Social",
    },
    {
        icon: <Code2 className="w-7 h-7 text-primary" />,
        title: "Website Development",
        desc: "Custom websites and web apps tailored to your business needs.",
        tag: "Web",
    },
    {
        icon: <BarChart3 className="w-7 h-7 text-primary" />,
        title: "Digital Ads",
        desc: "Maximize ROI with data-driven advertising strategies.",
        tag: "Ads",
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 60, scale: 0.95 },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.22,
            duration: 0.7,
        },
    },
} as const;

const ServicesSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-foreground">
            <Spotlight />
            <div className="container px-4 md:px-8 mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-100">
                    Our Services
                </h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
                    We offer a full suite of digital services to help your
                    business thrive in the modern world.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: idx * 0.08 }}
                        >
                            <MagicCard className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-10 px-8 md:px-10 py-14 min-h-[320px] backdrop-blur-md rounded-3xl shadow-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl">
                                {/* Icon section */}
                                <div className="flex-shrink-0 flex mb-6 md:mb-7 md:mr-14">
                                    {React.cloneElement(service.icon, {
                                        className: "w-12 h-12 text-blue-500",
                                    })}
                                </div>
                                {/* Content section */}
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-xl font-bold text-white mb-2 text-left w-full">
                                        {service.title}
                                    </div>
                                    <p className="text-gray-200 mb-6 min-h-[48px] text-left w-full text-base">
                                        {service.desc}
                                    </p>
                                    <Badge
                                        variant="secondary"
                                        className="rounded-full px-4 py-1.5 text-xs bg-primary/10 text-primary font-semibold tracking-wide mt-auto shadow"
                                    >
                                        {service.tag}
                                    </Badge>
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
