import React from "react";
import { useAnimation } from "../hooks/useAnimation";
import { useRef } from "react";

function About() {
  const sectionRef = useRef(null);
  useAnimation(sectionRef);
  return (
    <div ref={sectionRef} className="h-auto w-full flex flex-col gap-4">
      <div className="h-auto w-full text-3xl border-2 border-zinc-900 p-2 rounded-xl">
        About
      </div>
      <div className="h-auto p-4 w-full border-2 border-zinc-900 rounded-xl flex flex-wrap flex-col gap-4">
        <p>
          I’m a{" "}
          <a
            href="https://www.coursera.org/articles/full-stack-developer"
            target="_blank"
            className="underline underline-offset-4"
          >
            Full Stack Developer
          </a>
          {"  "}
          with a strong foundation in Java, Spring Boot, React, Tailwind CSS,
          and experience working with various databases.
        </p>
        <p>
          I specialize in building responsive, user-friendly web applications
          with smooth functionality and modern design. Currently, I’m expanding
          my skills in mobile app development to create high-quality,
          cross-platform applications. I enjoy turning ideas into working
          solutions, from planning and designing to coding and deployment.
        </p>
        <p>
          I’m passionate about learning new technologies, optimizing
          performance, and writing clean, maintainable code. My goal is to
          create software that’s not only efficient and reliable but also
          provides an enjoyable user experience. this should target broader
          range and should be perfect !
        </p>
      </div>
    </div>
  );
}

export default About;
