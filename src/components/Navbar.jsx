import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Name */}
          <div className="text-2xl font-bold text-gray-800 tracking-wide">
            <span className="text-pink-500">Maroofa</span>Maqsood
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-gray-700 text-lg font-medium">
            <a href="#home" className="text-pink-500 font-semibold">Home</a>
            <a href="#about" className="hover:text-pink-500 transition-colors font-semibold">About</a>
            <a href="#services" className="hover:text-pink-500 transition-colors font-semibold">Services</a>
            <a href="#portfolio" className="hover:text-pink-500 transition-colors font-semibold">Portfolio</a>
            <a href="#education" className="hover:text-pink-500 transition-colors font-semibold">Education</a>
            <a href="#skills" className="hover:text-pink-500 transition-colors font-semibold">Skills</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors font-semibold">Contact</a>
          </div>

          {/* Mobile Menu Icon (Optional for future) */}
          <div className="md:hidden">
            {/* You can add a hamburger icon here later */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
