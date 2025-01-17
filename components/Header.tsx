"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "motion/react";

function Header() {
  return (
    <header className="sticky top-0 border-[#333333] z-50 max-w-7xl mx-auto pt-4">
      <div className="flex justify-between">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex space-x-4"
        >
          <Link href="https://github.com/LEDINHAlban">
            <FaGithub color="grey" size="1.2em" />
          </Link>
          <Link href="https://github.com/LEDINHAlban">
            <FaLinkedin color="grey" size="1.2em" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex space-x-3 items-center"
        >
          <TbMailFilled color="grey" size="1.2em" />
          <p className="hidden md:block">Get in touch</p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
