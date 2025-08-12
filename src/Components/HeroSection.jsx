import { useRef } from "react";
import pic from "../assets/images/image.png";
import { useState, useEffect } from "react";
function HeroSection() {
  const nameRef = useRef(null);
  const titles = ["PRABHAT SINGH", "प्रभात सिंह"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(loop);
  }, []);

  return (
    <div className="h-35 md:h-40 p-2 flex items-center justify-normal gap-4 md:gap-16 w-full bg-black border-2 border-zinc-900 rounded-xl">
      <div
        className="h-3/4 w-1/3 md:h-full md:w-1/5 rounded-full border-2 border-white"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div
        ref={nameRef}
        className="text-md md:text-3xl text-center font-extrabold w-[150px] md:w-[400px] md:mx-auto"
      >
        {titles[index]}
        <p className="text-sm font-light">hacker</p>
      </div>
    </div>
  );
}

export default HeroSection;
