"use client";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <>
      <section className="flex gap-2 justify-between mx-4 items-center min-h-screen w-full relative">
        <Cards animation={{ x: 100 }}></Cards>
        <div>
          <h3>Nero</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div>
            <button>Invite</button>
            <button>Join Server</button>
          </div>
        </div>
        <Cards animation={{ x: 100 }}></Cards>
      </section>
    </>
  );
}

function Cards({ image, animation }: { image?: string; animation: object }) {
  return (
    <motion.div
      animate={animation}
      className="bg-white rounded-lg shadow-md p-4 w-44 h-72 absolute"
    ></motion.div>
  );
}

export default SectionOne;
