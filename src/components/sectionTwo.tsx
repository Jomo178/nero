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
import { useEffect, useRef } from "react";

function SectionTwo() {
  const cardsLength = 10;
  const cards = [];
  const refList = useRef<(HTMLDivElement | null)[]>([]);

  const inView: any = [];

  for (let i = 0; i < cardsLength; i++) {
    cards.push(
      <motion.div
        ref={(ref) => (refList.current[i] = ref)}
        variants={divVariants}
        initial="initial"
        animate="animate"
        className="bg-white rounded-lg shadow-md p-4 w-44 h-72"
        key={i}
      ></motion.div>
    );
  }

  useEffect(() => {
    for (let i = 0; i < cardsLength; i++) {
      const refValue: any = refList.current[i];
      const view = useInView(refValue);
      if (view) return;
      if (!refValue) return;
      refValue.remove();
    }
  }, []);

  return (
    <>
      <section className="flex gap-2">{cards}</section>
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
      duration: 100,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default SectionTwo;
