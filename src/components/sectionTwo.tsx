"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function SectionTwo() {
  const ROWS = 10;

  return (
    <>
      <section className="min-h-full w-full my-2">
        <div className="overflow-hidden relative">
          <div className="inset-0 flex flex-col gap-2 opacity-30">
            <InfiniteLoopSlider duration={30} reverse={false}>
              {[...new Array(ROWS)].map((_, i) => (
                <CreateCards key={i} />
              ))}
            </InfiniteLoopSlider>
            <InfiniteLoopSlider duration={30} reverse={true}>
              {[...new Array(ROWS)].map((_, i) => (
                <CreateCards key={i} />
              ))}
            </InfiniteLoopSlider>
          </div>
          <div className="bg-gray-800 absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-82 h-96 rounded-md border-solid border-2 border-rose-300 hover:shadow-inner hover:shadow-rose-400 flex flex-col gap-20">
            <div className="border-b-2">
              <h1 className="text-2xl font-bold text-white">Weekly Card</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Your favorite card will be delivered weekly.</p>
              <p>Discover every card.</p>
            </div>
            <div className="flex justify-start">
              <button className="text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300">
                Check Cards
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CreateCards() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-[11rem] h-72"></div>
  );
}

function InfiniteLoopSlider({
  children,
  duration,
  reverse,
}: {
  children: ReactNode;
  duration: number;
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={{
        x: reverse ? "0%" : "-50%",
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex w-fit gap-1"
    >
      {children}
      {children}
    </motion.div>
  );
}

export default SectionTwo;
