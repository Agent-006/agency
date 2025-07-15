import React from "react";

const testimonials = [
    {
        name: "Ava Smith",
        role: "CEO, StellarTech",
        quote: "The Agency team delivered beyond our expectations. Our digital presence has never looked better!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Liam Johnson",
        role: "Founder, GreenLeaf",
        quote: "Professional, creative, and always on time. Highly recommended for any business looking to grow online.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Lee",
        role: "Marketing Lead, NovaApps",
        quote: "Their expertise in branding and web development helped us stand out in a crowded market.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

// const cardVariants = {
//     offscreen: { opacity: 0, y: 60, scale: 0.95 },
//     onscreen: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             type: "spring" as const,
//             bounce: 0.22,
//             duration: 0.7,
//         },
//     },
// };

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-8 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white drop-shadow">
                    Client Love
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    Real feedback from real people. Here’s what our partners say
                    about working with us.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {testimonials.map((t) => (
                        <div key={t.name} className="flex-1">
                            <div
                                key={t.name}
                                className="relative group flex-1 max-w-md mx-auto bg-gradient-to-br from-primary/10 via-background/60 to-white/10 border border-white/10 backdrop-blur-xl shadow-xl rounded-3xl px-8 py-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative mb-6">
                                    <div className="absolute -inset-1 bg-primary/30 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition" />
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        width={96}
                                        height={96}
                                        className="rounded-full border-4 border-primary/60 shadow-lg relative z-10"
                                        loading="lazy"
                                    />
                                </div>
                                <blockquote className="text-xl text-white font-semibold mb-6 relative z-10">
                                    <span className="text-primary text-4xl leading-none align-top mr-1">
                                        “
                                    </span>
                                    {t.quote}
                                    <span className="text-primary text-4xl leading-none align-bottom ml-1">
                                        ”
                                    </span>
                                </blockquote>
                                <div className="mt-auto">
                                    <div className="font-bold text-white text-lg">
                                        {t.name}
                                    </div>
                                    <div className="text-primary/80 text-sm">
                                        {t.role}
                                    </div>
                                </div>
                                {/* Animated border glow on hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
