import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaAws,
  FaJava,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiDjango,
  SiGit,
  SiGithub,
  SiNestjs,
  SiTypescript,
  SiServerless,
  SiJest,
  SiAmazondynamodb,
  SiGithubactions,
} from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  const skillGroups = [
    {
      category: t.skills.categories.backend,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Java", icon: <FaJava /> },
      ],
    },
    {
      category: t.skills.categories.frontend,
      skills: [
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      category: t.skills.categories.cloud,
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Serverless", icon: <SiServerless /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
      ],
    },
    {
      category: t.skills.categories.databases,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> },
        { name: "Jest", icon: <SiJest /> },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="relative h-auto w-full bg-cover bg-center flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-800 px-4 py-12 md:py-24 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
        {t.skills.title}
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillGroups.map((group, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? "bg-amber-400 text-black shadow-lg shadow-amber-400/25"
                : "bg-gray-200 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 justify-items-center">
          {skillGroups[activeTab].skills.map((skill, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="flex flex-col items-center justify-center bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-xl p-6 w-full max-w-[180px] shadow-lg transition-all duration-300 hover:shadow-amber-400/20 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <div className="text-4xl text-amber-400 mb-3">{skill.icon}</div>
              <h4 className="text-sm md:text-base font-bold text-center">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
