import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Skills() {
  return (
    <div className="relative   md:h-[70vh] justify-center items-center flex">
      <div className=" box1 h-[150px]  w-[150px] md:h-[190px] md:w-[190px] ">
        <span className="skills1">
          <img src="./React.png" alt="" />
        </span>
        <span className="skills2">
          <img src="./next-logo.png" alt="" />
        </span>
        <span className="skills3">
          <img src="./js-logo.png" alt="" />
        </span>
        <span className="skills4">
          <img src="./tailwind.jpg" alt="" />
        </span>
        <span className="skills5">
          <img src="./redux.jpg" alt="" />
        </span>
        <span className="skills6">
          <img src="./node1.jpg" alt="" />
        </span>
        <span className="skills7">
          <img src="./mongo.png" alt="" />
        </span>
        <span className="skills8">
          <img style={{ objectFit: "fill" }} src="./docker.jpg" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Skills;
