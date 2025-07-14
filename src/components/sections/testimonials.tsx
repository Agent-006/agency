"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content:
            "Their team delivered our platform ahead of schedule and under budget. The quality of work was exceptional.",
        avatar: "/avatars/sarah.jpg",
    },
    {
        name: "Michael Chen",
        role: "CTO, Digital Solutions",
        content:
            "We've worked with many agencies, but none have shown the level of professionalism and expertise as this team.",
        avatar: "/avatars/michael.jpg",
    },
    {
        name: "Emma Rodriguez",
        role: "Marketing Director, BrandUp",
        content:
            "The mobile app they built for us has significantly increased our customer engagement metrics.",
        avatar: "/avatars/emma.jpg",
    },
];

export function TestimonialsSection() {
    useGSAP(() => {
        gsap.from(".testimonial-card", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".testimonials-container",
                start: "top 75%",
            },
        });
    });

    return (
        <section className="py-20 testimonials-container">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don&apos;t just take our word for it - hear what our clients
                        have to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col">
                                <CardContent className="flex-grow p-6">
                                    <p className="italic text-muted-foreground">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center gap-4 pb-6 px-6">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} />
                                        <AvatarFallback>
                                            {testimonial.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
