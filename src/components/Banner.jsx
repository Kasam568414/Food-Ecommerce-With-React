import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BannerLogo from "../assets/Subtract.jpg"
import BannerLogo2 from "../assets/Frame 1.jpg"


const Banner = () => {
  return (
    <section>
     

<section className=" bg-gray-100 py-12 px-6 md:px-12 lg:px-24  mt-4">
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between '>
          
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-7xl font-bold mb-4 ">Keep track of <span className='text-green-500'>Fitness Goal</span></h1>
                <p className="text-2xl text-gray-700 mb-6 text-bold r">
                Order on Simply Good Food
                </p>
                <button className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            <span className="mr-2">Explore Now</span>
            <FaArrowRight className="w-5 h-5 text-white" />
        </button>
            </div>

            <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <div className="relative">
               
                    <img
                        src={BannerLogo}
                        alt="House"
                        className="w-96 h-96 object-cover rounded-lg "
                    />
                
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full ">
                            <img
                                src={BannerLogo2}
                                alt="Interior"
                                className="w-60 h-60 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

  
</section>

   
  )
}

export default Banner