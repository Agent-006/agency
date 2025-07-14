import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        // Test database connection first
        await prisma.$connect()
        
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: 'desc' },
            take: 6
        })
        
        return NextResponse.json(projects)
    } catch (error) {
        console.error('Error fetching projects:', error)
        
        // Return a proper JSON error response
        return NextResponse.json(
            { 
                error: 'Failed to fetch projects',
                message: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        )
    } finally {
        await prisma.$disconnect()
    }
}