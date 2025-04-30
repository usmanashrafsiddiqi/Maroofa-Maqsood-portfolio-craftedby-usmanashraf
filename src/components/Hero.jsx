import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#a8c0ff] to-[#a1c4fd] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I’m <span className="text-pink-500">[Maroofa Maqsood]</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl">
            A passionate <span className="font-semibold">Social Media Manager</span> and{" "}
            <span className="font-semibold">Content Creator</span> helping brands grow their
            online presence with creativity and strategy.
          </p>
          <motion.button
            className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work with Me
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src="/maroofa.jpg"
            alt="Profile"
            className="max-w-xs w-full mx-auto lg:mx-0 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
