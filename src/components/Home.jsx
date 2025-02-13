import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Illustration from "/assets/illustration.svg";

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
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center bg-neutral-800 px-4 md:px-0"
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

      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div className="text-3xl md:text-4xl font-bold text-white">
            Hello, my name is
          </motion.div>
          <motion.div className="text-4xl md:text-5xl font-bold text-amber-400">
            Ian Toniolo
          </motion.div>
          <motion.div className="text-xl md:text-2xl font-bold text-white">
            <span ref={typedElement}></span>
          </motion.div>

          <motion.p
            className="text-md md:text-lg text-neutral-400 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I am a passionate software engineer specializing in building
            scalable web applications, with a focus on clean code and
            performance optimization.
          </motion.p>

          <div className="text-lg md:text-xl italic text-amber-300">
            Transforming ideas into scalable solutions.
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
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
              href="documents/curriculum.pdf"
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
        </motion.div>

        {/* Illustration */}
        <motion.img
          src={Illustration}
          alt="Ilustração do desenvolvedor"
          className="w-80 mt-10 md:mt-0 mx-auto md:mx-0 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}

export default Home;
