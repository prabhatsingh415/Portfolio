import "./App.css";
import background from "./assets/Space_Background.mp4";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Overview from "./Components/Overview";
function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={background} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col gap-8 mt-4 h-screen w-80 md:w-1/2 bg-black text-white">
        <Header />
        <Banner />
        <HeroSection />
        <Overview />
      </div>
    </div>
  );
}

export default App;
