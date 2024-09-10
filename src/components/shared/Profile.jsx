import React from 'react'
import { FaEdit } from 'react-icons/fa'
import img from "../../assets/Frame 580.png"
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='max-w-7xl mx-auto mt-4 flex flex-col justify-center items-center'>
         <div className="flex flex-col items-center justify-center w-full mx-auto p-4 bg-gray-100">
   
      <div className="relative">
        <img
          src={img}

          alt="User"
          className="w-32 h-32 rounded-full object-cover"
        />
        <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full text-gray-700 shadow-md">
          <FaEdit />
        </button>
      </div>

  
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">User Name</h2>
    </div>
    <div className="w-full max-w-md mt-10">
        <div className="flex justify-between">
          <button className="px-4 py-2 rounded bg-gray-500 text-white">
            Edit Profile
          </button>

          <button className="px-4 py-2 rounded bg-yellow-500 text-white">
           <Link to={"/order"} > Order History</Link>
          </button>

          <button className="px-4 py-2 rounded bg-yellow-500 text-white">
            Change Password
          </button>
        </div>
      </div> 

      <div className="flex flex-col justify-center items-center w-full mx-auto py-8  mt-9 bg-gray-100">
     
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Edit PROFILE</h2>

     
      <form className="w-full max-w-lg bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            UserName
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
            Contact No
          </label>
          <input
            id="contactNo"
            name="contactNo"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your contact number"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your address"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Save and Change
        </button>
      </form>
    </div>
      
    
  
    </div>
    
  )
}

export default Profile