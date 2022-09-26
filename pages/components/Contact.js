import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
function Contact() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="relative overflow-hidden">
      <div
        className={`text-3xl opacity-10 absolute   md:text-[160px] left-40  name tracking-wider whitespace-nowrap text-center w-full bg-transparent font-bold text-shadow  bottom-6 `}
      >
        CONTACT
      </div>
      <div ref={ref} className="max-w-lg mb-6">
        <h1 className="gradient text-shadow text-[34px] font md:text-[46px] font-extrabold">
          {inView && (
            <Typewriter
              words={["CONTACT ME"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          )}
        </h1>
        <div className="md:p-10 space-y-3 md:space-y-0 py-5 md:flex justify-between ">
          <p className="font-semibold text-xs md:text-lg">
            {" "}
            <span className="md:text-2xl   text-purple-700 font-semibold">
              Phone
            </span>{" "}
            <span>9867838918</span>
          </p>
          <p className="font-semibold text-xs md:text-lg">
            {" "}
            <span className="md:text-2xl  text-purple-700 font-semibold">
              Email
            </span>{" "}
            <span>prajapatitushar789@gmail.com</span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
