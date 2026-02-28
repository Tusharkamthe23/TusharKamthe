import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold">Tushar Kamthe</div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link to="/achievements" className="hover:text-blue-400 transition">Certification</Link>
          
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-400">Home</Link>
          <Link to="/about" className="block hover:text-blue-400">About</Link>
          <Link to="/projects" className="block hover:text-blue-400">Projects</Link>
          <Link to="/skills" className="block hover:text-blue-400">Skills</Link>
          <Link to="/contact" className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
