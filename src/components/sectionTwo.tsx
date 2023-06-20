"use client";
// import React from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// const SectionTwo = () => {
//   const x = useMotionValue(13);
//   const y = useSpring(10);

//   const z = useTransform(
//     [x, y],
//     //@ts-ignore
//     ([latestX, latestY]): number => latestX * latestY
//   );
//   return (
//     <section className="h-full w-full mx-4">
//       <div>
//         <div className="flex gap-2 w-full">
//           <motion.div
//             style={{ x, y, z }}
//             className="bg-white rounded-lg shadow-md p-4 w-44 h-72"
//           ></motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionTwo;

import { motion, useAnimate, useInView, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Root, createRoot } from "react-dom/client";

function SectionTwo() {
  const cardsLength = 4;
  const cards = [];

  function animationCompleted(e: IntersectionObserverEntry | null) {
    if (!e) return;
    e.target.remove();
    const sec = document.getElementById("test");
    if (!sec) return;

    const motionDiv = (
      <motion.div
        variants={divVariants}
        initial="initial"
        animate="animate"
        className="bg-white rounded-lg shadow-md p-4 min-w-[11rem] h-72"
        onAnimationComplete={() => console.log(1 + " done! Complete")}
        onAnimationEnd={() => console.log(1 + " done!")}
        onViewportLeave={(e) => animationCompleted(e)}
        key={Math.random().toString(36).substring(2, 10)}
      ></motion.div>
    );

    let root = createRoot(sec);
    root.render(motionDiv);

    setTimeout(() => root.unmount(), 1000);
    return;
  }

  for (let i = 0; i < cardsLength; i++) {
    cards.push(
      <motion.div
        variants={divVariants}
        initial="initial"
        animate="animate"
        className="bg-white rounded-lg shadow-md p-4 min-w-[11rem] h-72"
        onAnimationComplete={() => console.log(i + " done! Complete")}
        onAnimationEnd={() => console.log(i + " done!")}
        onViewportLeave={(e) => animationCompleted(e)}
        key={i}
      ></motion.div>
    );
  }

  return (
    <>
      <section className="flex gap-2" id="test">
        {cards}
      </section>
    </>
  );
}

const divVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100vw",
    transition: {
      duration: 14,
      // repeat: Infinity,
      ease: "linear",
    },
  },
};

export default SectionTwo;
