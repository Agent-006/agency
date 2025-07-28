"use client";

import React, { Suspense, useEffect, useState } from "react";
import { WebGLErrorBoundary } from "@/components/error-boundaries/WebGLErrorBoundary";
import { useWebGLSupport, useDeviceCapabilities } from "@/hooks/useWebGLSupport";

// Lazy load the original Beams component
const BeamsCore = React.lazy(() => 
    import("@/components/reactbits/Beams/Beams").then(module => ({ 
        default: module.default 
    }))
);

interface EnhancedBeamsProps {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
    className?: string;
    fallback?: React.ReactNode;
}

const BeamsFallback = ({ className }: { className?: string }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-t from-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform translate-x-6 w-px h-24 bg-gradient-to-t from-blue-400/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-6 w-px h-24 bg-gradient-to-t from-blue-400/30 to-transparent" />
    </div>
);

const LoadingBeams = ({ className }: { className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
    </div>
);

export const EnhancedBeams: React.FC<EnhancedBeamsProps> = ({
    beamWidth = 2,
    beamHeight = 15,
    beamNumber = 12,
    lightColor = "#ffffff",
    speed = 2,
    noiseIntensity = 1.75,
    scale = 0.2,
    rotation = 0,
    className,
    fallback
}) => {
    const { isSupported, isLoading } = useWebGLSupport();
    const { isLowEndDevice } = useDeviceCapabilities();
    const [shouldRender, setShouldRender] = useState(false);

    // Delay rendering to prevent hydration issues
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender || isLoading) {
        return <LoadingBeams className={className} />;
    }

    if (!isSupported) {
        return fallback || <BeamsFallback className={className} />;
    }

    // Adjust parameters for low-end devices
    const adjustedProps = {
        beamWidth,
        beamHeight,
        beamNumber: isLowEndDevice ? Math.max(6, Math.floor(beamNumber / 2)) : beamNumber,
        lightColor,
        speed: isLowEndDevice ? speed * 0.5 : speed,
        noiseIntensity: isLowEndDevice ? noiseIntensity * 0.7 : noiseIntensity,
        scale,
        rotation,
    };

    return (
        <WebGLErrorBoundary fallback={fallback || <BeamsFallback className={className} />}>
            <Suspense fallback={<LoadingBeams className={className} />}>
                <div className={className}>
                    <BeamsCore {...adjustedProps} />
                </div>
            </Suspense>
        </WebGLErrorBoundary>
    );
};
