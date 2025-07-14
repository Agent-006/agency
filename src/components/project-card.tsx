"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

type ProjectCardProps = {
    project: {
        id: string;
        title: string;
        description: string;
        client: string;
        tags: string[];
        imageUrl: string;
    };
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <div className="group relative h-full overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Client: {project.client}
                        </span>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                            >
                                <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                            >
                                <Github className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
