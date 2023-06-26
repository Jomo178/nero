"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function SectionTwo() {
  const ROWS = 10;

  return (
    <>
      <section className="min-h-full w-full mt-2">
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
          <div className="bg-gray-800 absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-82 h-96 rounded-md border-solid border-2 border-rose-300 hover:shadow-inner hover:shadow-rose-400 flex flex-col gap-20 transition-all duration-300">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0b0f1a"
            fillOpacity="1"
            d="M0,128L18.5,128C36.9,128,74,128,111,154.7C147.7,181,185,235,222,218.7C258.5,203,295,117,332,122.7C369.2,128,406,224,443,240C480,256,517,192,554,144C590.8,96,628,64,665,90.7C701.5,117,738,203,775,208C812.3,213,849,139,886,133.3C923.1,128,960,192,997,202.7C1033.8,213,1071,171,1108,165.3C1144.6,160,1182,192,1218,176C1255.4,160,1292,96,1329,85.3C1366.2,75,1403,117,1422,138.7L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
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
