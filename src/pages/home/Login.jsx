import React, { useContext, useState } from 'react'
import image from "../../assets/login_sign.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signWithUser}= useContext(AuthContext)
    const navigate = useNavigate();
    const location =useLocation();
    const from = location?. state|| "/"
   

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const {email,password}=data;
    signWithUser(email,password)
    .then(result =>{
      if (result.user) {
        navigate(from)
        toast.success("login success")
        
      }
        console.log(result.user)

    })
    .catch(error =>{
        console.log(error);
    })
  }


  return (

<section>
<div className="flex min-h-screen ">
 
      <div className="w-1/2">
        <img
          src={image}
          alt="Placeholder"
          className="object-cover w-full"
        />
      </div>

  
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gray-200">
        <div className="max-w-md w-full   bg-white p-3 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
 
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name='email'
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>

     
            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter your password"
                name='password'
                {...register("password", { required: true })}
              />
               <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 top-10 right-0 px-3 py-2 text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

          
            <div className="flex justify-between items-center mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgotten Password?
              </a>
            </div>

       
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Login
              </button>
            </div>

        
            <div className="text-center">
              <p className="text-gray-700">
                Don't Have an Account?{' '}
                <Link to={"/sign"}>
                <a href="#" className="text-indigo-600 hover:underline">
                  Sign Up
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
</section>
  )
}

export default Login