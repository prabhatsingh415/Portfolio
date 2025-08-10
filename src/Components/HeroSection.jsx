import pic from "../assets/image.png";
function HeroSection() {
  return (
    <div className="h-40 p-2 flex items-center justify-center gap-4 w-full bg-black border-2 border-zinc-900 rounded-xl">
      <div
        className="h-full w-1/2 md:w-1/5 rounded-full"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="text-xl text-center font-extrabold">
        prabhat singh
        <p className="text-sm font-light">hacker</p>
      </div>
    </div>
  );
}

export default HeroSection;
