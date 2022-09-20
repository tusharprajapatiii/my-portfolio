import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
function Projects() {
  const [preview, setPreview] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      setPreview(true);
    }
  }, [preview, inView]);

  return (
    <div
      ref={ref}
      className=" pt-6 overflow-hidden relative mt-14 md:m-0 md:px-6"
    >
      <div
        className={`text-3xl opacity-10 absolute hidden lg:block  md:text-[160px] right-32  name tracking-wider whitespace-nowrap text-center w-full bg-transparent font-bold text-shadow top-[17%] `}
      >
        WORK
      </div>
      <div className="">
        <h1 className="gradient text-shadow text-left text-[20px] md:text-[40px] font-extrabold">
          {preview && (
            <Typewriter
              words={["PERSONAL & CLIENT PROJECTS"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              delaySpeed={30}
            />
          )}
        </h1>
        <div className="max-w-lg text-[10px] tracking-wider text-left py-2 md:text-[15px] md:leading-6 ">
          <p>Showcase of all the Projects worked till now.</p>
          <p>
            Major technologies used in these projects are React, Nextjs,
            TailwindCss, ExpressJS and Mongodb.
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
  const [preview, setPreview] = useState(false);

  const { ref, inView } = useInView({
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
    if (!preview) {
      animation.start({
        x: "-50vw",
      });
      animation2.start({
        x: "50vw",
      });
    }
  }, [preview, inView]);
  return (
    <div ref={ref} className="py-3">
      <h2 className="text-purple-700 text-shadow  md:text-[20px] font-extrabold">
        frontend projects...
      </h2>
      <div className="grid md:grid-cols-2 mt-8 gap-20">
        <a
          target="_blank"
          rel="noreferrer"
          href={"http://client-portfolio-lyart.vercel.app"}
        >
          <motion.div
            className="shadow-lg cursor-pointer p-2  rounded-sm shadow-purple-400 "
            animate={animation}
          >
            <Image
              height={"20%"}
              width={"40%"}
              layout="responsive"
              src="/client.png"
              alt=""
            />
            <p className="text-purple-700 text-xs md:text-base font-semibold mt-1">
              Recent project- Client&apos;s portfolio *on process
            </p>
            <p className=" text-[10px] md:text-[12px]">
              Static site built with react and tailwind{" "}
            </p>
          </motion.div>
        </a>
        <a
          href="https://react-course-comfy-sloth-store.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
            animate={animation2}
          >
            <Image
              height={"20%"}
              width={"40%"}
              layout="responsive"
              src="/ecom.png"
              alt=""
            />
            <p className="text-purple-700 mt-1 text-xs md:text-base font-semibold">
              {" "}
              Ecommerce Site{" "}
            </p>
            <p className="text-[10px] md:text-[12px]">
              Built with react, vanilla css, Auth0, payment gateway etc{" "}
            </p>
          </motion.div>
        </a>
        <a
          href="https://cableflix-mern.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          <motion.div
            className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
            animate={animation}
          >
            <Image
              height={"20%"}
              width={"40%"}
              layout="responsive"
              src="/cable.png"
              alt=""
            />
            <p className="text-purple-700 text-xs md:text-base mt-1 font-semibold">
              {" "}
              Trailer watching site{" "}
            </p>
            <p className="text-[10px] md:text-[12px]">
              First ever React Project using TMDB API{" "}
            </p>
          </motion.div>
        </a>
      </div>
    </div>
  );
}

function Fullstack() {
  const [preview, setPreview] = useState(false);

  const { ref, inView } = useInView({
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
    if (!preview) {
      animation.start({
        x: "-50vw",
      });
      animation2.start({
        x: "50vw",
      });
    }
  }, [preview, inView]);
  return (
    <div ref={ref} className="py-3 ">
      <h2 className="text-purple-700 text-shadow text-[20px] font-extrabold">
        FullStack projects...
      </h2>
      <div className="grid gap-20  my-3 md:grid-cols-2">
        <a href="https://kvartech.in/" rel="noreferrer" target="_blank">
          <motion.div
            animate={animation}
            className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
          >
            <Image
              height={"20%"}
              width={"40%"}
              layout="responsive"
              src="/kvar.png"
              alt="project"
            />
            <p className="text-purple-700 text-xs md:text-base font-semibold mt-1">
              {" "}
              Client&apos;s Company Marketplace{" "}
            </p>
            <p className="text-[10px] md:text-[12px]">
              worked on the backend and admin panel using express and mongodb
            </p>
          </motion.div>
        </a>
        <a
          href="https://nextjs-social-mediaaa.vercel.app/signup"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            animate={animation2}
            className="shadow-lg cursor-pointer p-2 rounded-sm shadow-purple-400 "
          >
            <Image
              height={"20%"}
              width={"40%"}
              layout="responsive"
              src="/social.png"
              alt=""
            />
            <p className="text-purple-700 mt-1 text-xs md:text-base font-semibold">
              {" "}
              Social Media website **On development{" "}
            </p>
            <p className="text-[10px] md:text-[12px]">
              Built entirely with nextjs, made api&apos;s on next itself and
              mongo for database
            </p>
          </motion.div>
        </a>
      </div>
    </div>
  );
}
