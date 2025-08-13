import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
function Header() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  return (
    <header
      ref={sectionRef}
      className="w-full h-8 flex justify-around gap-8 border-2 bg-black border-zinc-900 rounded-xl"
    >
      <a href="/" className="hover:border-b-2 border-[#00fff7]">
        home
      </a>
      <a href="/" className="hover:border-b-2 border-[#00fff7]">
        projects
      </a>
      <a href="/" className="hover:border-b-2 border-[#00fff7]">
        about``
      </a>
    </header>
  );
}

export default Header;
