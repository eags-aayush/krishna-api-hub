import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-2xl font-['Pacifico'] bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
        >
          Krishna API HUB
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-text hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="text-text hover:text-primary transition-colors">
            Services
          </a>
          <a href="#advantages" className="text-text hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#program" className="text-text hover:text-primary transition-colors">
            Startup Program
          </a>
          <a href="#product" className="text-text hover:text-primary transition-colors">
            Products
          </a>
          <a href="#contact" className="text-text hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 bg-gradient-to-r from-primary to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-text"
          >
            <i className={isOpen ? "ri-close-line ri-lg" : "ri-menu-line ri-lg"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#about" className="text-text hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="text-text hover:text-primary transition-colors">
            Services
          </a>
          <a href="#advantages" className="text-text hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#program" className="text-text hover:text-primary transition-colors">
            Startup Program
          </a>
          <a href="#product" className="text-text hover:text-primary transition-colors">
            Products
          </a>
          <a href="#contact" className="text-text hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="block px-5 py-2 bg-gradient-to-r from-primary to-purple-500 text-white font-medium text-center rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
