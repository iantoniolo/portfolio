import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section
      id="skills"
      className="relative h-auto w-full bg-cover bg-center flex flex-col items-center justify-center bg-neutral-800 px-4 py-12 md:py-24"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-neutral-900 text-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl text-amber-400 mb-4">{skill.icon}</div>
            <h3 className="text-sm md:text-lg font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
