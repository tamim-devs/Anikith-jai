import React from "react";
import { education } from "../../constant";

const EducationCard = () => {
  return (
    <div
      className="
        w-full max-w-full sm:max-w-2xl mx-auto
        border border-gray-600 border-t-2
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        backdrop-blur-xl
        px-4 py-8
        sm:px-8 sm:py-12
        rounded-xl sm:rounded-2xl
        shadow-lg
        space-y-5
      "
    >
      {education.map((edu, index) => (
        <div
          key={index}
          className="
            flex flex-col gap-1.5
            pb-4 border-b border-white/10
            last:pb-0 last:border-b-0
          "
        >
          {/* YEAR */}
          <span className="text-white font-medium text-sm sm:text-lg">
            {edu.year}
          </span>

          {/* DETAILS */}
          <div className="flex flex-col gap-1">
            
            <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-white">
              {edu.degree}
            </h3>

            <span className="text-gray-300 font-medium text-sm sm:text-base">
              {edu.subtitle}
            </span>

            <p className="text-white/60 text-xs sm:text-sm md:text-base">
              {edu.school}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;