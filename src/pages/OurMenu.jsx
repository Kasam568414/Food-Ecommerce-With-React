import React, { useState } from "react";
import SingleOurMeals from "../components/shared/SingleOurMeals";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OurMenu = () => {
    const meals = useLoaderData();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <section className="">
      

      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex space-x-4">
          <button
            onClick={() => handleButtonClick("button1")}
            className={`px-4 py-4  rounded-md transition-colors ${
              activeButton === "button1"
                ? "bg-orange-500 text-xl font-bold text-white"
                : "bg-gray-300 text-black font-bold text-xl "
            }`}
          >
            Full Menu
          </button>

          <button
            onClick={() => handleButtonClick("button2")}
            className={`px-4 py-4 rounded-md transition-colors ${
              activeButton === "button2"
                ? "bg-orange-500 text-white  text-xl font-bold "
                : "bg-gray-300 text-black font-bold text-xl "
            }`}
          >
            Enteree
          </button>

          <button
            onClick={() => handleButtonClick("button3")}
            className={`px-4 py-4 rounded-md transition-colors ${
              activeButton === "button3"
                ? "bg-orange-500 text-white  text-xl font-bold "
                : "bg-gray-300 text-black font-bold text-xl "
            }`}
          >
            Breakfast
          </button>
          <button
            onClick={() => handleButtonClick("button4")}
            className={`px-4 py-4 rounded-md transition-colors ${
              activeButton === "button4"
                ? "bg-orange-500 text-white  text-xl font-bold "
                : "bg-gray-300 text-black font-bold text-xl "
            }`}
          >
            Snacks
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider divider-start"></div>
      </div>

      <section className="max-w-7xl mx-auto mt-16 grid grid-cols-4 gap-8">
        {
            meals.map(meal => <SingleOurMeals key={meal.id} meal={meal}></SingleOurMeals>)
        }

      </section>
       <div className="flex items-center space-x-2 justify-center ">
     
      <button className="px-3 py-1 rounded-md bg-gray-300 text-gray-600 cursor-not-allowed">
        <FaArrowLeft />
      </button>

    <p className="text-xl text-gray-600 font-bold">Previous</p>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">1</button>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">2</button>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">3</button>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">4</button>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">5</button>
      <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">Next</button>

  
      <button className="px-3 py-1 rounded-md bg-blue-500 text-white">
        <FaArrowRight />
      </button>
    </div>
    </section>
  );
};

export default OurMenu;
