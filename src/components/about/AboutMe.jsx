import React from "react";
import { motion } from "framer-motion";
import {
  aboutSummary,
  profile,
  aboutSkills,
} from "../../constant";
import { FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutMe = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
      
      <div className="w-full max-w-full sm:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">

        {/* LEFT CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#111] p-5 sm:p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4"
        >
          {/* Profile Image */}
          <div className="w-28 sm:w-36 md:w-44 rounded-lg overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-white">
            {profile.name}
          </h2>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl sm:text-2xl text-white">
            <MdEmail className="hover:text-blue-400 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
            <FaMedium className="hover:text-blue-400 transition cursor-pointer" />
          </div>

      <Link
  to="/contact"
  className="
    w-32 sm:w-full
    py-1.5 sm:py-2.5
    text-xs sm:text-sm
    bg-white text-black
    rounded-md sm:rounded-lg
    font-medium
    hover:bg-white/80
    transition
  "
>
  Contact Me
</Link>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10 text-white">

          {/* ABOUT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-base sm:text-lg font-semibold mb-3">
              ABOUT ME
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
              {aboutSummary}
            </p>

            <p className="text-white font-medium text-base sm:text-lg mt-4 leading-6 sm:leading-7">
              “Building the future isn’t waiting — it’s connecting people,
              ideas, and resources to create meaningful, resilient,
              transformative ventures.”
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-base sm:text-lg font-semibold mb-6">
              SKILLS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutSkills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-xl sm:text-2xl font-bold text-blue-400">
                    {skill.percent}%
                  </p>

                  <h3 className="text-sm sm:text-base font-semibold">
                    {skill.label}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-5 sm:leading-6">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;