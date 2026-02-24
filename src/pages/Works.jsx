import React from "react";
import { motion } from "framer-motion";
import iconPlus from "../../public/images/Next Icon.png";
import { worksData } from "../constant";
import { Link } from "react-router-dom";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Works = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-6xl font-bold uppercase mb-16 tracking-wide"
      >
        ✹ ALL PROJECTS  ✹
      </motion.h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {worksData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-[#121212] rounded-2xl p-5 
              border border-[#1e1e1e] 
              hover:border-[#444] 
              shadow-lg 
              hover:shadow-2xl 
              transition-all duration-300 
              cursor-pointer
            "
          >
            {/* Project Image */}
            <motion.div
              className="w-full h-56 md:h-64 overflow-hidden rounded-xl border border-[#1f1f1f]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Content Row */}
            <div className="flex justify-between items-center mt-5">
              
              {/* Text Info */}
              <div>
                <p className="text-[#8b8b8b] uppercase text-xs tracking-wide">
                  {item.category}
                </p>
                <p className="text-lg md:text-xl font-semibold tracking-wide mt-1">
                  {item.title}
                </p>
              </div>

              {/* Icon Box */}
              <div
                className="
                  
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                  flex items-center justify-center
                  rounded-xl 
                  transition-all duration-300
                "
              >
                <Link to='/blog'>
                <img
                  src={iconPlus}
                  alt="open"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain opacity-80 hover:opacity-100 transition"
                />
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
