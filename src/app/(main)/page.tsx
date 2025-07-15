import { HeroSection } from '@/components/sections/hero'
import ProjectsSection from '@/components/sections/projects'
import ServicesSection from '@/components/sections/services'
import TestimonialsSection from '@/components/sections/testimonials'

export default function Home() {
    return (
        <main className="bg-background text-primary min-h-screen">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            {/* <ContactSection /> */}
        </main>
    )
}