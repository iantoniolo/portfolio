import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-neutral-900 text-white z-50">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-amber-400"
          className="text-lg font-bold text-white cursor-pointer hover:text-amber-400 transition"
        >
          Ian Toniolo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-amber-400"
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-amber-400"
              className="cursor-pointer hover:text-amber-400 transition"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-amber-400"
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-amber-400"
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experiences"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-amber-400"
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Experiences
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 z-50">
          <ul className="flex flex-col space-y-4 p-4 text-lg font-bold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-amber-400"
                className="cursor-pointer hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-amber-400"
                className="cursor-pointer hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-amber-400"
                className="cursor-pointer hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-amber-400"
                className="cursor-pointer hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experiences"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-amber-400"
                className="cursor-pointer hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Experiences
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
