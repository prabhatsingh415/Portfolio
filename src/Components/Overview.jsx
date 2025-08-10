import React from "react";
import { useLottie } from "lottie-react";

import profile from "../assets/icons/wired-outline-680-it-developer-hover-pinch.json";
import location from "../assets/icons/wired-outline-18-location-pin-hover-jump.json";
import computer from "../assets/icons/wired-outline-478-computer-display-hover-angle.json";
import globe from "../assets/icons/wired-outline-27-globe-hover-rotate.json";
import email from "../assets/icons/wired-outline-177-envelope-send-hover-flying.json";

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
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const items = [
    { icon: profile, text: "Aspiring Software Engineer" },
    { icon: computer, text: "Computer Science Student" },
    { icon: location, text: "Kota, Rajasthan, INDIA" },
    { icon: globe, text: "www.myportfolio.com" },
    { icon: email, text: "work.singh.prabhat@gmail.com" },
  ];

  return (
    <div className="h-80 w-full bg-black border-2 border-zinc-900 rounded-xl p-8 space-y-4 text-white">
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
