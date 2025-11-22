'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Center the cursor on the mouse position
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            xTo(clientX);
            yTo(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={cursorRef} 
            className="cursor fixed top-0 left-0 w-5 h-5 bg-gray-400 rounded-full pointer-events-none z-[999999] mix-blend-difference"
        />
    );
}

export default Cursor