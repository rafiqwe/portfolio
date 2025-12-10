import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const LeftContact = ({
  mainRef,
  leftRefs,
  socialLink,
  handleMouseEnterLinks,
  setImageLink,
}: {
  mainRef: React.RefObject<HTMLDivElement | null>;
  leftRefs: React.RefObject<HTMLDivElement[]>;
  socialLink: {
    icon: React.ReactNode;
    link: string;
    image: string;
  }[];
  setImageLink: React.Dispatch<
    React.SetStateAction<{
      link: string;
      image: string;
    } | null>
  >;
  handleMouseEnterLinks: (imageLink: { link: string; image: string }) => void;
}) => {
  return (
    <div ref={mainRef} className="w-full md:w-1/2">
      {/* SECTION 1 — SOCIAL MEDIA */}
      <div
        ref={(el) => {
          leftRefs.current[0] = el!;
        }}
        className="md:h-screen h-full flex flex-col items-center justify-center p-8 gap-8"
      >
        <h2 className="text-4xl font-bold text-white">Connect with me</h2>

        <p className="text-gray-300 max-w-md text-center">
          Follow me on social platforms — Let’s build something awesome
          together.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-6">
          {socialLink.map((item, i) => (
            <a
              onMouseEnter={() =>
                handleMouseEnterLinks({
                  link: item.link,
                  image: item.image,
                })
              }
              onMouseLeave={() => setImageLink(null)}
              key={i}
              href={item.link}
              className="p-4 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-110 text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* SECTION 2 — CONTACT FORM TITLE */}
      <div
        ref={(el) => {
          leftRefs.current[1] = el!;
        }}
        className="md:h-screen h-full flex flex-col items-center justify-center p-8 gap-4"
      >
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>

        <p className="text-gray-300 max-w-md text-center">
          Have a project idea or want to collaborate? Drop a message anytime.
        </p>

        <div className="mt-6 p-6 rounded-2xl w-full max-w-md bg-white/10 backdrop-blur-xl shadow-lg border border-white/10">
          <Link href="mailto:muhammedrabbi.dev@gmail.com">
            <div className="flex items-center gap-3 text-white">
              <Mail size={26} />
              <span className="text-lg">muhammedrabbi.dev@gmail.com</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftContact;
