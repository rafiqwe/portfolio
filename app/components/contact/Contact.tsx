"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const RightContent = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // DESKTOP
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: RightContent.current,
      });

      leftRefs.current.forEach((item, index) => {
        const rightItem = rightRefs.current[index];
        if (!rightItem) return;
        if (index === 0) return;

        gsap.set(rightItem, { yPercent: 101 });

        ScrollTrigger.create({
          trigger: item,
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          animation: gsap.to(rightItem, {
            yPercent: 0,
            ease: "none",
          }),
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // MOBILE
    });
  });

  return (
    <div
      ref={mainRef}
      className="flex flex-col md:flex-row overflow-hidden w-full h-full relative justify-between bg-black text-white"
    >
      {/* LEFT SIDE */}
      <div ref={mainRef} className="w-full md:w-1/2">
        {/* SECTION 1 — SOCIAL MEDIA */}
        <div
          ref={(el) => {
            leftRefs.current[0] = el!;
          }}
          className="min-h-screen flex flex-col items-center justify-center p-8 gap-6"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Connect With Me
          </h2>

          <p className="max-w-md text-gray-300 text-lg text-center">
            I’m active on all major platforms. Feel free to reach out or follow
            me!
          </p>

          <div className="flex gap-6 mt-6">
            <a
              href="#"
              className="text-white text-3xl hover:text-blue-400 duration-200"
            >
              🌐
            </a>
            <a
              href="#"
              className="text-white text-3xl hover:text-pink-400 duration-200"
            >
              📸
            </a>
            <a
              href="#"
              className="text-white text-3xl hover:text-blue-500 duration-200"
            >
              🐦
            </a>
            <a
              href="#"
              className="text-white text-3xl hover:text-purple-400 duration-200"
            >
              🎨
            </a>
          </div>
        </div>

        {/* SECTION 2 — CONTACT FORM */}
        <div
          ref={(el) => {
            leftRefs.current[1] = el!;
          }}
          className="min-h-screen flex flex-col items-center justify-center p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>

          <form className="w-full max-w-md flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none"
            />

            <button
              type="submit"
              className="p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={RightContent}
        className="w-full md:w-1/2 flex items-center justify-center h-screen md:sticky md:top-0 relative"
      >
        {/* RIGHT 1 */}
        <div
          ref={(el) => {
            rightRefs.current[0] = el!;
          }}
          className="absolute md:h-screen w-full  flex items-center justify-center text-3xl font-bold"
        >
          <h1>RED CONTENT</h1>
        </div>

        {/* RIGHT 2 */}
        <div
          ref={(el) => {
            rightRefs.current[1] = el!;
          }}
          className="absolute md:h-screen w-full flex items-center justify-center text-3xl font-bold"
        >
          <h1>GREEN CONTENT</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
