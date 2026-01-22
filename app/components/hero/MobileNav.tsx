"use client";

import { RefObject } from "react";
import { XIcon } from "lucide-react";
import { Link } from "react-scroll";

type MobileNavProps = {
  navMoblieRef: RefObject<HTMLDivElement | null>;
  mobileItemsRef: RefObject<HTMLDivElement[]>;
  closeMenu: () => void;
};

const MoblieNav = ({
  navMoblieRef,
  mobileItemsRef,
  closeMenu,
}: MobileNavProps) => {
  const links = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skill" },
    { label: "Projects", to: "project" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav
      ref={navMoblieRef}
      aria-label="Mobile Navigation"
      className="
        fixed inset-0 z-51
        bg-black backdrop-blur-2xl
        translate-x-full h-screen 
      "
    >
      {/* Close Button */}
      <button
        aria-label="Close menu"
        onClick={closeMenu}
        className="
          absolute top-6 right-6
          rounded-full p-2
          bg-white/10 hover:bg-white/20
          transition cursor-pointer
        "
      >
        <XIcon size={32} className="text-white" />
      </button>

      {/* Nav Items */}
      <div className="h-full flex flex-col items-center justify-center gap-8">
        {links.map((item, i) => (
          <div
            key={item.to}
            ref={(el) => {
              if (el && mobileItemsRef.current) {
                mobileItemsRef.current[i] = el;
              }
            }}
          >
            <Link
              to={item.to}
              smooth
              duration={700}
              spy
              onClick={closeMenu}
              className="
                text-3xl md:text-4xl
                font-corporatus
                capitalize
                tracking-wide
                text-white/80
                cursor-pointer
                transition-all duration-300
                hover:text-white hover:tracking-widest
                focus:outline-none focus:text-white
              "
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MoblieNav;
