import { MessageProgramming } from "iconsax-react";
import Link from "next/link";
import React from "react";

function Project() {
  const data = [
    {
      title: "Login & SignUp Form",
      Link: "https://github.com/ShayanRezvanii/SignUp-Login-form",
      active: true,
    },
    {
      title: "CMS",
      Link: "https://github.com/ShayanRezvanii/CMS-Template-Full",
      active: false,
    },
    {
      title: "WebLog",
      Link: "https://github.com/ShayanRezvanii/Weblog-with-Node-js-MongoDB-",
      active: false,
    },
    {
      title: "Weather App",
      Link: "https://github.com/ShayanRezvanii/weather-app",
      active: false,
    },
  ];
  return (
    <div
      id="Project"
      className="w-full min-h-screen bg-neutral-900 flex flex-col p-10 md:p-0 items-center justify-center text-center max-w-[1240px] mx-auto"
    >
      <p className="text-neutral-100 lg:text-4xl text-2xl font-RubikbBold">
        Projects
      </p>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {data.map((item, index) => {
          return (
            <Link key={index} target={"_blank"} href={`${item.Link}`}>
              <div
                className={`w-full py-10 px-5 text-neutral-100 hover:shadow-inner hover:bg-sky-700 duration-300 hover:shadow-black  flex justify-center items-center flex-col rounded-lg ${
                  item.active
                    ? " bg-sky-700 shadow-inner shadow-black "
                    : " bg-neutral-700"
                } `}
              >
                <MessageProgramming size={32} />
                <p className="text-2xl  mx-auto text-center font-RubikbBold my-10">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
