import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold checking">
            <p>Hi, I'm Kunal, nice to meet you.Please take a look around</p>
          </div>
          <div>
            <p>
              I am passionate about building software that improves the lives of
              those around me. I'm electrical engineer turn Web developer and
              coding bootcamp graduate. My hobbies are travelling and watching
              boxing. I thrive on connecting and collaborating with people in
              the industry and am always open to opportunities that could help
              myself and others grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
