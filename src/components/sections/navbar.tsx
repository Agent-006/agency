"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    // Helper to check if a link is active
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };
    return (
        <header className="w-full flex justify-center">
            <nav className="absolute left-1/2 -translate-x-1/2 mt-3 z-50 flex items-center justify-between gap-2 px-2 md:px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl shadow-2xl max-w-2xl w-[90vw] min-h-[60px]">
                {/* Mobile: Hamburger + Centered Logo */}
                <div className="sm:hidden flex items-center justify-between w-full relative min-h-[40px]">
                    {/* Hamburger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full p-2 text-white hover:bg-white/20"
                                aria-label="Open navigation menu"
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
                            className="p-0 w-72 bg-white/10 backdrop-blur-lg border-r border-white/20 overflow-y-auto max-h-screen flex flex-col shadow-2xl"
                        >
                            <SheetTitle asChild>
                                <VisuallyHidden>
                                    Agency Navigation
                                </VisuallyHidden>
                            </SheetTitle>
                            <div className="flex items-center px-6 py-4 border-b border-white/10">
                                <span className="text-2xl font-extrabold tracking-tight text-white dark:text-white select-none">
                                    Agency
                                </span>
                            </div>
                            <nav className="flex flex-col gap-1 px-6 py-4">
                                <SheetClose asChild>
                                    <Link
                                        href="/"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Home
                                    </Link>
                                </SheetClose>
                                <details className="group">
                                    <summary className="px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition cursor-pointer select-none">
                                        Service
                                    </summary>
                                    <ul className="pl-4 mt-2 flex flex-col gap-1">
                                        {components.map((component) => (
                                            <li key={component.title}>
                                                <SheetClose asChild>
                                                    <Link
                                                        href={component.href}
                                                        className="block px-2 py-2 rounded-lg text-sm text-white dark:text-white hover:bg-primary/10 transition"
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
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition"
                                    >
                                        About
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/blog"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Blog
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/projects"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Projects
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        href="/contact"
                                        className="block w-full px-4 py-3 rounded-xl font-semibold text-white dark:text-white hover:bg-primary/10 transition"
                                    >
                                        Contact Us
                                    </Link>
                                </SheetClose>
                            </nav>
                            <div className="px-6 pb-6">
                                <Button className="w-full rounded-full px-7 py-3 font-bold shadow-lg bg-primary text-white border-0 hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-lg transition-all duration-200">
                                    Get Free Consultation
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                    {/* Centered Agency Logo (absolute center) */}
                    <Link
                        href="/"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                        aria-label="Agency Home"
                        tabIndex={-1}
                    >
                        <span
                            className="text-xl font-extrabold tracking-tight text-white drop-shadow-lg px-2 py-0.5 rounded-lg bg-gradient-to-r from-primary to-cyan-400/80 bg-clip-text"
                            style={{ letterSpacing: "0.04em" }}
                        >
                            Agency
                        </span>
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden sm:flex flex-1 items-center justify-center">
                    <NavigationMenu className="bg-transparent" viewport={false}>
                        <NavigationMenuList className="flex items-center gap-2 md:gap-4 relative">
                            {/* Animated underline */}
                            {mounted && (
                                <AnimatePresence>
                                    {[
                                        { href: "/", label: "Home" },
                                        { href: "/about", label: "About" },
                                        { href: "/blog", label: "Blog" },
                                        {
                                            href: "/projects",
                                            label: "Projects",
                                        },
                                        {
                                            href: "/contact",
                                            label: "Contact Us",
                                        },
                                    ].map((item) =>
                                        isActive(item.href) ? (
                                            <motion.div
                                                key={item.href}
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 h-[3px] rounded-full bg-primary left-0"
                                                style={{
                                                    width: `var(--underline-width-${
                                                        item.href.replace(
                                                            "/",
                                                            ""
                                                        ) || "home"
                                                    })`,
                                                    left: `var(--underline-left-${
                                                        item.href.replace(
                                                            "/",
                                                            ""
                                                        ) || "home"
                                                    })`,
                                                    transition:
                                                        "all 0.3s cubic-bezier(.4,0,.2,1)",
                                                }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        ) : null
                                    )}
                                </AnimatePresence>
                            )}
                            {/* Navlinks */}
                            {mounted ? (
                                <>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            id="nav-home"
                                            className={`px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative ${
                                                isActive("/") ? "font-bold" : ""
                                            }`}
                                            ref={(el) => {
                                                if (
                                                    el &&
                                                    typeof window !==
                                                        "undefined"
                                                ) {
                                                    const rect =
                                                        el.getBoundingClientRect();
                                                    const parentRect =
                                                        el.parentElement?.parentElement?.getBoundingClientRect();
                                                    if (parentRect) {
                                                        document.documentElement.style.setProperty(
                                                            "--underline-width-home",
                                                            `${rect.width}px`
                                                        );
                                                        document.documentElement.style.setProperty(
                                                            "--underline-left-home",
                                                            `${
                                                                rect.left -
                                                                parentRect.left
                                                            }px`
                                                        );
                                                    }
                                                }
                                            }}
                                        >
                                            <Link href="/">Home</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 relative">
                                            Service
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-transparent backdrop-blur-md border text-white shadow-2xl rounded-2xl mt-2">
                                            <ul className="bg-transparent backdrop-blur-md grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
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
                                            id="nav-about"
                                            className={`px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative ${
                                                isActive("/about")
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            ref={(el) => {
                                                if (
                                                    el &&
                                                    typeof window !==
                                                        "undefined"
                                                ) {
                                                    const rect =
                                                        el.getBoundingClientRect();
                                                    const parentRect =
                                                        el.parentElement?.parentElement?.getBoundingClientRect();
                                                    if (parentRect) {
                                                        document.documentElement.style.setProperty(
                                                            "--underline-width-about",
                                                            `${rect.width}px`
                                                        );
                                                        document.documentElement.style.setProperty(
                                                            "--underline-left-about",
                                                            `${
                                                                rect.left -
                                                                parentRect.left
                                                            }px`
                                                        );
                                                    }
                                                }
                                            }}
                                        >
                                            <Link href="/about">About</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            id="nav-blog"
                                            className={`px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative ${
                                                isActive("/blog")
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            ref={(el) => {
                                                if (
                                                    el &&
                                                    typeof window !==
                                                        "undefined"
                                                ) {
                                                    const rect =
                                                        el.getBoundingClientRect();
                                                    const parentRect =
                                                        el.parentElement?.parentElement?.getBoundingClientRect();
                                                    if (parentRect) {
                                                        document.documentElement.style.setProperty(
                                                            "--underline-width-blog",
                                                            `${rect.width}px`
                                                        );
                                                        document.documentElement.style.setProperty(
                                                            "--underline-left-blog",
                                                            `${
                                                                rect.left -
                                                                parentRect.left
                                                            }px`
                                                        );
                                                    }
                                                }
                                            }}
                                        >
                                            <Link href="/blog">Blog</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            id="nav-projects"
                                            className={`px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative ${
                                                isActive("/projects")
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            ref={(el) => {
                                                if (
                                                    el &&
                                                    typeof window !==
                                                        "undefined"
                                                ) {
                                                    const rect =
                                                        el.getBoundingClientRect();
                                                    const parentRect =
                                                        el.parentElement?.parentElement?.getBoundingClientRect();
                                                    if (parentRect) {
                                                        document.documentElement.style.setProperty(
                                                            "--underline-width-projects",
                                                            `${rect.width}px`
                                                        );
                                                        document.documentElement.style.setProperty(
                                                            "--underline-left-projects",
                                                            `${
                                                                rect.left -
                                                                parentRect.left
                                                            }px`
                                                        );
                                                    }
                                                }
                                            }}
                                        >
                                            <Link href="/projects">
                                                Projects
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            id="nav-contact"
                                            className={`px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative ${
                                                isActive("/contact")
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            ref={(el) => {
                                                if (
                                                    el &&
                                                    typeof window !==
                                                        "undefined"
                                                ) {
                                                    const rect =
                                                        el.getBoundingClientRect();
                                                    const parentRect =
                                                        el.parentElement?.parentElement?.getBoundingClientRect();
                                                    if (parentRect) {
                                                        document.documentElement.style.setProperty(
                                                            "--underline-width-contact",
                                                            `${rect.width}px`
                                                        );
                                                        document.documentElement.style.setProperty(
                                                            "--underline-left-contact",
                                                            `${
                                                                rect.left -
                                                                parentRect.left
                                                            }px`
                                                        );
                                                    }
                                                }
                                            }}
                                        >
                                            <Link href="/contact">
                                                Contact Us
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </>
                            ) : (
                                <>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            className={
                                                navigationMenuTriggerStyle() +
                                                " px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative"
                                            }
                                        >
                                            <Link href="/">Home</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative">
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
                                                " px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative"
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
                                                " px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative"
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
                                                " px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative"
                                            }
                                        >
                                            <Link href="/projects">
                                                Projects
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            asChild
                                            className={
                                                navigationMenuTriggerStyle() +
                                                " px-5 py-2 rounded-full bg-transparent text-white shadow-md transition-all duration-200 hover:bg-transparent hover:text-blue-100 relative"
                                            }
                                        >
                                            <Link href="/contact">
                                                Contact Us
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </>
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
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
