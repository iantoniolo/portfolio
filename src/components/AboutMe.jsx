import { useLanguage } from "../i18n/LanguageContext";

function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about-me"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-gray-100 dark:bg-neutral-900 px-4 py-12 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center text-gray-900 dark:text-white space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">{t.aboutMe.title}</h2>

        {/* Description */}
        <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {t.aboutMe.bio}
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="assets/me.jpg"
            alt="Ian Toniolo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-amber-400"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
