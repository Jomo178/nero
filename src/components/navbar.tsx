"use client";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { SlArrowUp } from "react-icons/sl";
import { CgProfile, CgLogOut } from "react-icons/cg";
import ImageAvatar, { bot } from "./small/avatar";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const motionDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        motionDivRef.current &&
        !motionDivRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between p-4">
        <Link href="/" className="flex justify-between items-center gap-2">
          <ImageAvatar src={bot.imageUrl}></ImageAvatar>
          <h2>Nero</h2>
        </Link>

        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex justify-between items-center gap-2 relative hover:cursor-pointer z-10"
          onClick={() => setIsOpen((pv) => !pv)}
          ref={motionDivRef}
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
        className="flex gap-2 items-center p-2 rounded my-1 mx-1  hover:bg-discordBG"
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
