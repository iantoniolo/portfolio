import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

function Projects() {
  const { t } = useLanguage();

  const projectsMeta = [
    {
      githubLink: "https://github.com/iantoniolo/lol-summoner-match-manager",
      techStack: ["HTML5", "CSS3", "FastAPI", "MongoDB"],
    },
    {
      githubLink: "https://github.com/iantoniolo/financial-wallet",
      techStack: ["Node.js", "Nest.js", "Typescript", "PostgreSQL", "Docker"],
    },
    {
      githubLink: "https://github.com/iantoniolo/todolist-spring",
      techStack: [
        "Java",
        "Spring Boot",
        "JWT",
        "PostgreSQL",
        "Docker",
        "JUnit",
      ],
    },
    {
      githubLink: "https://github.com/iantoniolo/cnj-processor",
      techStack: [
        "Serverless Framework",
        "GitHub Actions",
        "Angular (Frontend)",
        "Node.js (Backend)",
        "AWS Lambda",
        "AWS SQS",
        "DynamoDB",
        "CloudWatch",
      ],
    },
  ];

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectsMeta[i],
  }));

  return (
    <section
      id="projects"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-gray-100 dark:bg-neutral-900 px-4 py-12 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center text-gray-900 dark:text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t.projects.title}
        </h2>

        {/* Projects List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Used Technologies */}
              <div className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
                <span className="text-amber-400">{t.projects.techStack}:</span>{" "}
                {project.techStack.join(", ")}
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-500 transition"
              >
                <FaGithub className="mr-2" /> {t.projects.viewOnGithub}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
