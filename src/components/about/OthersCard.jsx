import React from "react";
import { homeCards } from "../../constant";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OthersCard = () => {
  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          md:gap-6
          items-stretch
        "
      >
        {/* CARD 1 */}
        {homeCards.slice(1, 2).map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
              p-5 md:p-6
              rounded-2xl
              shadow-xl
              flex flex-col
              h-full
            "
          >
            <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden">
              <img
                src={item.image || item.icon}
                className="w-full h-full object-cover opacity-80"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-4 flex-1">
              <div>
                <h4 className="text-white/70 text-sm">
                  {item.subtitle}
                </h4>
                <h1 className="text-lg md:text-xl font-bold text-white">
                  {item.title}
                </h1>
              </div>

              <Link to={item.link}>
                <img
                  src="/images/icon.svg"
                  className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
        ))}

        {/* ⭐ MIDDLE CONTACT CARD ⭐ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            col-span-1
            sm:col-span-2
            lg:col-span-2
            bg-gradient-to-r from-[#232323] to-[#0d0d0d]
            rounded-2xl
            shadow-xl
            border-t
            border-gray-600
            p-6 sm:p-10
            flex flex-col sm:flex-row
            items-center
            justify-center sm:justify-between
            gap-6
            text-center sm:text-left
          "
        >
          <div className="font-bold text-white">
            <span className="text-xl sm:text-2xl md:text-3xl">
              Contact with me
            </span>
          </div>

          <Link
            to="/contact"
            className="
              w-12 h-12 sm:w-14 sm:h-14
              flex items-center justify-center
              rounded-full
            "
          >
            <img
              src="/images/Next Icon.png"
              className="w-6 sm:w-7 h-6 sm:h-7 opacity-60 hover:scale-110 transition duration-300"
              alt=""
            />
          </Link>
        </motion.div>

        {/* CARD 2 */}
        {homeCards.slice(2, 3).map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
              p-5 md:p-6
              rounded-2xl
              shadow-xl
              flex flex-col
              h-full
            "
          >
            <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden">
              <img
                src={item.image || item.icon}
                className="w-full h-full object-cover opacity-80"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-4 flex-1">
              <div>
                <h4 className="text-white/70 text-sm">
                  {item.subtitle}
                </h4>
                <h1 className="text-lg md:text-xl font-bold text-white">
                  {item.title}
                </h1>
              </div>

              <Link to={item.link}>
                <img
                  src="/images/icon.svg"
                  className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OthersCard;