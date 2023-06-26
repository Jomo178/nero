"use client";
import { motion } from "framer-motion";
import { bot } from "../small/avatar";

function SectionOne() {
  return (
    <>
      <section className="flex gap-2 justify-between items-center min-h-full w-full">
        <div>
          <motion.div
            variants={cardsAnimation}
            animate="cardOneBegin"
            className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-72 hidden lg:block"
          ></motion.div>
        </div>
        <motion.div
          variants={infoAnimation}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-9 text-center z-10"
        >
          <p className="text-4xl">{bot.name}</p>
          <p className="text-sm max-w-xs mb-1">
            Experience seamless performance and quick response times, ensuring a
            smooth and enjoyable card collecting experience.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <button className="bg-blue-700 p-3 rounded hover:bg-blue-900 transition-all duration-500">
              Invite
            </button>
            <button className="bg-blue-700 p-3 rounded hover:bg-blue-900 transition-all duration-500">
              Join Server
            </button>
          </div>
        </motion.div>
        <div>
          <motion.div
            variants={cardsAnimation}
            animate="cardTwoBegin"
            className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-72 right-8 hidden lg:block"
          ></motion.div>
        </div>
      </section>
    </>
  );
}

const cardsAnimation = {
  cardOneBegin: {
    y: 500,
    x: 130,
    rotate: -18,
    transition: { duration: 2.5 },
  },
  cardTwoBegin: {
    y: 500,
    x: -130,
    rotate: 18,
    transition: { duration: 2.5 },
  },
};

const infoAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2.5,
      delay: 1.9,
      type: "tween",
    },
  },
};

export default SectionOne;
