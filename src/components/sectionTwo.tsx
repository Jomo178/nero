"use client";

import { motion } from "framer-motion";

const ROWS = 6;

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false,
}: {
  children: any;
  duration: number;
  reverse: any;
}) => {
  return (
    <div>
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
          yoyo: false,
        }}
        className="flex w-fit"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

function SectionTwo() {
  return (
    <>
      <section>
        <div>
          {/* <InfiniteLoopSlider key={2} duration={8} reverse={false}>
            {[...new Array(ROWS)].map((_, i) => (
              <CreateCards key={i} text={i.toString()} />
            ))}
          </InfiniteLoopSlider> */}
          <InfiniteLoopSlider key={2} duration={8} reverse={true}>
            {[...new Array(ROWS)].map((_, i) => (
              <CreateCards key={i} text={i.toString()} />
            ))}
          </InfiniteLoopSlider>
        </div>
      </section>
    </>
  );
}

function CreateCards({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-[11rem] h-72">
      <p className="text-black">{text}</p>
    </div>
  );
}

const loop = {
  initial: { x: "0" },

  animate: {
    x: "50%",
    transition: {
      duration: 10,
      repeat: Infinity,
      direction: "reverse",
      ease: "linear",
    },
  },
};

export default SectionTwo;
