import React from "react";
import Image1 from "../../assets/good1.jpg";
import Image2 from "../../assets/good2.jpg";
import Image3 from "../../assets/good3.jpg"

const Categories = () => {
  const categories = [
    {
      name: "Health awareness",
      description:
        "Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.",
      image: Image1,
      id: "1",
    },
    {
      name: "More Protein",
      description:"Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.",
      image: Image2,
      id: "2",
    },
    {
      name: "Unending Variety",
      description:"Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.",
      image: Image3,
      id: "3",
    },
  ];

  return  <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center lg:text-6xl font-bold mt-16 text-4xl">
        Why Simply Good Food{" "}
      </h1>
 
   <div className="grid lg:grid-cols-3 grid-cols-1" >

{
  categories.map((category)=>(
    <div key={category.id}>
        <div>
     <div className="max-w-max mx-auto mt-16">
        <img src={category.image} alt="" />
      </div>
     <div className="text-center ">
     <h1 className="text-4xl font-bold mt-3 mb-3">{category.name}</h1>
      <p className="w-[350px] mx-auto text-xl font-bold ">
        {category.description}
      </p>
     </div>
     </div>
    </div>
  ))
}
    
    
 


  </div>;
  </div>
};

export default Categories;
