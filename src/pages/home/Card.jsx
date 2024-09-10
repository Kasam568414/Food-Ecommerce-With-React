import React from "react";
import SingleCard from "../../components/shared/SingleCard";
import { useLoaderData } from "react-router-dom";



const Card = () => {
  const blogs = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-4  mt-20  mb-24">
      <div className="">
       
        <div>
          <h1 className="text-center mt-16 text-7xl font-bold mb-9">
            New & Trending menu
          </h1>
        </div>

        <section className=' grid grid-cols-4 mt-20 gap-10'>
          { blogs.map((blog) => (
            <SingleCard key={blog.id} blog={blog}></SingleCard>
          )) }
        </section>
      </div>
    </div>
  );
};

export default Card;
