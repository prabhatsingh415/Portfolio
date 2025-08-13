import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
function Banner() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center text-7xl font-monoton bg-black h-48 w-full text-white border-2 border-zinc-900 rounded-xl"
    >
      P.S.
    </div>
  );
}

export default Banner;
