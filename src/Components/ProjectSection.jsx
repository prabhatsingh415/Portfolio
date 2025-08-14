import { useRef, useState } from "react";
import { project1 } from "../index";
import { useAnimation } from "../hooks/useAnimation";

const projectData = [
  {
    image: project1,
    title: "IRCTC Ticket Booking App",
    description:
      "A full-stack Java-based web application that replicates the IRCTC train ticket booking system with multi-step booking, user authentication, and session handling.",
    techStack: [
      "Java Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/prabhatsingh415/-irctc-app-backend.git",
    liveDemo: "https://irctc-rose.vercel.app/",
  },
  {
    image: project1,
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing my projects, skills, and contact details, built with animations and smooth scrolling effects.",
    techStack: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourdeploymentlink.com/portfolio",
  },
  {
    image: project1,
    title: "Email Validator",
    description:
      "A simple web application that validates email addresses in real-time using regular expressions and provides instant feedback to users.",
    techStack: ["HTML", "CSS", "JavaScript", "Regex"],
    github: "https://github.com/prabhatsingh415/Email_Validator.git",
    liveDemo: "https://emailvalidator-gilt.vercel.app/",
  },
];

function ProjectSection() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={sectionRef}
      id="projectSection"
      className="scroll-mt-28 flex flex-col gap-4"
    >
      <div className="w-full h-auto font-googleSans border-2 border-zinc-900 rounded-xl text-2xl sm:text-3xl p-2 ">
        PROJECTS
      </div>

      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-8 h-auto w-full border border-zinc-800 rounded-xl relative z-20">
        {projectData.map((project, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${
                isOpen
                  ? "w-[90vw] sm:w-[80vw] m-4 sm:m-8 h-auto sm:h-[80vh]"
                  : "w-full md:w-3/4"
              } 
              border border-gray-800 rounded-2xl p-2 flex flex-col items-center gap-4 cursor-pointer relative z-30 
            bg-neutral-950 transition-all duration-300 ease-in-out overflow-hidden 
              hover:-translate-y-2 hover:shadow-2xl hover:z-10`}
            >
              <div
                className="h-[30vh] sm:h-[40vh] w-full border-zinc-800 rounded-xl bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div
                className={`${
                  isOpen ? "h-auto" : "h-[5vh]"
                } mt-2 font-sansations flex flex-col items-center gap-4 sm:gap-8`}
              >
                <p className="text-center text-lg md:text-2xl">
                  {project.title}
                </p>
                {isOpen && (
                  <>
                    <p className="text-center w-full md:w-1/2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-300">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-zinc-800 rounded-full border border-zinc-700 transition-all duration-300 ease-out
                                     hover:-translate-y-2 hover:shadow-2xl hover:z-10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 p-2 rounded-2xl border-2 border-zinc-800 transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl hover:z-10 shadow-blue-400"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-2xl text-green-400 border-2 border-zinc-800 transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl hover:z-10 shadow-green-400"
                      >
                        Live Demo
                      </a>
                    </div>
                  </>
                )}
              </div>
              <button
                className={`${
                  isOpen
                    ? "border-2 border-red-600 text-red-600 shadow-red-600"
                    : "border-2 border-zinc-600 shadow-white"
                } p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl hover:z-10`}
                onClick={() => handleClick(index)}
              >
                {isOpen ? "Close" : "View Details"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
