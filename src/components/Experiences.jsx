function Experiences() {
  const experiences = [
    {
      company: "Zax App",
      role: "Software Engineer",
      period: "May 2024 – Present",
      responsibilities: [
        "Web development focused on robust and scalable applications.",
        "Support in the development of the Zax 360 platform, with a focus on integrations and improving user experience.",
        "Building integrations with partners to enhance workflows and automation.",
        "Containerizing applications to simplify deployment and scalability.",
        "Developing microservices to modularize functionalities and improve system maintainability.",
        "Highlight: Led the Personalized Lists project, enabling Zax 360 platform users to segment customers and automate customizable WhatsApp campaigns, resulting in increased client acquisition and sales.",
      ],
    },
    {
      company: "Zax App",
      role: "Software Engineering Intern",
      period: "September 2022 – April 2024",
      responsibilities: [
        "Actively participated in the development of a customer service tool to optimize client interactions.",
        "Contributed to the planning and implementation of solutions for ticket management and support.",
        "Created and managed cronjobs to process and maintain data integrity.",
        "Assisted in backend routines and technical support, ensuring agile solutions for recurring issues.",
        "Highlight: Contributed to the Zaya Virtual Assistant project, reducing manual interactions by structuring information for analysts and solving problems autonomously whenever possible.",
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-neutral-800 px-4 py-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Experiences
        </h2>

        {/* Experiences List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-2"
            >
              {/* Company and Role */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-amber-400">
                  {exp.role}
                </h3>
                <p className="text-lg font-semibold text-gray-300">
                  {exp.company} • {exp.period}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-sm text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
