"use client";

import { motion } from "framer-motion";

const Loader = () => {
  const dotCount = 3; // Number of dots

  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <div className="flex space-x-2">
        {Array.from({ length: dotCount }, (_, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{ y: [-10, 10] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          ></motion.div>
        ))}
      </div>
      <motion.div
        className="mt-2 text-gray-500"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loader;
