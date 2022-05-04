import React from "react";
import work from "../assets/workImg.jpeg";
import note from "../assets/notezipper.PNG";
import instafood2 from "../assets/instafood2.PNG";
import instacart from "../assets/instacart.PNG";
import instacart3 from "../assets/instacart3.PNG";
import expense from "../assets/expensetracker.PNG";
import todo from "../assets/todo.PNG";

const Work = () => {
  return (
    <div
      name="work"
      className="pt-[10rem] sm:pt-[4rem] w-full md:h-auto text-gray-300 bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent works</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${note})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://notezipper-mern-kunal.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition ease-in duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/MERN-project"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${instacart3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping Cart
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://instacart-shopping-cart.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/Instacart"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${expense})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Expense Tracker
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kunalpatil239.github.io/Expense-Tracker-in-React/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/Expense-Tracker-in-React"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todolist App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kunalpatil239.github.io/Todo-app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/Todo-app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${instafood2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Restaurant Landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://instafood-restaurant.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/html-css-restaurant-website"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${instafood2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://instafood-restaurant.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kunalpatil239/html-css-restaurant-website"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="transition ease-in duration-300 hover:bg-red-600 hover:text-[white] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
