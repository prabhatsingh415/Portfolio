import { useRef } from "react";
import {
  htmlLogo,
  javaLogo,
  springbootLogo,
  cssLogo,
  tailWindLogo,
  javascriptLogo,
  reactLogo,
  reduxLogo,
  mySqlLogo,
  gitLogo,
  githubLogo,
  dockerLogo,
  postmanLogo,
} from "../index";
import { useAnimation } from "../hooks/useAnimation";

const skillsData = [
  {
    name: "Java",
    logo: javaLogo,
    desc: "Backend programming language for enterprise and Android apps.",
  },
  {
    name: "Spring Boot",
    logo: springbootLogo,
    desc: "Java framework for building REST APIs and backend services.",
  },
  { name: "HTML", logo: htmlLogo, desc: "Structures the content of websites." },
  { name: "CSS", logo: cssLogo, desc: "Styles and formats web pages." },
  {
    name: "Tailwind CSS",
    logo: tailWindLogo,
    desc: "Utility-first CSS framework for faster UI design.",
  },
  {
    name: "JavaScript",
    logo: javascriptLogo,
    desc: "Adds interactivity and logic to websites.",
  },
  {
    name: "React.js",
    logo: reactLogo,
    desc: "JavaScript library for building UI components.",
  },
  {
    name: "Redux",
    logo: reduxLogo,
    desc: "State management tool for React apps.",
  },
  {
    name: "MySQL",
    logo: mySqlLogo,
    desc: "Database for storing and managing data.",
  },
  {
    name: "Git",
    logo: gitLogo,
    desc: "Version control system to track code changes.",
  },
  {
    name: "GitHub",
    logo: githubLogo,
    desc: "Code hosting platform for collaboration.",
  },
  {
    name: "Docker",
    logo: dockerLogo,
    desc: "Container platform for deploying apps anywhere.",
  },
  {
    name: "Postman",
    logo: postmanLogo,
    desc: "API testing and development tool.",
  },
];

function SkillsSection() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);

  return (
    <div ref={sectionRef} className="flex flex-col gap-4">
      <div className="h-auto w-full p-2 text-3xl border-2 border-zinc-900 rounded-xl text-white">
        SKILLS & TOOLS
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-2 border-zinc-900 rounded-xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="group h-auto flex flex-col p-2 justify-center items-center transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl hover:z-10 bg-zinc-900 border-2 border-gray-950 rounded-xl cursor-pointer"
          >
            <div
              className="h-15 w-15 bg-center mb-2 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${skill.logo})` }}
            />
            <div className="flex flex-col gap-2 text-center">
              <p>{skill.name}</p>
              <p
                className="
                    hidden
                    lg:block
                    text-zinc-400 text-sm text-center mt-1 min-h-[3rem]
                    opacity-0 lg:opacity-0 lg:group-hover:opacity-100
                    transition-opacity duration-300"
              >
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
