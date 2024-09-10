import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCard = ({blog}) => {
   const {id,image,rating,title,protein,carbs,fat}= blog;
  return (
   <Link to={`/blog/${id}`}>
    <div>
      <div className=" bg-base-100 shadow-xl  rounded    px-2 py-3">
        <div>
         <div>
           <div className="">
            <figure>
              <img
                src={image}
                alt="Shoes"
                className="rounded w-size-full"
              />
            </figure>
            <div>
               <div className="flex mt-2">
               <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
               </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold text-gray-500 mt-2">{title}</h2>
              <p className="mt-2">$100</p>
              <div className=" mt-3 w-full text-center bg-green-400 p-2 text-white font-bold  rounded">
                <button className="">Buy Now</button>
              </div>
            </div>
            <div className="mt-2 flex gap-4 items-center justify-center text-red-400 font-bold">
                <h4>Protein {protein} /</h4>
                <h4>Carbs {carbs} /</h4>
                <h4>Fat {fat}</h4>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
     
    
   </Link>
  );
};

export default SingleCard;
