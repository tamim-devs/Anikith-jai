import React from "react";
import { experience } from "../../constant";
import { NavLink } from "react-router-dom";

const ExperienceCard = () => {
  return (
    <NavLink to="/landing">
      <div
        className="
          w-full max-w-full sm:max-w-2xl mx-auto
          backdrop-blur-xl border-gray-500 border-t-2
          bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
          px-4 py-6
          sm:px-8 sm:py-10
          rounded-xl sm:rounded-2xl
          shadow-lg
          space-y-5
        "
      >
        {/* TITLE */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left">
          MY APPROACH
        </h2>

        {/* EXPERIENCE LIST */}
        {experience.map((exp, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-1
              pb-3 border-b border-white/10
              last:border-b-0 last:pb-0
            "
          >
            {/* YEAR */}
            <span className="text-gray-400 font-medium text-sm sm:text-lg">
              {exp.year}
            </span>

            {/* DETAILS */}
            <div className="flex flex-col">
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-white/60 text-xs sm:text-sm md:text-base">
                {exp.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </NavLink>
  );
};

export default ExperienceCard;