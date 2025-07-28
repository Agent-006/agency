"use client";

import React from "react";
import MagicBento from "@/components/reactbits/MagicBento/MagicBento";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, bounce: 0.18, duration: 0.8 },
    },
};

const projectsData = [
    {
        color: "#060010",
        title: "E-Commerce Platform",
        description: "Modern shopping experience with React & Node.js",
        label: "Web App",
        image: "/next.svg",
    },
    {
        color: "#060010",
        title: "Mobile Finance App",
        description: "Secure banking solution with biometric authentication",
        label: "Mobile",
        image: "/vercel.svg",
    },
    {
        color: "#060010",
        title: "AI Dashboard",
        description: "Real-time analytics with machine learning insights",
        label: "AI/ML",
        image: "/globe.svg",
    },
    {
        color: "#060010",
        title: "Brand Identity System",
        description: "Complete visual identity for tech startup",
        label: "Design",
        image: "/window.svg",
    },
    {
        color: "#060010",
        title: "Cloud Infrastructure",
        description: "Scalable microservices architecture on AWS",
        label: "DevOps",
        image: "/file.svg",
    },
    {
        color: "#060010",
        title: "Marketing Automation",
        description: "Email campaigns with advanced segmentation",
        label: "Marketing",
        image: "/favicon.ico",
    },
];

const ProjectsSection = () => {
    return (
        <section className="py-12 bg-white w-full">
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Projects</h2>
                <MagicBento projects={projectsData} />
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
