import React from "react";
import FooterLogo from "../../assets/nav_logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
   <div>
     <div className="mt-16 bg-gray-100 h-60">
      <div className="">
        <div className="r max-w-7xl mx-auto ">
          <div className="flex justify-between items-center p-8">
            <div>
              <img className="w-32 h-32" src={FooterLogo} alt="" />
            </div>
            <div className="text-gray-400 mb-2 font-bold">
              <h4>Home</h4>
              <h4>Our menus</h4>
              <h4>Meal plans</h4>
              <h4>Catering</h4>
            </div>
            <div className="text-gray-400 mb-2 font-bold">
              <h4>How it work</h4>
              <h4>Testimonials</h4>
              <h4>FAQ</h4>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Subscribe To Our Email Alerts
              </h2>
              <div className="flex ">
                <div>
                  <div className=" p-6 rounded-lg  flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="flex space-x-4  ">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaFacebookF size={30} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-700 transition-colors"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <FaLinkedinIn size={30} />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <FaTwitter size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer footer-center bg-black text-xl text-white font-bold-content p-4 mb-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} All rights reserved by Simply Good Foods</p>
  </aside>
</footer>
    
   </div>
  );
};

export default Footer;
