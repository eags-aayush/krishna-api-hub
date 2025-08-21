import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load theme on mount
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Sync theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-bold"
        >
          Krishna API HUB
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["About", "Services", "Why Us", "Startup Program", "Products", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-text hover:text-primary transition-colors"
              >
                {item}
              </a>
            )
          )}
          <button
            className="cursor-pointer border rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <i className="ri-sun-line ri-lg text-text"></i>
            ) : (
              <i className="ri-moon-line ri-lg text-text"></i>
            )}
          </button>
          <a
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-primary to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? (
              <i className="ri-sun-line ri-lg text-text"></i>
            ) : (
              <i className="ri-moon-line ri-lg text-text"></i>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-text"
          >
            <i className={isOpen ? "ri-close-line ri-xl" : "ri-menu-line ri-xl"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bg/95 backdrop-blur-md shadow-md transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {["About", "Services", "Why Us", "Startup Program", "Products", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-text hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)} // auto-close on click
              >
                {item}
              </a>
            )
          )}
          <a
            href="#contact"
            className="mt-4 px-5 py-2 bg-gradient-to-r from-primary to-purple-500 text-white font-medium text-center rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
