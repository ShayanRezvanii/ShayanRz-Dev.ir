import { MessageProgramming } from "iconsax-react";
import Link from "next/link";
import React from "react";

function Resume() {
  const data = [
    {
      title: "Working",
      content: "Digital synthesys office",
      active: true,
    },
    {
      title: "Field of Study",
      content: "Computer Engineer",
      active: false,
    },
    {
      title: "University",
      content: "azad university of qods",
      active: false,
    },
  ];
  return (
    <div
      id="Resume"
      className="w-full min-h-screen bg-neutral-900 flex flex-col p-10 md:p-0 items-center justify-center text-center max-w-[1240px] mx-auto"
    >
      <p className="text-neutral-100 lg:text-4xl text-2xl font-RubikbBold">
        Resume
      </p>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {data.map((item, index) => {
          return (
            <Link key={index} target={"_blank"} href={`${item.Link}`}>
              <div
                className={`w-full py-10 px-5 text-neutral-100 hover:shadow-inner hover:bg-lime-700 duration-300 hover:shadow-black  flex justify-center items-center flex-col rounded-lg ${
                  item.active
                    ? " bg-lime-700 shadow-inner shadow-black "
                    : " bg-neutral-700"
                } `}
              >
                <h2 className="text-xl font-RubikLight">{item.title}</h2>

                <p className="text-2xl  mx-auto text-center font-RubikbBold my-10">
                  {item.content}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
