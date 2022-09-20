import React, { useEffect } from "react";

function Skills() {
  return (
    <div className="relative  pb-24 pt-10 md:h-[80vh] justify-center items-center overflow-hidden flex">
      <div
        className={`text-3xl opacity-10 absolute hidden lg:block  md:text-[160px] left-40  name tracking-wider whitespace-nowrap text-center w-full bg-transparent font-bold text-shadow top-10 `}
      >
        CORE SKILLS
      </div>
      <div className=" box1 h-[150px]  w-[150px] md:h-[190px] md:w-[190px] ">
        <span className="skills8">
          <img src="./React.png" alt="" />
        </span>
        <span className="skills7">
          <img src="./next-logo.png" alt="" />
        </span>
        <span className="skills6">
          <img src="./js-logo.png" alt="" />
        </span>
        <span className="skills5">
          <img src="./tailwind.jpg" alt="" />
        </span>
        <span className="skills4">
          <img src="./redux.jpg" alt="" />
        </span>
        <span className="skills3">
          <img src="./node1.jpg" alt="" />
        </span>
        <span className="skills2">
          <img src="./mongo.png" alt="" />
        </span>
        <span className="skills1">
          <img style={{ objectFit: "fill" }} src="./docker.jpg" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Skills;
