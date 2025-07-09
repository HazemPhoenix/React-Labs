import React from "react";

function SocialLink({ social, index }) {
  return (
    <a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-16 h-16 bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-110 hover:rotate-6 ${social.color}`}
    >
      <i
        className={`${social.icon} text-2xl group-hover:scale-110 transition-transform duration-300`}
      ></i>
    </a>
  );
}

export default SocialLink;
