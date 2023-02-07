"use client";
import { useState } from "react";
import BackDrop from "./BackDrop";
import "./globals.css";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function RootLayout({ children }) {
  const [toggle, settoggle] = useState(false);
  const toggler = () => {
    settoggle(!toggle);
  };
  return (
    <html lang="en">
      <head />

      <body className="font-Rubik bg-neutral-900 scroll-smooth">
        <div className="w-full flex flex-col lg:flex-row relative">
          <Header status={toggle} toggler={toggler} />
          <Sidebar status={toggle} />
          <BackDrop status={toggle} toggler={toggler} />
          <div className="lg:ml-[250px] w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
