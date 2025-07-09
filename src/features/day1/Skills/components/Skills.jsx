import React from "react";
import Skill from "./Skill";

function Skills() {
  const skills = [
    { name: "Vue.js", progress: 90, color: "from-green-500 to-emerald-600" },
    { name: "Laravel", progress: 85, color: "from-red-500 to-red-600" },
    {
      name: "JavaScript",
      progress: 88,
      color: "from-yellow-500 to-orange-600",
    },
    { name: "PHP", progress: 82, color: "from-blue-500 to-indigo-600" },
    { name: "MySQL", progress: 78, color: "from-blue-600 to-blue-700" },
    { name: "HTML/CSS", progress: 92, color: "from-orange-500 to-red-500" },
    { name: "Git", progress: 50, color: "from-gray-600 to-gray-700" },
    { name: "Angular", progress: 30, color: "from-red-600 to-red-700" },
  ];

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="px-5 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-300 font-medium">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My ever-so-exapnding tech stack!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Skill skill={skill} idx={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
