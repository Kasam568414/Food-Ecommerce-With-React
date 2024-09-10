import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Blog1 = () => {
  const blog =useLoaderData();
  const {id} = useParams();
  const idInd =parseInt(id);
  const blogs = blog.find((eventCard)=> eventCard.id === idInd)
  const {image,rating,title,protein,carbs,fat
  } = blogs;

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex  items-center">
        <Link to={"/"}>
          <button className="flex items-center justify-center text-white px-4 py-2 transition-colors">
            <FaArrowLeft className="mr-2 text-red-500 w-4" />
            <span className="text-red-400 text-2xl">Back</span>
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto my-12 min-h-screen">
        <div className="flex flex-1 gap-10  ">
          <div className="bg-gray-200  p-4 rounded-2xl w-[525px]">
            <img className="w-full h-full bg-cover rounded-3xl" src={image} alt="" />
          </div>
          <div className="w-[525px] ">
            <h1 className="text-5xl font-bold mb-3">{title}</h1>
            <div className="flex items-center gap-5">
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <h4>{rating}</h4>
              </div>
            </div>

            <div className="mt-2 flex gap-4 items-center  text-red-400 font-bold">
              <h4>Protein {protein} /</h4>
              <h4>Carbs {carbs} /</h4>
              <h4>Fat {fat}</h4>
            </div>

            <div className="mt-3 text-2xl ">
              <p className="text-gray-400 font-bold">$100</p>
            </div>
            <div className="text-2xl mt-2 font-bold text-gray-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                est tempore dolores nostrum, minus nihil eligendi tempora
                reiciendis tenetur illum?
              </p>
            </div>

            <div className=" bg-green-400 p-3 rounded mt-3">
              <button className=" text-white font-bold w-full">
                Add To Cart
              </button>
            </div>
           <div className="mt-3">
           <div className="collapse collapse-arrow shadow-xl">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What are the foods like Steel Yat? How does the mail plan work?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow shadow-xl">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What are the foods like Steel Yat? How does the mail plan work?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow shadow-xl">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What are the foods like Steel Yat? How does the mail plan work?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Blog1;
