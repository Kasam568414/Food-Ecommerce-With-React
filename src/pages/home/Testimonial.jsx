import React from "react";
import img from "/Ellipse 14.png";
import img1 from "/Ellipse 14(1).png";
import img2 from "/Ellipse 15.png";

const Testimonial = () => {
  return (
    <section>
      <div>
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-6xl font-bold ">Testimonial</h1>
        </div>
        <div className="bg-gray-200  px-24 mt-12">
          <div className="flex p-5 max-w-7xl mx-auto gap-8 items-center">
          <div className="">
            <img src={img} alt="" />
          </div>
          <div className="flex-1 p-5  max-w-full font-bold">
            <h4 className="text-2xl font-bold mb-2" >Anjelina</h4>
            <h5 className="text-red-300 mb-3">Student</h5>
            <p className="text-gray-400 font-bold ">
              elit nibh elit lacus vitae lacus sed diam dui. est. lacus
              hendrerit enim. non Nam sollicitudin. tincidunt ex urna. lacus,
              elit. tincidunt Nunc lorem. adipiscing vitae hendrerit Nunc ipsum
              est. est. felis, dui non elit. sit at, Sed non nec viverra
              fringilla placerat in nisl. tincidunt amet, nec non, risus urna ac
              ex. Nullam Donec nec tortor. Morbi ex urna. placerat odio leo.
              nulla, lobortis, faucibus risus at, vitae Donec Quisque tincidunt
              libero, sapien laoreet Quisque id{" "}
            </p>
          </div>
          </div>
        </div>

        <div className="  px-24 mt-12">
          <div className="flex flex-row-reverse p-5 max-w-7xl mx-auto gap-8 items-center">
          <div className="">
            <img src={img1} alt="" />
          </div>
          <div className="flex-1 p-5  max-w-full font-bold">
            <h4 className="text-2xl font-bold mb-2" >Anjelina</h4>
            <h5 className="text-red-300 mb-3">Student</h5>
            <p className="text-gray-400 font-bold ">
              elit nibh elit lacus vitae lacus sed diam dui. est. lacus
              hendrerit enim. non Nam sollicitudin. tincidunt ex urna. lacus,
              elit. tincidunt Nunc lorem. adipiscing vitae hendrerit Nunc ipsum
              est. est. felis, dui non elit. sit at, Sed non nec viverra
              fringilla placerat in nisl. tincidunt amet, nec non, risus urna ac
              ex. Nullam Donec nec tortor. Morbi ex urna. placerat odio leo.
              nulla, lobortis, faucibus risus at, vitae Donec Quisque tincidunt
              libero, sapien laoreet Quisque id{" "}
            </p>
          </div>
          </div>
        </div>

        <div className="  px-24 mt-12">
          <div className="flex p-5 max-w-7xl mx-auto gap-8 items-center">
          <div className="">
            <img src={img2} alt="" />
          </div>
          <div className="flex-1 p-5  max-w-full font-bold">
            <h4 className="text-2xl font-bold mb-2" >Anjelina</h4>
            <h5 className="text-red-300 mb-3">Student</h5>
            <p className="text-gray-400 font-bold ">
              elit nibh elit lacus vitae lacus sed diam dui. est. lacus
              hendrerit enim. non Nam sollicitudin. tincidunt ex urna. lacus,
              elit. tincidunt Nunc lorem. adipiscing vitae hendrerit Nunc ipsum
              est. est. felis, dui non elit. sit at, Sed non nec viverra
              fringilla placerat in nisl. tincidunt amet, nec non, risus urna ac
              ex. Nullam Donec nec tortor. Morbi ex urna. placerat odio leo.
              nulla, lobortis, faucibus risus at, vitae Donec Quisque tincidunt
              libero, sapien laoreet Quisque id{" "}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
