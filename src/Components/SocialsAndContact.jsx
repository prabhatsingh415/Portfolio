import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { x, linkedin, fiverr, githubWhite } from "../index";
import ContactForm from "./ContactFrom";
function SocialsAndContact() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);

  const data = [
    {
      icon: x,
      desc: "Follow me on X for quick updates and tech thoughts",
      link: "https://x.com/Prabhatsingh415",
    },
    {
      icon: linkedin,
      desc: "Connect with me professionally on LinkedIn and see my work history",
      link: "https://www.linkedin.com/in/prabhat-singh-rj415/",
    },
    {
      icon: fiverr,
      desc: "Hire me on Fiverr to get your projects built professionally",
      link: "https://www.fiverr.com/s/2K8kzzLe",
    },
    {
      icon: githubWhite,
      desc: "Check out my code repositories and projects on GitHub",
      link: "https://github.com/prabhatsingh415",
    },
  ];

  return (
    <div ref={sectionRef} className="flex flex-col gap-4">
      <div className="w-full h-auto font-googleSans text-3xl border-2 border-zinc-900 rounded-xl p-4">
        CONNECT WITH ME
      </div>

      <div className="w-full flex flex-col gap-4 p-4 border-2 border-zinc-900 rounded-xl">
        {data.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div
              className="w-full font-sansations flex items-center gap-4 border-2 bg-zinc-950 border-zinc-900 p-4 rounded-xl transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-lg hover:z-10 hover:shadow-zinc-700"
            >
              <img
                src={item.icon}
                alt={item.desc}
                className="w-16 h-24 object-contain "
              />
              <span>{item.desc}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="w-full h-auto font-googleSans mt-4 text-3xl border-2 border-zinc-900 rounded-xl p-4">
        CONTACT ME
      </div>
      <div className="w-full h-auto font-googleSans text-3xl border-2 border-zinc-900 rounded-xl p-4">
        <ContactForm />
      </div>
    </div>
  );
}

export default SocialsAndContact;
