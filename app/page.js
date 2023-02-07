import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Project from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <AboutMe />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}
