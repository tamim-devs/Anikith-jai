import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constant/index";
import ContainerWrapper from "../components/ContainerWrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerWrapper>
      <nav className="w-full bg-black px-4 sm:px-6 py-4 flex items-center justify-between relative z-50">

        {/* Logo */}
        <Link to="/" className="flex h-50 sm:h-12 w-50 items-center">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="h-20 sm:h-12 w-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {navLinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "hover:text-white transition"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Let’s Talk
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 transition-all duration-300 md:hidden 
          ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="text-gray-300 hover:text-white text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition"
            onClick={() => setOpen(false)}
          >
            Let’s Talk
          </Link>
        </div>

      </nav>
    </ContainerWrapper>
  );
};

export default Navbar;