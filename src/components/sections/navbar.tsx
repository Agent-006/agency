"use client";

import * as React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Digital Marketing",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Social Media Marketing",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Design & Branding",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "SEO Optimization",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Website Development",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Digital Ads",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function NavigationMenuBar() {
    return (
        <header className="w-full flex justify-center">
            <nav className="absolute left-1/2 -translate-x-1/2 mt-6 z-50 flex items-center justify-between gap-4 px-4 md:px-10 py-3 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl shadow-2xl max-w-5xl w-[95vw]">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2 select-none">
                    <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow">
                        Agency
                    </span>
                </div>
                {/* Hamburger for mobile using shadcn Sheet */}
                <div className="sm:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full p-2 text-white hover:bg-white/20"
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="p-0 w-72 bg-white/90 dark:bg-zinc-900/95 border-r border-white/20 backdrop-blur-lg overflow-y-auto max-h-screen flex flex-col"
                        >
                            <SheetTitle asChild>
                                <VisuallyHidden>Agency Navigation</VisuallyHidden>
                            </SheetTitle>
                            <div className="flex items-center px-6 py-4 border-b border-white/10">
                                <span className="text-2xl font-extrabold tracking-tight text-black dark:text-white select-none">
                                    Agency
                                </span>
                            </div>
                            <nav className="flex flex-col gap-1 px-6 py-4">
                                <SheetClose asChild>
                                    <Link
                                        href="/"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Home
                                    </Link>
                                </SheetClose>
                                <details className="group">
                                    <summary className="px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition cursor-pointer select-none">
                                        Service
                                    </summary>
                                    <ul className="pl-4 mt-2 flex flex-col gap-1">
                                        {components.map((component) => (
                                            <li key={component.title}>
                                                <SheetClose asChild>
                                                    <Link
                                                        href={component.href}
                                                        className="block px-2 py-2 rounded-lg text-sm text-black dark:text-white hover:bg-primary/10 transition"
                                                    >
                                                        <div className="font-medium">
                                                            {component.title}
                                                        </div>
                                                        <div className="text-xs opacity-70">
                                                            {
                                                                component.description
                                                            }
                                                        </div>
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                                <SheetClose asChild>
                                    <Link
                                        href="/about"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition"
                                    >
                                        About
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/blog"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Blog
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/projects"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Projects
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/contact"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-black dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Contact Us
                                    </Link>
                                </SheetClose>
                            </nav>
                            <div className="px-6 pb-6 mt-auto">
                                <Button className="w-full rounded-full px-7 py-3 font-bold shadow-lg bg-primary text-black border-0 hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-lg focus:ring-2 focus:ring-primary/60 focus:outline-none transition-all duration-200">
                                    Get Free Consultation
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden sm:flex flex-1 items-center justify-center">
                    <NavigationMenu className="bg-transparent" viewport={false}>
                        <NavigationMenuList className="flex items-center gap-2 md:gap-4">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg"
                                    }
                                >
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg">
                                    Service
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white/20 backdrop-blur-lg border border-white/20 text-white shadow-2xl rounded-2xl mt-2">
                                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg"
                                    }
                                >
                                    <Link href="/about">About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg"
                                    }
                                >
                                    <Link href="/blog">Blog</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg"
                                    }
                                >
                                    <Link href="/projects">Projects</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg focus:bg-white/25 focus:scale-105 focus:shadow-lg"
                                    }
                                >
                                    <Link href="/contact">Contact Us</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/* CTA Button - hidden on mobile */}
                <div className="hidden sm:block">
                    <Button className="rounded-full px-7 py-2.5 font-bold shadow-lg bg-primary text-black border-0 hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-lg focus:ring-2 focus:ring-primary/60 focus:outline-none transition-all duration-200 [text-shadow:0_2px_12px_rgba(255,255,255,0.5)]">
                        Get Free Consultation
                    </Button>
                </div>
            </nav>
        </header>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}
