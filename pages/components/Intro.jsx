import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosRocket } from "react-icons/io";
function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-100vh",
        transition: { duration: 1.2 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
      animation2.start({
        y: "500vw",

        transition: { duration: 1.8 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
    }
    if (!inView) {
      animation.start({
        y: 0,
      });
    }
  }, [inView]);
  return (
    <>
      <section className=" md:h-screen w-full md:flex  items-center xl:items-start lg:justify-start justify-center relative overflow-hidden z-10">
        <div className="flex my-2   py-4 relative  flex-col md:flex-row  ">
          <motion.div
            initial={{ y: "-50vh" }}
            animate={{ y: "0vh" }}
            transition={{ delay: 7 }}
            className="absolute top-[18%] left-[6.5%] hidden lg:block "
          >
            <img className="h-20  w-20" src="./me.png" alt="" />
          </motion.div>
          <motion.span
            initial={{ x: 0, y: 0 }}
            transition={{ duration: 2.5, ease: "linear", delay: 5 }}
            animate={{
              x: [
                0, -50, -100, -150, -200, -250, -400, -700, -800, -900, -1000,
                -1100, -1200, -1300, -1400, -1500,
              ],
              y: [
                80, -80, -140, -260, -310, -350, -420, -440, -490, -520, -560,
                -590, -660, -700, -720, -780, -800,
              ],
            }}
            className="absolute  z-40 -bottom-40 right-20 "
          >
            <IoIosRocket
              className="transform h-10 w-10 -rotate-90"
              fill="red"
            />
          </motion.span>
          <div className="flex justify-center relative font-bold md:w-[50vw] text-[60px] items-center">
            <motion.span
              initial={{ y: "-100vh" }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3 }}
            >
              H
            </motion.span>
            <motion.span
              initial={{ y: "-100vh" }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.1 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ y: "-100vh" }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.2 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ y: "-100vh" }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.3 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ y: -1000 }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.4 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ y: -1000 }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.5 }}
            >
              o
            </motion.span>{" "}
            <motion.span
              initial={{ y: -1000 }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.6 }}
            >
              o
            </motion.span>{" "}
            <motion.span
              initial={{ y: -1000 }}
              animate={{
                y: [
                  -800, -600, -300, -100, 50, 0, -200, -50, 0, -10, -50, -200,
                  -500, -1000,
                ],
              }}
              transition={{ duration: 3.7, ease: "linear" }}
            >
              o
            </motion.span>{" "}
            <motion.h1
              initial={{
                y: "30vh",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                delay: 3.5,
              }}
              className="absolute lg:left-20 top-16 text-5xl md:text-[50px]   my-10 md:block hidden text-left "
            >
              <br />
              <b className="text-[70px] lg:text-[90px] text-violet-600 text-shadow-1 ">
                T
              </b>
              USHAR,
              <br />
              <span className="text-3xl  lg:text-[32px] pl-4">
                Web Developer
              </span>
            </motion.h1>
          </div>
          <div>
            <motion.img
              className="md:anime m-auto"
              src={`https://thumbs.dreamstime.com/b/mask-activists-guy-fawkes-used-anonymous-lizard-squad-protesters-65170619.jpg`}
              height="510px"
              width="500px"
            />
          </div>
        </div>
      </section>
      <div className=" clouds">
        <motion.img src="./cloud1.png" className="cloud1" alt="cloud" />
        <motion.img src="./cloud2.png" className="cloud2" alt="cloud" />
        <motion.img src="./cloud3.png" className="cloud3" alt="cloud" />
        <motion.img src="./cloud4.png" className="cloud4" alt="cloud" />
        <motion.img src="./cloud5.png" className="cloud5" alt="cloud" />
      </div>
    </>
  );
}

export default Intro;
