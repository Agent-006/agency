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
import Orb from "@/components/reactbits/Orb/Orb";
import { WebGLErrorBoundary } from "@/components/error-boundaries/WebGLErrorBoundary";

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
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Orb Panel */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <WebGLErrorBoundary
                            fallback={
                                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-muted-foreground">
                                    Interactive Orb Unavailable
                                </div>
                            }
                        >
                            <div className="w-[400px] h-[400px] max-w-full">
                                <Orb
                                    hue={340}
                                    hoverIntensity={0.3}
                                    rotateOnHover={true}
                                    forceHoverState={false}
                                />
                            </div>
                        </WebGLErrorBoundary>
                        <div className="mt-8 text-center">
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                Let&#39;s Connect!
                            </h3>
                            <p className="text-muted-foreground">
                                We love to hear from you. Reach out for
                                collaborations, questions, or just to say hi.
                            </p>
                        </div>
                    </div>
                    {/* Contact Form Card */}
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-lg relative">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-pink-500 to-purple-600 blur-sm opacity-40"></div>
                            <Card className="relative bg-black/80 border border-primary/50 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.55)] hover:shadow-primary/50 transition-all duration-300 py-10 px-2 md:px-10 lg:px-10">
                                <CardHeader className="mb-6">
                                    <CardTitle className="text-4xl font-extrabold text-white text-center mb-3 tracking-tight drop-shadow-lg relative">
                                        Contact Us
                                        <span className="block mx-auto mt-2 w-16 h-1 bg-gradient-to-r from-primary via-pink-500 to-purple-600 rounded-full animate-pulse"></span>
                                    </CardTitle>
                                    <p className="text-lg text-gray-300 text-center font-medium">
                                        Fill out the form and our team will get
                                        back to you soon.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        className="flex flex-col gap-7"
                                        onSubmit={handleSubmit(onSubmit)}
                                        autoComplete="off"
                                    >
                                        <div>
                                            <Input
                                                {...register("name")}
                                                placeholder="Your Name"
                                                className="bg-black/60 border border-primary/40 text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none rounded-xl px-5 py-4 text-lg shadow-sm transition"
                                                disabled={isSubmitting}
                                            />
                                            {errors.name && (
                                                <span className="text-sm text-red-400 font-medium mt-1 block">
                                                    {errors.name.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <Input
                                                {...register("email")}
                                                placeholder="Your Email"
                                                className="bg-black/60 border-none text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none rounded-xl px-5 py-4 text-lg shadow-sm transition"
                                                disabled={isSubmitting}
                                            />
                                            {errors.email && (
                                                <span className="text-sm text-red-400 font-medium mt-1 block">
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <Textarea
                                                {...register("message")}
                                                placeholder="Your Message"
                                                rows={8}
                                                className="bg-black/60 border-none text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none rounded-xl px-5 py-4 text-lg shadow-sm transition"
                                                disabled={isSubmitting}
                                            />
                                            {errors.message && (
                                                <span className="text-sm text-red-400 font-medium mt-1 block">
                                                    {errors.message.message}
                                                </span>
                                            )}
                                        </div>
                                        <HoverBorderGradient
                                            as="button"
                                            containerClassName="w-full mt-2"
                                            className="w-full text-lg font-bold px-10 py-2 text-white rounded-full border-none transition-all duration-200 hover:bg-gray-900/50 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                                            {...{
                                                type: "submit",
                                                disabled: isSubmitting,
                                            }}
                                        >
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </HoverBorderGradient>
                                        {isSubmitSuccessful && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-green-400 text-center font-semibold mt-3 text-lg"
                                            >
                                                Thank you! Your message has been
                                                sent.
                                            </motion.div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
