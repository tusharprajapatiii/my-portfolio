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
      <section className=" h-screen w-full md:flex  items-center xl:items-start lg:justify-start justify-center relative overflow-hidden z-10">
        <div className="flex my-2   py-4 relative  flex-col md:flex-row  ">
          <motion.div
            initial={{ y: "-50vh" }}
            animate={{ y: "0vh", rotate: [30, -30, 30, -30, 30, -30, 0] }}
            transition={{ delay: 3.5, duration: 2.5 }}
            className="absolute top-[18%]   left-[6.5%] hidden lg:block "
          >
            <Image height={80} width={80} src="/me.png" alt="myself" />
          </motion.div>
          <motion.span
            initial={{ x: 0, y: 0, opacity: 0 }}
            transition={{ duration: 2.5, ease: "linear", delay: 2 }}
            animate={{
              x: [
                "-10vw",
                "-20vw",
                "-30vw",
                "-40vw",
                "-50vw",
                "-60vw",
                "-70vw",
                "-80vw",
                "-100vw",
              ],
              y: [
                "-12vh",
                "-30vh",
                "-45vh",
                "-58vh",
                "-72vh",
                "-86vh",
                "-100vh",
                "-110vh",
                "-180vh",
              ],
              opacity: 1,
              scale: 5,
            }}
            className="absolute hidden lg:block  z-40 -bottom-40 right-10 "
          >
            <IoIosRocket
              className="transform h-10 w-10 -rotate-90"
              fill="red"
            />
          </motion.span>
          <div className="flex min-h-screen max-h-[100vh] md:min-h-[inherit] md:max-h-[inherit] flex-col md:flex-row justify-center relative font-bold md:w-[50vw] text-[60px] md:items-center">
            {/* <motion.span
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
            </motion.span>{" "} */}
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
                delay: 0.5,
              }}
              className="absolute lg:left-20  top-16 text-5xl md:text-[40px] hidden md:block  my-10  text-left "
            >
              <br />
              <b className="text-[70px] lg:text-[95px] gradient font font-extrabold text-violet-800  ">
                T
              </b>
              <span className="gradient1">USHAR</span>
              <br />
              <span className=" gradient1  lg:text-[32px] ">Web Developer</span>
            </motion.h1>
            <h1 className="relative px-2 leading-6 flex justify-center flex-col md:hidden">
              <span className="text-gray-500 font1 text-[38px]  ">Hello,</span>
              <br />
              <span className="text-gray-500 text-[38px]">
                <span className="font gradient text-[48px]">T</span>
                ushar here,
              </span>
              <br />
              <span className="text-gray-500 text-[40px]">web developer</span>
            </h1>
            <div className="md:hidden">
              <div className="border-2 my-8 border-cyan-500 text-[20px] max-w-fit ml-3 p-2 ">
                Scroll Down
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              className="md:anime m-auto"
              src={`https://thumbs.dreamstime.com/b/mask-activists-guy-fawkes-used-anonymous-lizard-squad-protesters-65170619.jpg`}
              height="510px"
              width="500px"
              alt="anonymous"
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
