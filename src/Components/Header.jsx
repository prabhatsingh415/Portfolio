import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
function Header() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  return (
    <header
      ref={sectionRef}
      className="sticky top-0 w-full h-auto p-2 font-googleSans flex justify-around gap-8 border-2 bg-black border-zinc-900 rounded-xl z-50"
    >
      <a
        href="/newResume.pdf" 
        download="Prabhat_Singh_Resume.pdf"
        className="transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-xl hover:z-10 hover:shadow-zinc-700"
      >
        RESUME
      </a>

      <a
        href="#projectSection"
        className="transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:z-10 hover:shadow-zinc-700"
      >
        PROJECTS
      </a>
      <a
        href="#aboutSection"
        className="transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:z-10 hover:shadow-zinc-700"
      >
        ABOUT
      </a>
    </header>
  );
}

export default Header;
