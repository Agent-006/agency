"use client";

import { useState, useEffect } from "react";

export function useWebGLSupport() {
    const [isSupported, setIsSupported] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if we're on the client side
        if (typeof window === "undefined") {
            setIsLoading(false);
            return;
        }

        // Check for basic WebGL support
        const checkWebGLSupport = () => {
            try {
                const canvas = document.createElement("canvas");
                const gl = (canvas.getContext("webgl") ||
                    canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
                
                if (!gl) {
                    return false;
                }

                // Check for required extensions
                const requiredExtensions = [
                    "OES_texture_float",
                    "OES_texture_half_float",
                    "WEBGL_depth_texture",
                ];

                for (const ext of requiredExtensions) {
                    if (!gl.getExtension(ext)) {
                        console.warn(`WebGL extension ${ext} not supported`);
                    }
                }

                // Test basic rendering capability
                const buffer = gl.createBuffer();
                if (!buffer) {
                    return false;
                }

                gl.deleteBuffer(buffer);
                return true;
            } catch (error) {
                console.warn("WebGL support check failed:", error);
                return false;
            }
        };

        // Add a small delay to prevent blocking initial render
        const timer = setTimeout(() => {
            const supported = checkWebGLSupport();
            setIsSupported(supported);
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return { isSupported, isLoading };
}

export function useDeviceCapabilities() {
    const [capabilities, setCapabilities] = useState({
        isMobile: false,
        isLowEndDevice: false,
        supportsWebGL: false,
        hardwareConcurrency: 1,
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

        const hardwareConcurrency = navigator.hardwareConcurrency || 1;
        const isLowEndDevice = hardwareConcurrency <= 2;

        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
        const supportsWebGL = !!gl;

        setCapabilities({
            isMobile,
            isLowEndDevice,
            supportsWebGL,
            hardwareConcurrency,
        });
    }, []);

    return capabilities;
}
