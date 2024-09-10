import React, { useState } from "react";
import { FaMinus, FaPhone, FaPlus, FaStar, FaUser } from "react-icons/fa";
import imge2 from "/image1.jpg"

const MealPlans = () => {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <section className="max-w-7xl mx-auto ">
      <h1 className="text-5xl font-bold mt-10">Select Your Meal </h1>
      <div className="flex mt-8">
        <div className=" flex-1 bg-white p-5 w-60 shadow-xl rounded-3xl">
          <div className="grid grid-cols-1">
            <div className=" rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                {/* First Button */}
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                {/* Plus and Minus with Number in the Middle */}
                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                {/* First Button */}
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                {/* Plus and Minus with Number in the Middle */}
                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                {/* First Button */}
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                {/* Plus and Minus with Number in the Middle */}
                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                {/* First Button */}
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                {/* Plus and Minus with Number in the Middle */}
                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                {/* First Button */}
                <button className="px-4 py-2 bg-white text-gray-400 text-2xl font-bold  w-full shadow-2xl rounded-3xl">
                  First Button
                </button>

                {/* Plus and Minus with Number in the Middle */}
                <div className="flex items-center space-x-2 bg-white shadow-xl p-3 rounded-2xl">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 w-64 shadow-xl flex-1">
          <div className="flex justify-between bg-gray-200 p-4 rounded-2xl text-red-500 text-bold text-xl ">
            <h4>Subtotal</h4>
            <h4>$150.00</h4>
          </div>
          <div>
            
            <button onClick={handleOpenModal} className="bg-green-500 w-full p-3 rounded-2xl text-white font-bold mt-3 text-xl mb-4">
              Open Modal
            </button>
            <hr />

      
            <div className="bg-white shadow-xl px-2 py-2 rounded-2xl">
               <div>
               <div className="flex gap-4 p-4">
                    <img className="size-20 rounded-2xl" src={imge2} alt="" />
                   <div>
                   <div className="flex justify-evenly gap-x-4">
                        <h4>Heathy Food Name</h4>
                       
                        <div>
                  <div className="  text-orange-400 flex  items-center gap-4">
                  <FaStar></FaStar>
                  <h4>49mg</h4>
                  
                    
                   
                  </div>
                </div>
                
                    </div>
                   <div className="flex justify-between items-center gap-4">
                    <h4 className="text-xl text-red-500 font-bold mb-2">Protein 49mg</h4>
                    <h4 className="text-xl text-red-500 font-bold mb-2">Carbs 49mg</h4>
                    <h4 className="text-xl text-red-500 font-bold mb-2">Fat 49mg</h4>
                    
                   </div>
                    
                   </div>
                  
                    
                </div>
               </div>
            </div>

            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl flex">
                
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>

                
                  <div className="w-full p-8 bg-green-500">
                    <h2 className="text-xl font-bold mb-4 text-white">Shipping Information</h2>
                    <form>
                      <div className="space-y-4">
                    
                        <div className="flex col-span-2 gap-5">
                          <div className="relative mb-3">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-gray-500" />
                            </span>
                            <input
                              type="text"
                              className="input input-bordered pl-10 w-full"
                              placeholder="Full Name"
                            />
                          </div>

                        
                          <div className="relative mb-3">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaPhone className="text-gray-500" />
                            </span>
                            <input
                              type="tel"
                              className="input input-bordered pl-10 w-full"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative mb-3">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-500" />
                        </span>
                        <input
                          type="text"
                          className="input input-bordered pl-10 w-full"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="flex gap-8">
                        <div className="relative mb-3">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-500" />
                          </span>
                          <input
                            type="text"
                            className="input input-bordered pl-10 w-full"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="relative mb-3">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-500" />
                          </span>
                          <input
                            type="text"
                            className="input input-bordered pl-10 w-full"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex">
                        <div className="form-control ">
                          <label className="label cursor-pointer">
                           
                            <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-primary"
                            />
                             
                          </label>
                          <div className="">Your Profile Address</div>
                        </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary mt-4">
                        Submit
                      </button>
                    </form>
                  </div>

                
                  <div className="w-full p-8 border-l">
                    <h2 className="text-xl font-bold mb-4">
                     PROCEED TO PAY
                    </h2>
                   <div className="flex justify-between items-center mb-3 text-red-600 font-bold text-xl">
                   <p className="">Price</p>
                   <p className=""> $100</p>
                   </div>
                    <div className="text-xl font-bold  text-gray-600 flex justify-between items-center mb-3">
                    <p className="">Delivery Charge </p>
                    <p className=""> $100</p>
                    </div>
                    <hr className="" />
                    <div className="text-xl font-bold  text-gray-600 flex justify-between items-center mb-3 mt-4">
                    <p className="">Total </p>
                    <p className=""> : 100 BDT</p>
                    </div>

                    <button className="p-3 rounded-3xl bg-green-500 text-xl text-white font-bold  w-full mt-5">
                     Confirm Payment
                    </button>
                  </div>
                 
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
