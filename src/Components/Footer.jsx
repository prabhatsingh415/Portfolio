function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="font-sansations w-full rounded-xl bg-zinc-950 text-white py-6 border-t border-zinc-900 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left space-y-1">
          <p>© 2025 Prabhat Singh. All rights reserved.</p>
          <p>Developed by Prabhat Singh</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            onClick={scrollToTop}
            className="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded-md transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:z-10 hover:shadow-zinc-700"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
