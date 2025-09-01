import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-6 border-t border-gray-600">
      <div className="text-center">
        {/* Name */}
        <h2 className="text-3xl font-bold  bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 bg-clip-text text-transparent">Afham Dunnur</h2>
        <p className="text-gray-400">Web Developer</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Afhampp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/afham-dunnur-54aa20290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-amber-500 hover:text-gray-400"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Afham Dunnur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
