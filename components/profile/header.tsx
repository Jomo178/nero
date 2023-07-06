"use client";

import { useGlobalContext } from "@/context/user";
import { motion } from "framer-motion";

import { bot } from "../avatar";

function ProfileHeaderSection() {
  const { data, setData } = useGlobalContext();

  return (
    <section className="mt-6">
      <div
        className="w-full h-[28rem] bg-no-repeat bg-center bg-cover relative rounded-3xl"
        style={{
          backgroundImage: `url(${bot.banner})`,
        }}
      >
        <div className="absolute bottom-0 flex w-full items-end">
          <div className="w-full h-10 rounded-lg bg-gradient-to-r from-slate-950 via-gray-900 to-steel-900"></div>
          <div className="border-b-black absolute left-[5%] -top-[125%]">
            <motion.img
              className="rounded-full w-32 h-32"
              src={data.user?.avatar}
              alt=""
              variants={imageBorderVariants}
              initial={imageBorderVariants.initial}
              animate={imageBorderVariants.animate}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute right-[5%] h-10 bg-redditBG flex gap-2 items-center">
            <BetaTesterIcon />
            <BetaTesterIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

const color = "#000000";
const colors = ["#2e2b2b", "#120e0e", "#301010", "#10302f"];

let imageBorderVariants = {
  animate: {
    borderTopColor: colors,
    borderRightColor: colors,
    borderBottomColor: colors,
    borderLeftColor: colors,
  },
  initial: {
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    borderTopWidth: "4px",
    borderRightWidth: "4px",
    borderBottomWidth: "4px",
    borderLeftWidth: "4px",
    borderStyle: "solid",
  },
};

function BetaTesterIcon() {
  return (
    <img
      className="h-8 w-8 cursor-pointer"
      src="https://static.vecteezy.com/ti/gratis-vektor/p3/12867039-beta-tester-icon-stil-kostenlos-vektor.jpg"
      alt=""
      title="Beta Tester"
    />
  );
}

export default ProfileHeaderSection;
