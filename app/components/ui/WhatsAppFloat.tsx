// components/ui/WhatsAppFloat.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const WhatsAppFloat = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const [online] = useState(true); // later you can make this dynamic

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Initial animation
    gsap.fromTo(
      btn,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 100) {
        // scroll down → hide
        gsap.to(btn, {
          y: 120,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // scroll up → show
        gsap.to(btn, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={btnRef}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/8801329335954"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-black px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        {/* STATUS DOT */}
        <span className="relative flex h-3 w-3">
          {online && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
          )}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold">WhatsApp</span>
          <span className="text-xs">
            {online ? "Online — Tap to chat" : "Offline"}
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
