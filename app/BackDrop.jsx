import React from "react";

function BackDrop({ status, toggler }) {
  return (
    <div
      onClick={toggler}
      className={` ${
        status
          ? "w-full min-h-screen lg:hidden bg-neutral-900/80 fixed top-0 left-0 z-10"
          : "hidden"
      }`}
    ></div>
  );
}

export default BackDrop;
