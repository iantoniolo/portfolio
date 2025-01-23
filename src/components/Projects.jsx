import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "LoL Summoner Match Manager",
      description:
        "A tool to manage League of Legends match data for summoners, allowing users to view, analyze, and track their match history.",
      githubLink: "https://github.com/iantoniolo/lol-summoner-match-manager",
      techStack: ["HTML5", "CSS3", "FastAPI", "MongoDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-neutral-900 px-4 py-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

        {/* Projects List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4">{project.description}</p>

              {/* Used Technologies */}
              <div className="text-sm font-semibold mb-4">
                <span className="text-amber-400">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-500 transition"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
