import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        // Test database connection
        await prisma.$connect()
        
        // Try to count projects
        const projectCount = await prisma.project.count()
        
        return NextResponse.json({
            status: 'success',
            message: 'Database connection successful',
            projectCount,
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        console.error('Database connection error:', error)
        
        return NextResponse.json(
            { 
                status: 'error',
                error: 'Database connection failed',
                message: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        )
    } finally {
        await prisma.$disconnect()
    }
}
