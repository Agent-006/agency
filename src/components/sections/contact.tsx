"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "@/components/features-section-demo-3";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate async submit
        console.log(data);
        await new Promise((res) => setTimeout(res, 1200));
        reset();
    };

    return (
        <section className="py-20 bg-foreground">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Globe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0.35,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-shrink-0 flex justify-center items-center w-full lg:w-1/2 mb-10 lg:mb-0"
                    >
                        <div className="w-full flex justify-center items-center">
                            <Globe />
                        </div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 80 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0.35,
                            delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full max-w-xl mx-auto"
                    >
                        <Card className="bg-[#18181b] border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/60 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-white text-center mb-2">
                                    Get in Touch
                                </CardTitle>
                                <p className="text-gray-400 text-center">
                                    Fill out the form and our team will get back
                                    to you soon.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form
                                    className="flex flex-col gap-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                    autoComplete="off"
                                >
                                    <div>
                                        <Input
                                            {...register("name")}
                                            placeholder="Your Name"
                                            className="bg-[#232329] border border-gray-700 text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 transition"
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && (
                                            <span className="text-sm text-red-400">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            {...register("email")}
                                            placeholder="Your Email"
                                            className="bg-[#232329] border border-gray-700 text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 transition"
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && (
                                            <span className="text-sm text-red-400">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <Textarea
                                            {...register("message")}
                                            placeholder="Your Message"
                                            rows={5}
                                            className="bg-[#232329] border border-gray-700 text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 transition resize-none"
                                            disabled={isSubmitting}
                                        />
                                        {errors.message && (
                                            <span className="text-sm text-red-400">
                                                {errors.message.message}
                                            </span>
                                        )}
                                    </div>
                                    <HoverBorderGradient
                                        as="button"
                                        containerClassName="w-full mt-2"
                                        className="w-full text-base font-bold px-8 py-3 text-white bg-white/10 backdrop-blur-md rounded-full shadow-md border-0 focus:ring-2 focus:ring-primary/60 focus:outline-none transition-all duration-200"
                                        {...{ type: "submit", disabled: isSubmitting }}
                                    >
                                        {isSubmitting
                                            ? "Sending..."
                                            : "Send Message"}
                                    </HoverBorderGradient>
                                    {isSubmitSuccessful && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-green-400 text-center font-semibold"
                                        >
                                            Thank you! Your message has been
                                            sent.
                                        </motion.div>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
