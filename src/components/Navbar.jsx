import { Link } from "react-scroll";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();
  const { dark, toggleTheme } = useTheme();

  const navItems = [
    { to: "home", label: t.nav.home },
    { to: "about-me", label: t.nav.aboutMe },
    { to: "skills", label: t.nav.skills },
    { to: "projects", label: t.nav.projects },
    { to: "experiences", label: t.nav.experiences },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-neutral-900 text-gray-900 dark:text-white z-50 shadow-md dark:shadow-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-amber-400"
          className="text-lg font-bold cursor-pointer hover:text-amber-400 transition"
        >
          Ian Toniolo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-bold">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-amber-400"
                  className="cursor-pointer hover:text-amber-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition cursor-pointer"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition cursor-pointer text-amber-500"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile: Toggles + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition cursor-pointer"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition cursor-pointer text-amber-500"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
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
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-neutral-900 z-50 shadow-lg dark:shadow-none transition-colors duration-300">
          <ul className="flex flex-col space-y-4 p-4 text-lg font-bold">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-amber-400"
                  className="cursor-pointer hover:text-amber-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
