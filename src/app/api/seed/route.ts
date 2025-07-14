import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

const sampleProjects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce solution with advanced features",
        client: "TechCorp Inc.",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
        title: "Mobile Banking App",
        description: "Secure and user-friendly mobile banking application",
        client: "FinanceBank",
        tags: ["React Native", "Firebase", "Biometric Auth"],
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
    },
    {
        title: "Healthcare Management System",
        description: "Comprehensive healthcare management and patient tracking",
        client: "MedCare Solutions",
        tags: ["Vue.js", "Express", "MongoDB", "WebRTC"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
    }
]

export async function POST() {
    try {
        // Test database connection
        await prisma.$connect()
        
        // Check if projects already exist
        const existingProjects = await prisma.project.count()
        
        if (existingProjects > 0) {
            return NextResponse.json({
                status: 'info',
                message: `Database already has ${existingProjects} projects`,
                timestamp: new Date().toISOString()
            })
        }
        
        // Create sample projects
        const createdProjects = await prisma.project.createMany({
            data: sampleProjects
        })
        
        return NextResponse.json({
            status: 'success',
            message: `Created ${createdProjects.count} sample projects`,
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        console.error('Error seeding data:', error)
        
        return NextResponse.json(
            { 
                status: 'error',
                error: 'Failed to seed data',
                message: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        )
    } finally {
        await prisma.$disconnect()
    }
}
