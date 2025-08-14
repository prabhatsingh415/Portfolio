import { useRef, useState, useEffect } from "react";
import pic from "../assets/images/profile.png";
import { useAnimation } from "../hooks/useAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);

  // Names toggle (English + Hindi)
  const titles = ["PRABHAT SINGH", "प्रभात सिंह"];

  // Description lines (single-line toggle)
  const descriptions = [
    "Always curious, learning, and trying new tech adventures.",
    "Passionate about building apps that actually solve problems.",
    "Coffee in hand, debugging in progress, learning always.",
  ];

  const [index, setIndex] = useState(0);

  // Cycle description + name every 2s
  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 3500);
    return () => clearInterval(loop);
  }, []);

  const textRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [index]);

  return (
    <div
      ref={sectionRef}
      className="p-3 flex flex-row items-center gap-4 md:gap-8 w-full bg-black border-2 border-zinc-900 rounded-xl"
    >
      <img
        src={pic}
        alt="Prabhat Singh"
        className="w-24 md:w-28 lg:w-36 aspect-square rounded-full object-cover object-top border-2 border-white"
      />

      <div ref={textRef} className="flex flex-col items-start text-left">
        <h1 className="font-googleSans text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
          {index % 2 === 0 ? titles[0] : titles[1]}
        </h1>

        <p className="font-sansations mt-2 text-sm sm:text-base md:text-base text-zinc-300">
          {descriptions[index]}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
