"use client";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <>
      <section className="flex gap-2 justify-between mx-4 items-center min-h-screen w-full relative overflow-x-hidden">
        <div className="min-w-[50px] h-full">
          <motion.div
          variants={cardsAnimation}
          animate="cardOneBegin"
            className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-72"
          ></motion.div>
        </div>
        <motion.div
        variants={infoAnimation}
        initial="hidden"
        animate="show"
          className="flex flex-col gap-2 text-center z-10"
        >
          <p className="text-4xl">Nero</p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="flex gap-6 items-center justify-center">
            <button className="bg-blue-700 p-3 rounded hover:bg-blue-900 transition-all duration-500">
              Invite
            </button>
            <button className="bg-blue-800 p-3 rounded hover:bg-blue-900 transition-all duration-500">
              Join Server
            </button>
          </div>
        </motion.div>
        <div className="min-w-[50px] h-full">
          <motion.div
          variants={cardsAnimation}
          animate="cardTwoBegin"
            className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-72 right-8"
          ></motion.div>
        </div>
      </section>
      <div>
        <p>hello</p>
      </div>
    </>
  );
}

const cardsAnimation = {
  cardOneBegin: {
    y: 400, x: 130, rotate: -18,
    transition: { duration: 2.5 }
  },
  cardTwoBegin: {
    y: 400, x: -130, rotate: 18,
      transition: { duration: 2.5 }
  }
}

const infoAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration:2.5,
      delay: 1.9,
      type: "tween"
    }
  }
}

function Cards({ image, animation }: { image?: string; animation: object }) {
  return (
    <motion.div
      animate={animation}
      className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute top-9"
    ></motion.div>
  );
}

export default SectionOne;
