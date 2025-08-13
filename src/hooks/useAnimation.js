import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAnimation(sectionRef) {
  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, [sectionRef]); // Add dependency to re-run if ref changes
}
