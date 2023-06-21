"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function SectionTwo() {
  const ROWS = 12;

  return (
    <>
      <section>
        <div className="overflow-hidden">
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
          <div className="h-64 inset-48 flex items-center justify-center z-10">
            <div className="w-48 h-64 bg-slate-300"></div>
            <p>dsds</p>
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
