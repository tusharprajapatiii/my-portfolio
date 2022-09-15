import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Info() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        transition: { duration: 2.5 },
        opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
      });
      animation2.start({
        x: 0,
        transition: { duration: 2.5, ease: "linear" },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
      animation2.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView]);
  return (
    <div ref={ref} className="md:p-10 flex relative lg:h-[70vh]">
      <motion.div className="z-20" animate={animation}>
        <h1 className="text-purple-700 text-shadow text-[30px] md:text-[50px] font-extrabold">
          Me, MySelf & Journey
        </h1>
        <div className="py-4 max-w-sm">
          <b>Tushar, an IT engineer with a fusion of tech and creativity.</b>
          <p>
            Started the development journey back in 2020 with a passion of
            building and learning new things; from there learning every bit that
            comes on my way.
          </p>
          <h4 className="text-base font-semibold">Experience:</h4>
          <p> Did an 4 month front end development Internship</p>

          <p>Made personal complex full stack projects</p>

          <p>
            <b>Served service to three clients as a freelancer till now. </b>
          </p>
        </div>
      </motion.div>
      <motion.div className="relative z-10 animate-bounce md:flex justify-center items-center hidden  mx-10 right-0 top-6">
        <motion.img
          animate={animation2}
          className="h-96 "
          src="./cycle.png"
          alt=""
        />
        <img
          className="h-14 w-14 absolute left-[10%] bottom-[7%] "
          src="./udemy1.png"
          alt=""
        />
        <img
          className="h-14 w-14 absolute right-[10%] bottom-[7%] "
          src="./youtube1.png"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Info;
