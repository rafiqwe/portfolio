import React, { useRef, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

interface RightContactProps {
  RightContent: React.RefObject<HTMLDivElement | null>;
  rightRefs: React.RefObject<HTMLDivElement[]>;
  imageLink: {
    link: string;
    image: string;
  } | null;
}

const RightContact = ({
  RightContent,
  rightRefs,
  imageLink,
}: RightContactProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  // 1. Form and status state management
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  
  const service_Id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_emailjs_service_id";
  const template_Id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_emailjs_template_id";
  const public_Key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_emailjs_public_key";

  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  }, [imageLink]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    console.log("EmailJS Params:", { templateParams, template_Id, service_Id, public_Key });

    try {
      await emailjs.send(
        service_Id,
        template_Id,
        templateParams,
        public_Key    
      );


      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  return (
    <div
      ref={RightContent}
      className="w-full md:w-1/2 h-[76vh] flex items-center justify-center md:h-screen md:sticky md:top-0 relative "
    >
      {/* RIGHT SECTION 1 — SOCIAL MEDIA VISUAL */}
      <div
        ref={(el) => {
          if (rightRefs.current) rightRefs.current[0] = el!;
        }}
        className="absolute  md:h-screen w-full flex items-center justify-center"
      >
        <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg max-w-md w-full text-center">
          <div className={`${imageLink ? "opacity-0" : "opacity-100"}`}>
            <h1 className="text-4xl text-white font-bold mb-4">Let`s Connect</h1>
            <p className="text-gray-300 mb-4">
              Stay connected with me across social platforms.
            </p>
          </div>

          <div
            className={`w-full h-40  ${
              imageLink
                ? ""
                : "from-purple-500/40 bg-linear-to-br to-blue-500/40"
            }  rounded-xl  flex items-center justify-center`}
          >
            <span className="text-white text-xl opacity-80">
              {imageLink ? (
                <Link href={imageLink.link} target="_blank">
                  <div className="w-full h-full">
                    <Image
                      ref={imageRef}
                      src={imageLink.image}
                      alt="social media preview"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </Link>
              ) : (
                "Hover on a social icon to see preview"
              )}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION 2 — CONTACT FORM */}
      <div
        ref={(el) => {
          if (rightRefs.current) rightRefs.current[1] = el!;
        }}
        className="absolute md:h-screen h-full bg-black p-5 w-full flex items-center justify-center"
      >
        <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Send me a message
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* NAME */}
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <User className="text-white opacity-80" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <Mail className="text-white opacity-80" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <MessageSquare className="text-white opacity-80 mt-1" size={20} />
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message..."
                className="w-full bg-transparent outline-none resize-none text-white placeholder-gray-300"
              />
            </div>

            {/* STATUS NOTIFICATION TEXT */}
            {status.type !== "idle" && (
              <p
                className={`text-center text-sm font-medium ${
                  status.type === "success"
                    ? "text-green-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-purple-300 animate-pulse"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className={`mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg transition-all duration-300 ${
                status.type === "loading"
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 cursor-pointer"
              }`}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightContact;