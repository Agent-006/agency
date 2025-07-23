"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
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
        <section className="py-12 bg-white">
            <motion.div
                className="container px-4 md:px-8 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Projects</h2>
                <BentoGrid className="gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[18rem]">
                  {/* Example projects, replace with real data as needed */}
                  <BentoCard
                    name="Brand Website Redesign"
                    className="col-span-2 row-span-1 bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Brand Website" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">B</span>}
                    description="A modern, responsive redesign for a leading brand, focused on conversion and accessibility."
                    href="#"
                    cta="View Project"
                  />
                  <BentoCard
                    name="E-commerce Platform"
                    className="col-span-1 row-span-2 bg-white/80 backdrop-blur-lg border border-green-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80" alt="E-commerce" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">E</span>}
                    description="A scalable e-commerce solution with custom integrations and a seamless checkout experience."
                    href="#"
                    cta="View Project"
                  />
                  <BentoCard
                    name="SaaS Dashboard"
                    className="col-span-1 row-span-1 bg-white/80 backdrop-blur-lg border border-purple-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="SaaS Dashboard" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">S</span>}
                    description="A data-rich dashboard for SaaS analytics, featuring real-time charts and user management."
                    href="#"
                    cta="View Project"
                  />
                  <BentoCard
                    name="Portfolio Site"
                    className="col-span-1 row-span-1 bg-white/80 backdrop-blur-lg border border-pink-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Portfolio" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center font-bold text-lg">P</span>}
                    description="A personal portfolio site with interactive animations and a blog."
                    href="#"
                    cta="View Project"
                  />
                  <BentoCard
                    name="Mobile App UI Kit"
                    className="col-span-2 row-span-1 bg-white/80 backdrop-blur-lg border border-yellow-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Mobile App UI Kit" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold text-lg">M</span>}
                    description="A reusable UI kit for mobile apps, featuring light and dark themes."
                    href="#"
                    cta="View Project"
                  />
                  <BentoCard
                    name="Analytics Platform"
                    className="col-span-1 row-span-1 bg-white/80 backdrop-blur-lg border border-cyan-100 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    background={
                      <Image src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" alt="Analytics Platform" width={600} height={128} className="w-full h-32 object-cover rounded-t-2xl" />
                    }
                    Icon={() => <span className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold text-lg">A</span>}
                    description="A robust analytics platform with custom dashboards and export features."
                    href="#"
                    cta="View Project"
                  />
                </BentoGrid>
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
