import { useRef, useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import { useAnimation } from "../hooks/useAnimation";
import { profile, location, computer, globe, email } from "../index";

const Icon = ({ animationData, playing }) => {
  const { View, play, stop } = useLottie({
    animationData,
    loop: false,
    autoplay: false,
    style: { width: "100%", height: "100%" },
  });

  useEffect(() => {
    playing ? play() : stop();
  }, [playing, play, stop]);

  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
      {View}
    </div>
  );
};

export default function Overview() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  const [hoverIndex, setHoverIndex] = useState(null);

  const items = [
    { icon: profile, text: "Aspiring Software Engineer" },
    { icon: computer, text: "Computer Science Student" },
    { icon: location, text: "Kota, Rajasthan, INDIA" },
    {
      icon: globe,
      text: "www.myportfolio.com",
      link: "https://prabhatsingh-two.vercel.app/",
    },
    { icon: email, text: "singh.prabhat.work@gmail.com" },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-auto w-full flex flex-col flex-wrap font-sansations bg-black border-2 border-zinc-900 rounded-xl p-6 sm:p-8 space-y-4 text-white"
    >
      {items.map(({ icon, text, link }, i) => (
        <div
          key={i}
          className="w-full flex items-center gap-3 sm:gap-4"
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <Icon animationData={icon} playing={hoverIndex === i} />
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs sm:text-sm md:text-md break-words cursor-pointer"
            >
              {text}
            </a>
          ) : (
            <span className="flex-1 text-xs sm:text-sm md:text-md break-words">
              {text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
