"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { SlArrowUp } from "react-icons/sl";
import { CgProfile, CgLogOut } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between p-4">
        <div className="flex justify-between items-center gap-2">
          <ImageAvatar src={bot.imageUrl}></ImageAvatar>
          <h2>Nero</h2>
        </div>

        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex justify-between items-center gap-2 relative hover:cursor-pointer"
          onClick={() => setIsOpen((pv) => !pv)}
        >
          <h2>jomo._.7</h2>
          <ImageAvatar src={bot.imageUrl}></ImageAvatar>
          <motion.span
            variants={iconVariants}
            transition={{ type: "tween", delay: 0.2 }}
          >
            <SlArrowUp size={18}></SlArrowUp>
          </motion.span>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "0%" }}
            className="flex flex-col absolute top-8 bg-discordDarkBG min-w-[144px] rounded-md"
          >
            <ActionList icon={CgProfile} text="Profile"></ActionList>
            <ActionList icon={CgLogOut} text="LogOut" color="red"></ActionList>
          </motion.ul>
        </motion.div>
      </nav>
    </>
  );
}

function ImageAvatar({ src }: { src: string }) {
  return (
    <>
      <img
        className="h-7 w-7 rounded-full shadow-outline-normal"
        src={src}
        alt="avatar"
      ></img>
    </>
  );
}

function ActionList({
  icon: Icon,
  text,
  color = "white",
}: {
  icon: IconType;
  text: string;
  color?: string;
}) {
  return (
    <>
      <motion.li
        variants={itemVariants}
        className="flex gap-2 items-center p-2 rounded my-1  hover:bg-discordBG"
        style={{ color }}
      >
        <motion.span variants={actionIconVariants}>
          <Icon size={20}></Icon>
        </motion.span>
        <span>{text}</span>
      </motion.li>
    </>
  );
}

const bot = {
  imageUrl:
    "https://cdn.discordapp.com/avatars/542770757382569994/fad5207a33644450890312e26a2183fb.webp?size=128",
  name: "Nero",
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default Navbar;
