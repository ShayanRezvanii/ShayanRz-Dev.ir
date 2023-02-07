"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "../public/HeroBg.jpg";
import Typewriter from "typewriter-effect";
import { ArrowDown2 } from "iconsax-react";
import { Link } from "react-scroll";
function Hero() {
  return (
    <div
      id="Home"
      className="w-full h-screen flex items-center px-10 justify-center  imagewraper"
    >
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src={HeroImage}
          className="object-cover"
          fill
          priority={true}
          placeholder="blur"
          alt="Hero background"
        />
      </div>
      <div className="bg-black/75 fixed top-0 left-0 right-0 bottom-0 z-[2]" />
      <Link
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="text-neutral-50 flex items-center cursor-pointer justify-center flex-col animate-bounce z-10 absolute bottom-10  m-auto left-0 right-0">
          <p className="font-RubikLight text-sm">MORE</p>
          <ArrowDown2 size="36" />
        </div>
      </Link>
      <div className=" z-10 w-full text-center">
        <h1 className="text-2xl  lg:text-4xl my-2  text-neutral-50">Welcome</h1>
        <div className="flex flex-row space-x-3 justify-center items-center text-neutral-50 ">
          <h1 className="text-2xl md:text-4xl lg:text-6xl block font-bold font-RubikbBold">
            I Am
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl block font-bold font-RubikbBold">
            <Typewriter
              options={{
                strings: ["Shayan Rezvani", "Back-End Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
