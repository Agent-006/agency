"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Palette, Globe2, Code2, BarChart3 } from "lucide-react";
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
		<section className="py-20 bg-background">
			<div className="container px-4 md:px-8 mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white drop-shadow">
					Our Services
				</h2>
				<p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
					We offer a full suite of digital services to help your business thrive
					in the modern world.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.3 }}
							variants={cardVariants}
							transition={{ delay: idx * 0.08 }}
						>
							<Card className="relative group bg-gradient-to-br from-white/10 via-primary/10 to-background/30 border border-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition-all hover:scale-[1.03] hover:shadow-primary/30 hover:shadow-2xl">
								{/* Animated Glow */}
								<div
									className="absolute -inset-1 z-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background:
											"radial-gradient(ellipse at 60% 40%,rgba(80,180,255,0.18) 0%,rgba(0,0,0,0) 70%)",
									}}
								/>
								<CardHeader className="flex flex-row items-center gap-4 pb-2 z-10 relative">
									<div className="bg-primary/20 rounded-xl p-4 flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
										{service.icon}
									</div>
									<CardTitle className="text-lg font-semibold text-white">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="z-10 relative">
									<p className="text-muted-foreground mb-4 min-h-[56px]">
										{service.desc}
									</p>
									<Badge
										variant="secondary"
										className="rounded-full px-3 py-1 text-xs bg-primary/20 text-primary border-0 font-semibold tracking-wide"
									>
										{service.tag}
									</Badge>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
