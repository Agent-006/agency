"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { prisma } from "@/lib/prisma";
import { ProjectCard } from "../project-card";

type Project = {
    id: string;
    title: string;
    description: string;
    client: string;
    tags: string[];
    imageUrl: string;
};

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useGSAP(() => {
        gsap.from(".project-item", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects-container",
                start: "top 70%",
            },
        });
    });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    let message = `HTTP error! status: ${response.status}`;
                    try {
                        const errorData = await response.json();
                        if (errorData && errorData.error) {
                            message = errorData.error + (errorData.message ? `: ${errorData.message}` : '');
                        }
                    } catch {}
                    throw new Error(message);
                }
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Response is not JSON");
                }
                const data = await response.json();
                setProjects(data);
                setError(null);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects([]);
                setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section className="py-20 bg-muted projects-container">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        See how we&#39;ve helped businesses transform through
                        technology.
                    </p>
                </motion.div>

                {error ? (
                    <div className="text-center text-destructive mb-8">
                        <p>Failed to load projects: {error}</p>
                    </div>
                ) : loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="h-64 bg-background rounded-lg animate-pulse"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button variant="outline">View All Projects</Button>
                </motion.div>
            </div>
        </section>
    );
}
