"use client";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <>
      <section className="flex gap-2 justify-between mx-4 items-center min-h-screen w-full relative overflow-x-hidden">
        <div className="min-w-[50px] h-full">
        <motion.div
      animate={{y: 120, x:120}}
      transition={{ duration: 4 }}
      className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-11"
    ></motion.div>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Nero</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div>
            <button>Invite</button>
            <button>Join Server</button>
          </div>
        </div>
        <div className="min-w-[50px] h-full">
        <motion.div
      // animate={animation}
      className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute -top-11 right-8"
    ></motion.div>
        </div>
      </section>
    </>
  );
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
