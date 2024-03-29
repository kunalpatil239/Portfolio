import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import NameLogo from "../assets/namelogo.PNG";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={NameLogo} alt="logo" style={{ width: "50px" }} /> */}
        <h1 className="italic tracking-wider text-3xl text-pink-600">kp</h1>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={600}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={600}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl sm:text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl sm:text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social */}
      <div className="hidden fixed xl:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/kunalpatil2391/"
              rel="noreferrer noopener"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/kunalpatil239"
              rel="noreferrer noopener"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="mailto:kunalpatil239@gmail.com"
              rel="noreferrer noopener"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.twitter.com/kunalpatil239"
              rel="noreferrer noopener"
            >
              Twitter
              {/* <BsFillPersonLinesFill size={30} /> */}
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
