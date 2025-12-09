// src/hooks/useCountUp.js
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for animated counting effect.
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} start - Whether to start the animation
 * @returns {number} Current animated value
 */
export default function useCountUp(end, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        // Easing function for smooth deceleration
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const animate = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we land exactly on the target
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            startTimeRef.current = null;
        };
    }, [end, duration, start]);

    return count;
}
