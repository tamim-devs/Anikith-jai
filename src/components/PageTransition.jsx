import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <div className="relative z-0">
      
      {/* ENTER transition (page leaving) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
        initial={{ y: "-100%" }}
        exit={{ y: "0%" }}
        transition={{
          duration: 0.8,
          ease: [0.7, 0, 0.3, 1],
        }}
      />

      {/* PAGE CONTENT */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>

      {/* LEAVE transition (page reveal) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
        initial={{ y: "0%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 0.8,
          ease: [0.7, 0, 0.3, 1],
        }}
      />
    </div>
  );
};

export default PageTransition;
