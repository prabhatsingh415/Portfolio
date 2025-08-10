import { useRef } from "react";
import pic from "../assets/images/image.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
function HeroSection() {
  const nameRef = useRef(null);
  // useGSAP(() => {
  //   gsap.from(nameRef.current, {
  //     y: 50,
  //     duration: 1,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: nameRef.current,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // });
  const titles = ["PRABHAT SINGH", "प्रभात सिंह", "प्रभातसिंहः"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(loop);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      nameRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [index]);

  return (
    <div className="h-35 md:h-40 p-2 flex items-center justify-normal gap-4 md:gap-16 w-full bg-black border-2 border-zinc-900 rounded-xl">
      <div
        className="h-3/4 w-1/3 md:h-full md:w-1/5 rounded-full"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div
        ref={nameRef}
        className="text-md md:text-3xl text-center font-extrabold"
      >
        {titles[index]}
        <p className="text-sm font-light">hacker</p>
      </div>
    </div>
  );
}

export default HeroSection;
