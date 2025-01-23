import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Web Developer", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center bg-neutral-800 px-4 md:px-0"
    >
      {/* Particles Effect */}
      <Particles
        className="absolute top-0 left-0 w-full h-full -z-10"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 2 },
            line_linked: { enable: true, color: "#ffffff" },
          },
        }}
      />

      {/* Introduction */}
      <motion.div
        className="flex flex-col space-y-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="p-4 text-3xl md:text-4xl font-bold text-white">
          Hello, my name is
        </motion.div>
        <motion.div className="p-4 text-4xl md:text-5xl font-bold text-amber-400">
          Ian Toniolo
        </motion.div>
        <motion.div className="p-4 text-xl md:text-2xl font-bold text-white">
          <span ref={typedElement}></span>
        </motion.div>
      </motion.div>

      {/* Brief description */}
      <motion.div
        className="text-center mt-4 text-md md:text-lg text-neutral-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am a passionate software engineer specializing in building scalable
        web applications, with a focus on clean code and performance
        optimization.
      </motion.div>

      {/* Highlight phrase */}
      <div className="text-center text-lg md:text-xl italic text-amber-300 mt-4">
        Transforming ideas into scalable solutions.
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {/* Scroll to Projects */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition cursor-pointer"
        >
          View My Projects
        </Link>
        <a
          href="mailto:iantoniolo@hotmail.com"
          className="px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition"
        >
          Contact Me
        </a>
        <a
          href="/documents/curriculum.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social media icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://linkedin.com/in/iantoniolo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-white hover:text-amber-400 transition" />
        </a>
        <a
          href="https://github.com/iantoniolo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-white hover:text-amber-400 transition" />
        </a>
      </div>
    </section>
  );
}

export default Home;
