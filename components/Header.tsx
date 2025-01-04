import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { TbMailFilled } from "react-icons/tb";

function Header() {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto mt-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Link href="https://github.com/LEDINHAlban">
            <FaGithub color="grey" size="1.2em" />
          </Link>
          <Link href="https://github.com/LEDINHAlban">
            <FaLinkedin color="grey" size="1.2em" />
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <TbMailFilled color="grey" size="1.2em" />
          <p className="hidden md:block">Get in touch</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
