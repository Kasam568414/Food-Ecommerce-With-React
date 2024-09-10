import React, { useContext,  } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavLogo from '../../assets/nav_logo.jpg'
import { AuthContext } from "../../provider/AuthProvider";





const Navbar = () => {
  
  const {logOut ,user} =useContext(AuthContext)
  console.log(user);
  const navigate = useNavigate();
  const to = "/login"

  const handleLogout =()=>{
    logOut()
    navigate(to)
  
  }


 
  const links = (
    <>
      <li className="font-bold text-xl ">
        {" "}
        <Link to={"/"}> Home</Link> 
      </li>
      <li className="font-bold  text-xl ">
        <Link to={"/our_menu"}> Our menus</Link>
      </li>
      <li className="font-bold  text-xl ">
        {" "}
        <Link to={"/meal"}>Meal plans</Link>
      </li>
      <li className="font-bold   text-xl ">
        <Link to={"/catering"}> Catering</Link>
      </li>
      <li className="font-bold   text-xl ">
        <Link to={"/work"}> How it work</Link>
      </li>
      <li className="font-bold   text-xl ">
        <Link to={"/testimonial"}> Testimonials</Link>
      </li>
      <li className="font-bold   text-xl ">
        <Link to={"/faq"}> FAQ</Link>
      </li>
     
    </>
  );

        
  return (
    <nav className="">
     
      <div className=" navbar   flex items-center w-full p-2 w-1/  shadow-xl   ">
<div className=" max-w-7xl mx-auto navbar">
<div className="navbar-start">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {links}
    </ul>
  </div>
   <img className="size-24" src={NavLogo} alt="" />
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">{links}</ul>
</div>

<div className="navbar-end">
  {user? (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL

              || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-500 text-white rounded-box w-52"
      >
         <li>
          <button className="btn btn-sm btn-ghost">Kasam</button>
        </li>
        <li>
          <NavLink to={"/profile"}><button className="btn btn-sm btn-ghost">My Profile</button></NavLink>
        </li>
        <li>
          <button className="btn btn-sm btn-ghost">Feed Back</button>
        </li>

        <li>
          <button onClick={handleLogout} className="btn btn-sm btn-ghost">Logout</button>
        </li>
      </ul>
    </div>
  ) : (
    <Link to={"/login"}>
    
        <button className="btn  btn-ghost text-xl font-bold">Login</button>
    </Link>
    
    
  )}
</div>
</div>
</div>
      
   
    </nav>














  );
};

export default Navbar;
