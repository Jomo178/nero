"use client";

import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";

import { useBotData, useUserData } from "../context/userContext";
import ImageAvatar from "./avatar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const motionDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data, setData } = useUserData();
  const bot = useBotData().data;

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

  const handleProfile = () => {
    if (data == undefined) {
      return (
        <button
          onClick={handleLogin}
          className="text-white flex gap-3 items-center bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300"
        >
          <FaDiscord></FaDiscord>
          Login
        </button>
      );
    }

    return (
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex justify-between items-center gap-2 relative hover:cursor-pointer z-10"
        onClick={() => setIsOpen((pv) => !pv)}
        ref={motionDivRef}
      >
        <h2>{data.username}</h2>
        <ImageAvatar src={data.avatar}></ImageAvatar>
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
          <ActionList
            icon={CgProfile}
            text="Profile"
            onClick={() => router.push(`/profile/${data.id}`)}
          ></ActionList>
          <ActionList
            icon={CgLogOut}
            text="LogOut"
            color="red"
            onClick={handleLogout}
          ></ActionList>
        </motion.ul>
      </motion.div>
    );
  };

  const handleLogin = () => {
    window.open(
      bot.loginLink,
      "_blank",
      `width=500,height=${window.screen.availHeight}`
    );

    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data) {
        localStorage.setItem("token", event.data.token);
        setData(event.data.user);
        router.push(`/profile/${event.data.user.id}`);
      }

      window.removeEventListener("message", receiveMessage);
    };

    window.addEventListener("message", receiveMessage);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setData(undefined);
  };

  return (
    <nav className="flex justify-between p-4 z-10">
      <Link href="/" className="flex justify-between items-center gap-2">
        <ImageAvatar src={bot.avatar}></ImageAvatar>
        <h2>{bot.username}</h2>
      </Link>
      {handleProfile()}
    </nav>
  );
}

function ActionList({
  icon: Icon,
  text,
  color = "white",
  onClick,
}: {
  icon: IconType;
  text: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <motion.li
      variants={itemVariants}
      className="flex gap-2 items-center p-2 rounded my-1 mx-1  hover:bg-discordBG"
      style={{ color }}
      onClick={onClick}
    >
      <motion.span variants={actionIconVariants}>
        <Icon size={20}></Icon>
      </motion.span>
      <span>{text}</span>
    </motion.li>
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
