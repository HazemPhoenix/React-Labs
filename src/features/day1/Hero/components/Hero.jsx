function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-purple-300 text-md font-medium backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hello! I'm
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Hazem Abdulmoneim
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          A passionate &nbsp;
          <span className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
            full-stack Vue/Laravel
          </span>{" "}
          &nbsp; developer
        </p>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Crafting digital experiences with modern technologies, turning ideas
          into beautiful, functional web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPortfolio}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            View My Work
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 rounded-full font-semibold text-lg cursor-pointer hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            <i className="fas fa-envelope mr-2"></i>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
