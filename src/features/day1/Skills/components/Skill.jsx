function Skill({ skill, index }) {
  return (
    <div
      key={index}
      className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
          {skill.name}
        </h3>
        <span className="text-gray-400 font-medium">{skill.progress}%</span>
      </div>
      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out ${skill.color}`}
          style={{ width: `${skill.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
