import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constant";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerWrapper>
      <nav className="w-full bg-black px-6 py-12 flex flex-col items-center relative">
        
        {/* Logo */}
        <Link to="/">
          <div className="w-[200px] h-[70px] mb-6">
            <img src="/images/Logo.png" alt="logo" />
          </div>
        </Link>

        {/* Desktop Menu */}
   <ul className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 text-gray-300 sm:text-xl">
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


  

     

      
      </nav>
    </ContainerWrapper>
  );
};

export default Footer;
