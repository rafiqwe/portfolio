"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const SocialLink = ({
  item,
}: {
  item: { name: string; url: string; image: string };
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLLIElement>(null);
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const mobileCheck =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsMobile(mobileCheck);
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      if (isMobile) return; // Disable animation on mobile

      xTo.current = gsap.quickTo(imageRef.current, "x", {
        duration: 0.3,
        ease: "power3.out",
      });

      yTo.current = gsap.quickTo(imageRef.current, "y", {
        duration: 0.3,
        ease: "power3.out",
      });
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (isMobile) return;

    xTo.current?.(e.clientX);
    yTo.current?.(e.clientY);
  });

  const handleMouseEnter = contextSafe(() => {
    if (isMobile) return;

    gsap.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(".cursor", { opacity: 0, duration: 0.2 });
  });

  const handleMouseLeave = contextSafe(() => {
    if (isMobile) return;

    gsap.to(imageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(".cursor", { opacity: 1, duration: 0.2 });
  });

  return (
    <>
      <li
        ref={containerRef}
        className="relative z-10 mix-blend-difference cursor-pointer select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Link href={item.url} className="inline-block text-xl md:text-2xl">
          {item.name}
        </Link>
      </li>

      {/* Floating Image */}
      {!isMobile && (
        <div
          ref={imageRef}
          className="
            fixed top-0 left-0 pointer-events-none z-50 overflow-hidden 
            rounded-lg 
            w-[120px] h-[120px] md:w-[200px] md:h-[200px]
          "
          style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      )}
    </>
  );
};

export default SocialLink;
