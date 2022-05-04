import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="pt-[10rem]  w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 contact"
      >
        <form
          method="POST"
          action="https://getform.io/f/fbd49775-35d6-45b1-ad8d-e26907319824"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              //Submit the form below or shoot me an email -
              kunalpatil2391@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
      {/* footer */}
      <div className="footer w-full pt-[8rem] pb-[2.5rem] bg-[#0a192f] flex justify-center items-center text-gray-300">
        <div className="flex flex-col justify-center items-center">
          <p>Connect on Social Media</p>
          <div className="flex justfy-center mt-4">
            <div className="mr-3">
              <a
                href="#"
                className="hover:text-red-600 transition ease-out duration-300"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
            <div className="mr-3">
              <a
                href="#"
                className="hover:text-red-600 transition ease-out duration-300"
              >
                <FaGithub size={25} />
              </a>
            </div>
            <div className="mr-3">
              <a
                href="#"
                className="hover:text-red-600 transition ease-out duration-300"
              >
                <FaInstagram size={25} />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="hover:text-red-600 transition ease-out duration-300"
              >
                <HiOutlineMail size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
