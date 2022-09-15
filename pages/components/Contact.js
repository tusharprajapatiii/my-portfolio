import React from "react";

function Contact() {
  return (
    <div>
      <div className="max-w-lg mb-6">
        <h1 className="text-purple-700 text-shadow text-[30px] md:text-[50px] font-extrabold">
          Contact ME
        </h1>
        <div className="md:p-10 py-4 space-y-2  md:space-y-4">
          <p className="font-semibold md:text-lg">
            {" "}
            <span className="md:text-2xl text-purple-700 font-semibold">
              Phone
            </span>{" "}
            9867838918
          </p>
          <p className="font-semibold md:text-lg">
            {" "}
            <span className="md:text-2xl text-purple-700 font-semibold">
              Email
            </span>{" "}
            prajapatitushar789@gmail.com
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;