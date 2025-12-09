// src/components/LazyComponents.jsx
// Lazy loaded components for performance optimization
import React, { lazy, Suspense } from "react";

// Loading fallback component
const LoadingFallback = ({ height = "200px" }) => (
    <div
        className="flex items-center justify-center bg-gold/5 rounded-xl animate-pulse"
        style={{ height }}
    >
        <span className="text-gold/50 text-sm">Loading...</span>
    </div>
);

// Lazy load heavy components
export const LazyYantra3D = lazy(() => import("./Yantra3D"));
export const LazyTimeline = lazy(() => import("./Timeline"));
export const LazyCodeShowcase = lazy(() => import("./CodeShowcase"));
export const LazyAuditModal = lazy(() => import("./AuditModal"));

// Wrapper components with Suspense
export function Yantra3DLazy(props) {
    return (
        <Suspense fallback={<LoadingFallback height="500px" />}>
            <LazyYantra3D {...props} />
        </Suspense>
    );
}

export function TimelineLazy(props) {
    return (
        <Suspense fallback={<LoadingFallback height="400px" />}>
            <LazyTimeline {...props} />
        </Suspense>
    );
}

export function CodeShowcaseLazy(props) {
    return (
        <Suspense fallback={<LoadingFallback height="300px" />}>
            <LazyCodeShowcase {...props} />
        </Suspense>
    );
}

// Performance optimization utilities
export const performanceConfig = {
    // Intersection Observer options for lazy loading
    observerOptions: {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
    },

    // Image optimization settings
    imageOptimization: {
        lazy: true,
        decoding: "async",
        loading: "lazy",
    },

    // Animation settings for reduced motion preference
    getAnimationSettings: () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        return {
            animate: !prefersReducedMotion,
            transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.5 },
        };
    },

    // Debounce utility for scroll handlers
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle utility for resize handlers
    throttle: (func, limit) => {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    },
};

// Hook for checking if element is in viewport
export function useIntersectionObserver(ref, options = {}) {
    const [isIntersecting, setIsIntersecting] = React.useState(false);

    React.useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { ...performanceConfig.observerOptions, ...options });

        observer.observe(element);

        return () => observer.disconnect();
    }, [ref, options]);

    return isIntersecting;
}

export default {
    LazyYantra3D,
    LazyTimeline,
    LazyCodeShowcase,
    performanceConfig,
    useIntersectionObserver,
};
