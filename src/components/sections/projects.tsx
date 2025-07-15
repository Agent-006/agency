"use client";

import React from "react";
import FeaturesSectionDemo from "@/components/features-section-demo-3";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, bounce: 0.18, duration: 0.8 },
    },
};

const ProjectsSection = () => {
    return (
        <section className="py-5 bg-background">
            <motion.div
                className="container px-4 md:px-8 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                {/* Features grid with modern glassy cards */}
                <FeaturesSectionDemo />
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
