import React from "react";

function Bio() {
  function downloadCV() {
    const link = document.createElement("a");
    link.href = "/public/Hazem Abdulmoneim - Resume.pdf";
    link.download = "Hazem Abdulmoneim - CV.pdf";
    link.click();
    link.remove();
  }

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="mb-6 text-md">
              <span className="px-5 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-purple-300 font-medium">
                Get to know me
              </span>
            </div>
            <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-tight">
              About Me
            </span>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi there! I'm Hazem Abdulmoneim, a passionate full-stack
                developer with a love for creating beautiful and functional web
                applications. With expertise in &nbsp;
                <span className="text-purple-400 font-semibold">
                  Vue.js
                </span>{" "}
                and
                <span className="text-pink-400 font-semibold"> Laravel</span>, I
                bring ideas to life through code.
              </p>

              <p>
                My journey in web development started with curiosity and has
                evolved into a passion for crafting digital experiences that
                make a difference. I believe in writing clean, maintainable code
                and staying up-to-date with the latest technologies and best
                practices.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                reading books to strengthen my knowledge, or enjoying a good cup
                of coffee while planning my next project.
              </p>
            </div>
            <div className="pt-6">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => downloadCV}
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                Download CV
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-84 h-84 md:w-110 md:h-110 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
            <div className="w-75 h-75 md:w-100 md:h-100 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center overflow-hidden">
              <img
                src="/public/488997303_1170131905123655_6218814459474291714_n.png"
                alt="Profile photo"
                className="w-full h-full object-cover rounded-full scale-200 translate-y-35 translate-x-3"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
