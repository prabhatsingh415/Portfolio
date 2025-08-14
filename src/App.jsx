import "./App.css";
import background from "./assets/videos/background.mp4";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Overview from "./Components/Overview";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import SkillsSection from "./Components/SkillsSection";
import About from "./Components/About";
import ProjectSection from "./Components/ProjectSection";
import SocialsAndContact from "./Components/SocialsAndContact";
import Footer from "./Components/Footer";
// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  //lenis + scrollTrigger setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Refresh ScrollTrigger after mount
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);
  //reload animation
  const sectionRef = useRef(null);
  useGSAP(() => {
    //intro animation
    gsap.from(sectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
  });
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col gap-8 mt-4 w-80 md:w-1/2 bg-black text-white rounded-xl p-4"
      >
        <Header />
        <Banner />
        <HeroSection />
        <Overview />
        <About />
        <SkillsSection />
        <ProjectSection />
        <SocialsAndContact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
