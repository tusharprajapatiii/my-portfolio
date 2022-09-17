import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  return (
    <div className=" pt-20 overflow-hidden mt-14 md:m-0 px-6">
      <div className="">
        <h1 className="text-purple-700 text-shadow text-[30px] md:text-[40px] font-extrabold">
          Personal & Client Projects
        </h1>
        <div className="max-w-lg ">
          <p>Showcase of all the Projects worked till now.</p>
          <p>
            Major technologies used in these projects are React, Nextjs,
            TailwindCss, ExpressJS and Mongodb
          </p>
        </div>
      </div>
      <Frontend />
      <Fullstack />
    </div>
  );
}

export default Projects;

function Frontend() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 1 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
        rotate: 360,
      });
      animation2.start({
        x: 0,
        rotate: 360,

        transition: { duration: 1 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
    }
    if (!inView) {
      animation.start({
        x: "-50vw",
      });
      animation2.start({
        x: "50vw",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="py-3">
      <h2 className="text-purple-700 text-shadow  md:text-[20px] font-extrabold">
        frontend projects...
      </h2>
      <div className="grid md:grid-cols-2 mt-8 gap-20">
        <motion.div
          className="shadow-lg cursor-pointer p-2  rounded-sm shadow-purple-400 "
          animate={animation}
        >
          <img className="  " src="./client.png" alt="" />
          <p className="text-purple-700 font-semibold mt-1">
            Recent project- Client&apos;s portfolio
          </p>
          <p className="text-[12px]">
            Static site built with react and tailwind{" "}
          </p>
        </motion.div>{" "}
        <motion.div
          className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
          animate={animation2}
        >
          <img src="./ecom.png" alt="" />
          <p className="text-purple-700 mt-1 font-semibold"> Ecommerce Site </p>
          <p className="text-[12px]">
            Built with react, vanilla css, Auth0, payment gateway etc{" "}
          </p>
        </motion.div>{" "}
        <motion.div
          className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
          animate={animation}
        >
          <img src="./cable.png" alt="" />
          <p className="text-purple-700 mt-1 font-semibold">
            {" "}
            Trailer watching site{" "}
          </p>
          <p className="text-[12px]">
            First ever React Project using TMDB API{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Fullstack() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 1 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
        rotate: 360,
      });
      animation2.start({
        x: 0,
        rotate: 360,

        transition: { duration: 1 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
    }
    if (!inView) {
      animation.start({
        x: "-50vw",
      });
      animation2.start({
        x: "50vw",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="py-3">
      <h2 className="text-purple-700 text-shadow text-[20px] font-extrabold">
        FullStack projects...
      </h2>
      <div className="grid gap-20  my-3 md:grid-cols-2">
        <motion.div
          animate={animation}
          className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
        >
          <img src="kvar.png" alt="" />
          <p className="text-purple-700 font-semibold mt-1">
            {" "}
            Client&apos;s Company Marketplace{" "}
          </p>
          <p className="text-[12px]">
            worked on the backend and admin panel using express and mongodb
          </p>
        </motion.div>{" "}
        <motion.div
          animate={animation2}
          className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
        >
          <img src="social.png" alt="" />
          <p className="text-purple-700 mt-1 font-semibold">
            {" "}
            Social Media website **On development{" "}
          </p>
          <p className="text-[12px]">
            Built entirely with nextjs, made api&apos;s on next itself and mongo
            for database
          </p>
        </motion.div>
      </div>
    </div>
  );
}
