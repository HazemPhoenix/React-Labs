import React from "react";

function Technology({ tech, index }) {
  return (
    <span
      className="px-3 py-1 bg-purple-500/20 text-pink-100 rounded-full text-xs font-medium border border-purple-500/30"
      key={index}
    >
      {tech}
    </span>
  );
}

export default Technology;
