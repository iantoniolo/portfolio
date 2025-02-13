function AboutMe() {
  return (
    <section
      id="about-me"
      className="relative h-auto w-full bg-cover bg-center flex items-center justify-center bg-neutral-900 px-4 py-12 md:py-24"
    >
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

        {/* Description */}
        <p className="text-sm md:text-lg leading-relaxed">
          Hello! I&apos;m Ian Toniolo, a Software Engineer passionate about
          creating scalable and efficient solutions. I am currently pursuing a
          degree in Computer Science at the Federal University of ABC (UFABC),
          where I focus on deepening my knowledge in programming, data analysis,
          and software engineering. I specialize in backend development and
          thrive on tackling complex challenges with modern technologies.
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
