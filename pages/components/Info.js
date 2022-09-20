import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
function Info() {
  const [preview, setPreview] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      setPreview(true);
    }
    if (preview) {
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
    if (!preview) {
      animation.start({ opacity: 0 });
      animation2.start({ x: "-100vw", opacity: 0 });
    }
  }, [preview, inView]);
  return (
    <div
      ref={ref}
      className="md:p-10 lg:flex px-2 relative justify-evenly sm:block lg:h-[70vh]"
    >
      <motion.div
        className="z-20 lg:basis-[50%] text-left "
        animate={animation}
      >
        {preview && (
          <h1 className="text-purple-700 gradient text-shadow text-[22px] md:text-[50px] font-extrabold">
            <Typewriter
              words={["ME, MYSELF & JOURNEY"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              delaySpeed={30}
            />
          </h1>
        )}
        <div className="py-4 text-left tracking-wider max-w-sm text-[10px] md:text-[15px] md:leading-6 ">
          <p>
            Tushar, an IT engineer with a fusion of technology and creativity.
            Started the development journey back in 2020 with a passion of
            building and learning new things; from there learning every bit that
            comes on my way.
          </p>
          <h4 className="text-base font-semibold">Experience:</h4>
          <p> Did an 4 month front end development Internship.</p>
          <p>Made personal complex full stack projects.</p>
          <p>Served service to three clients as a freelancer till now.</p>
        </div>
      </motion.div>
      <motion.div className="relative z-10 animate-bounce lg:flex justify-center items-center hidden  mx-10 right-0 top-6">
        <motion.img
          animate={animation2}
          className="h-96  opacity-25"
          src="./cycle.png"
          alt=""
        />
        <img
          className="lg:h-14 rounded-3xl h-12 w-10 lg:w-14 border-[5px] border-purple-800 absolute left-[10%] md:bottom-[30%] lg:bottom-[25%]"
          src="./udemy1.png"
          alt=""
        />
        <img
          className="lg:h-14 rounded-3xl h-12 w-10 border-[5px] border-purple-800 shadow-lg lg:w-14 absolute right-[10%] md:bottom-[30%] lg:bottom-[25%]"
          src="./You.png"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Info;
