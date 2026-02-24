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
    <section className="w-full px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">

        {/* ================= LEFT PROFILE CARD ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full
            max-w-sm
            mx-auto
            lg:mx-0
            bg-[#111]
            p-6 sm:p-7
            rounded-2xl
            shadow-xl
            flex
            flex-col
            items-center
            text-center
            space-y-5
          "
        >
          {/* Profile Image */}
          <div className="mt-10 w-28 sm:w-36 md:w-44 rounded-xl overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Name */}
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            {profile.name}
          </h2>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl sm:text-2xl text-white">
            <MdEmail className="hover:text-blue-400 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
            <FaMedium className="hover:text-blue-400 transition cursor-pointer" />
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="
              w-36 sm:w-full
              py-2 sm:py-2.5
              text-sm
              bg-white text-black
              rounded-lg
              font-medium
              hover:bg-white/80
              transition
            "
          >
            Contact Me
          </Link>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-12 text-white">

          {/* -------- ABOUT -------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-lg sm:text-xl font-semibold mb-4 tracking-wide">
              ABOUT ME
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-7">
              {aboutSummary}
            </p>

            <p className="text-white font-medium text-base sm:text-lg mt-6 leading-7">
              “Building the future isn’t waiting — it’s connecting people,
              ideas, and resources to create meaningful, resilient,
              transformative ventures.”
            </p>
          </motion.div>

          {/* -------- SKILLS -------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-lg sm:text-xl font-semibold mb-8 tracking-wide">
              SKILLS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {aboutSkills.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                    {skill.percent}%
                  </p>

                  <h3 className="text-base sm:text-lg font-semibold">
                    {skill.label}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-6">
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