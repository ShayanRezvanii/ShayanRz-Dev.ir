import {
  Code,
  DocumentCode2,
  Home2,
  Instagram,
  Profile,
  Sms,
} from "iconsax-react";
import Image from "next/image";
import React from "react";
import profile from "../public/profile.jpg";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";


function Sidebar({ status }) {
  return (
    <div
      className={`min-w-[250px] max-w-[250px] duration-300 h-screen bg-neutral-800 border-r border-r-neutral-700 fixed z-20 ${
        status ? "left-0" : "-left-full"
      }   top-0  px-5 lg:left-0 flex flex-col items-center py-10 justify-between`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 h-40 rounded-full relative overflow-hidden">
          <Image
            src={profile}
            alt="profileimage"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center my-2 text-neutral-500">
          <h1 className="text-xl font-RubikbBold">SHAYAN REZVANI</h1>
          <p className="text-sm font-RubikLight">BACK-END DEVELOPER</p>
        </div>
      </div>
      {/* PROFILE */}
      {/* MENU */}
      <div className="w-full ">
        <ul className="w-full flex flex-col space-y-2 text-neutral-500 ">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="MenuBtn">
              <Home2 size="24" />
              <p>Home</p>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="AboutMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="MenuBtn">
              <Profile size="24" />
              <p>About Me</p>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="Project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="MenuBtn">
              <Code size="24" />
              <p>Project</p>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="Resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="MenuBtn">
              <DocumentCode2 size="24" />
              <p>Resume</p>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="MenuBtn">
              <Sms size="24" />
              <p>Contact</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex space-x-5 text-neutral-500">
        <Link to="Contact" smooth={true} offset={0} duration={500}>
          <Instagram size="24" className="cursor-pointer" />
        </Link>
        <a
          href="https://github.com/ShayanRezvanii"
          rel="noreferrer"
          target={"_blank"}
          alt="github"
        >
          <FiGithub size={22} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
