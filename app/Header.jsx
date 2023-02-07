"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
function Header({ status, toggler }) {
  return (
    <div className="w-full lg:hidden fixed top-0 left-0 h-20 shadow-xl px-3 py-4 flex justify-between items-center bg-neutral-800 z-10">
      <div className="w-16 h-full   relative">
        <Image src={logo} alt="logo" fill className="object-contain" />
      </div>
      <div
        onClick={toggler}
        className={` lg:hidden hamburger hamburger--collapse  cursor-pointer ${
          status ? "is-active" : ""
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner bg-white after:bg-white before:bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
