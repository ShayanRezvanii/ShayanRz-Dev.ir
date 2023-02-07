import React from "react";

function AboutMe() {
  const data = [
    { title: "City", value: "Tehran,Iran" },
    { title: "Experince", value: "+1" },
    { title: "Age", value: "20" },
  ];
  return (
    <div
      id="AboutMe"
      className="w-full min-h-screen bg-neutral-900 flex flex-col p-10 md:p-0 items-center justify-center text-center max-w-[1240px] mx-auto"
    >
      <p className="text-neutral-100 lg:text-4xl text-2xl font-RubikbBold">
        Im Shayan Rezvani ,Backend Developer
      </p>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {data.map((item, index) => {
          return (
            <div
              className="w-full bg-neutral-700 py-10 text-neutral-100  flex justify-center items-center flex-col rounded-lg "
              key={index}
            >
              <h2 className="text-xl font-RubikLight">{item.title}</h2>
              <p className="text-3xl font-RubikbBold my-10">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMe;
