import "./App.css";
import background from "./assets/videos/Space_Background.mp4";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Overview from "./Components/Overview";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
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

    // Refresh ScrollTrigger after mount
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col gap-8 mt-4 w-80 md:w-1/2 bg-black text-white rounded-xl p-4">
        <Header />
        <Banner />
        <HeroSection />
        <Overview />
      </div>
    </div>
  );
}

export default App;
