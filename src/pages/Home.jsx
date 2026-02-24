import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeCards, marqueLines } from "../constant";
import { Link } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";
import iconPlus from "/images/Next Icon.png";
import PageTransition from './../components/PageTransition';
import SmallCard from "../components/about/SmallCard";

const Home = () => {
 

  return (
    <PageTransition>
      <div className="min-h-screen bg-black flex justify-center 
      py-8 px-4 md:px-8 lg:px-12">

        <div className="w-full max-w-7xl flex flex-col gap-8 sm:gap-10 lg:gap-12">

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* PROFILE CARD */}
            
            <Link to='/about' className="w-full bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] 
              rounded-3xl p-6 shadow-xl flex flex-col md:flex-row 
              items-center gap-6">

              <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] 
              rounded-3xl p-6 shadow-xl flex flex-col md:flex-row 
              items-center gap-6"
            >

              {/* IMAGE */}
           {/* IMAGE */}
<div className="
  w-full 
  sm:w-72 md:w-64
  h-60 sm:h-56 md:h-48
  overflow-hidden 
  shadow-lg 
  rounded-tl-[30px] 
  rounded-br-[30px]
">
  <img
    src={homeCards[0].image}
    className="w-full h-full object-cover"
    alt="profile"
  />
</div>


{/* TEXT */}
<div className="flex flex-col gap-4 w-full">

  {homeCards
    .filter((c) => c.type === "profile")
    .map((c) => (
      <div key={c.id} className="w-full">

        <h3 className="text-gray-300 text-sm sm:text-base">
          {c.title}
        </h3>

        <h2 className="
          text-white mb-2
          text-2xl sm:text-3xl md:text-4xl
          font-bold
          leading-tight
          break-words
        ">
          {c.name}
        </h2>

        <p className="
          text-gray-300 opacity-70
          text-sm sm:text-base md:text-lg
          mb-2
          break-words
        ">
          {c.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <p className="
            text-gray-300 opacity-70
            text-sm sm:text-base md:text-lg
            break-words
            flex-1
          ">
            {c.description}
          </p>

          <Link
            to="/about"
            className="w-9 h-9 hover:scale-110 transition shrink-0"
          >
            <img src={iconPlus} alt="icon" />
          </Link>
        </div>

      </div>
    ))}
</div>
             
            </motion.div>
            </Link>

            

            
            {/* RIGHT SIDE SECTION */}
            <div className="w-full flex flex-col gap-6">

              {/* SLIDER */}

              <motion.div
  className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] 
             h-12 sm:h-14 rounded-xl flex items-center text-white 
             font-semibold shadow-md overflow-hidden relative"
>
  <motion.div
    className="absolute flex whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 28, // 🔥 slower (change this only)
      ease: "linear"
    }}
  >
    {[...marqueLines, ...marqueLines].map((text, i) => (
      <span key={i} className="px-12 whitespace-nowrap">
        {text}
      </span>
    ))}
  </motion.div>
</motion.div>



              {/* TWO SMALL CARDS */}
              <div className="grid grid-cols-1 gap-6">
  {homeCards.slice(1, 2).map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-2xl shadow-xl space-y-3"
    >
      <Link to={item.link}>
        <div className="w-full h-40 rounded-xl overflow-hidden">
          <img
            src={item.image || item.icon}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </Link>

      <Link to={item.link} className="flex mt-2 justify-between items-center">
        <div>
          <h4 className="text-white/70 text-sm">{item.subtitle}</h4>
          <h1 className="text-xl font-bold text-white">{item.title}</h1>
        </div>

        <div className="w-12 cursor-pointer">
          <img
            src="/images/Next Icon.png"
            className="w-9 h-9 hover:scale-110 transition"
          />
        </div>
      </Link>
    </motion.div>
  ))}
</div>

            </div> 
          </div>

          {/* FULL HOME CARD */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <HomeCard />
          </motion.div>

          {/* LAST 2 BOXES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SmallCard />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;