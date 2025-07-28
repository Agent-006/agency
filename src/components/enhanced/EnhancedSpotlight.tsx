"use client";

import React, { useEffect, useState } from "react";
import { WebGLErrorBoundary } from "@/components/error-boundaries/WebGLErrorBoundary";
import { useDeviceCapabilities } from "@/hooks/useWebGLSupport";

// Lazy load the original Spotlight component
const SpotlightCore = React.lazy(() => 
    import("@/components/ui/spotlight-new").then(module => ({ 
        default: module.Spotlight 
    }))
);

interface EnhancedSpotlightProps {
    gradientFirst?: string;
    gradientSecond?: string;
    gradientThird?: string;
    translateY?: number;
    width?: number;
    height?: number;
    smallWidth?: number;
    duration?: number;
    xOffset?: number;
    className?: string;
    fallback?: React.ReactNode;
}

const SpotlightFallback = ({ className }: { className?: string }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/3 to-transparent" />
    </div>
);

const LoadingSpotlight = ({ className }: { className?: string }) => (
    <div className={`absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 animate-pulse ${className}`} />
);

export const EnhancedSpotlight: React.FC<EnhancedSpotlightProps> = ({
    gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
    gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
    gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
    translateY = -350,
    width = 560,
    height = 1380,
    smallWidth = 240,
    duration = 7,
    xOffset = 100,
    className,
    fallback
}) => {
    const { isLowEndDevice, isMobile } = useDeviceCapabilities();
    const [shouldRender, setShouldRender] = useState(false);

    // Delay rendering to prevent hydration issues
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) {
        return <LoadingSpotlight className={className} />;
    }

    // Adjust parameters for low-end devices
    const adjustedProps = {
        gradientFirst: isLowEndDevice ? gradientFirst.replace(/\.0[0-9]+/g, match => 
            (parseFloat(match) * 0.5).toString()
        ) : gradientFirst,
        gradientSecond: isLowEndDevice ? gradientSecond.replace(/\.0[0-9]+/g, match => 
            (parseFloat(match) * 0.5).toString()
        ) : gradientSecond,
        gradientThird: isLowEndDevice ? gradientThird.replace(/\.0[0-9]+/g, match => 
            (parseFloat(match) * 0.5).toString()
        ) : gradientThird,
        translateY,
        width: isLowEndDevice ? width * 0.7 : width,
        height: isLowEndDevice ? height * 0.7 : height,
        smallWidth: isLowEndDevice ? smallWidth * 0.7 : smallWidth,
        duration: isLowEndDevice ? duration * 1.5 : duration, // Slower animation
        xOffset: isMobile ? xOffset * 0.5 : xOffset,
    };

    return (
        <WebGLErrorBoundary fallback={fallback || <SpotlightFallback className={className} />}>
            <React.Suspense fallback={<LoadingSpotlight className={className} />}>
                <div className={className}>
                    <SpotlightCore {...adjustedProps} />
                </div>
            </React.Suspense>
        </WebGLErrorBoundary>
    );
};
