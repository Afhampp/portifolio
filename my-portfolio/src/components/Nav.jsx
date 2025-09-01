import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950  shadow rounded-t-2xl border-b border-gray-600">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-amber-50 via-amber-300 to-amber-600 bg-clip-text text-transparent">Portifolio</div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="text-gray-500 hover:text-amber-500">Home</a>
          <a href="#about" className="text-gray-500 hover:text-amber-500">About</a>
          <a href="#skill" className="text-gray-500 hover:text-amber-500">Skill</a>
          <a href="#education" className="text-gray-500 hover:text-amber-500">Education</a>
          <a href="#project" className="text-gray-500 hover:text-amber-500">Project</a>
          <a href="#contact" className="text-gray-500 hover:text-amber-500">Contact</a>
        </div>
      </div>

      {/* Dropdown (mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 pb-4 pl-3 bg-slate-900">
           <a href="#home" className="text-gray-500 hover:text-amber-500">Home</a>
          <a href="#about" className="text-gray-500 hover:text-amber-500">About</a>
          <a href="#skill" className="text-gray-500 hover:text-amber-500">Skill</a>
          <a href="#education" className="text-gray-500 hover:text-amber-500">Education</a>
          <a href="#project" className="text-gray-500 hover:text-amber-500">Project</a>
          <a href="#contact" className="text-gray-500 hover:text-amber-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
