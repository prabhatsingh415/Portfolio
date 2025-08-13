import React from "react";
import { useLottie } from "lottie-react";
import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { profile, location, computer, globe, email } from "../index";

const Icon = ({ animationData, playing }) => {
  const { View, play, stop } = useLottie({
    animationData,
    loop: false,
    autoplay: false,
  });

  React.useEffect(() => {
    playing ? play() : stop();
  }, [playing, play, stop]);

  return <div className="w-10 h-10">{View}</div>;
};

export default function Overview() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const items = [
    { icon: profile, text: "Aspiring Software Engineer" },
    { icon: computer, text: "Computer Science Student" },
    { icon: location, text: "Kota, Rajasthan, INDIA" },
    { icon: globe, text: "www.myportfolio.com" },
    { icon: email, text: "work.singh.prabhat@gmail.com" },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-80 w-full bg-black border-2 border-zinc-900 rounded-xl p-8 space-y-4 text-white"
    >
      {items.map(({ icon, text }, i) => (
        <div
          key={i}
          className="flex items-center gap-4 cursor-pointer"
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <Icon animationData={icon} playing={hoverIndex === i} />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
