import { useLanguage } from "../i18n/LanguageContext";

function Experiences() {
  const { t } = useLanguage();

  return (
    <section
      id="experiences"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-gray-50 dark:bg-neutral-800 px-4 py-12 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-gray-900 dark:text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.experiences.title}
        </h2>

        {/* Experiences List */}
        <div className="space-y-8">
          {t.experiences.items.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Company and Role */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-amber-400">
                  {exp.role}
                </h3>
                <p className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                  {exp.company} • {exp.period}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-300">
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
