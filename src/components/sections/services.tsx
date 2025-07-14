"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Briefcase } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description:
            "Custom websites and web applications built with modern technologies.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile applications for iOS and Android.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
    {
        title: "UI/UX Design",
        description:
            "Beautiful, intuitive interfaces that enhance user experience.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure tailored to your needs.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
];

export function ServicesSection() {
    useGSAP(() => {
        gsap.from(".service-card", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".services-container",
                start: "top 80%",
            },
        });
    });

    return (
        <section className="py-20 services-container">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business
                        requirements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        {service.icon}
                                        <CardTitle>{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
