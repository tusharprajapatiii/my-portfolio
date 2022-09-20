import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
function Contact() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div>
      <div ref={ref} className="max-w-lg mb-6">
        <h1 className="gradient text-shadow text-[30px] md:text-[50px] font-extrabold">
          {inView && (
            <Typewriter
              words={["CONTACT ME"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          )}
        </h1>
        <div className="md:p-10 py-4 space-y-2  ">
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
