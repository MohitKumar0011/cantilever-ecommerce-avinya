import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" >Avinya</Link>
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`} id="navbarSupportedContent">
          <ul className="md:flex md:space-x-4 md:items-center">
            <li>
              <NavLink  to="/" className="block py-2 px-4 text-gray-800 hover:text-gray-600" >Home</NavLink>
            </li>
            <li>
              <NavLink  to="/category" className="block py-2 px-4 text-gray-800 hover:text-gray-600" >Category</NavLink>
            </li>
            <li>
              <NavLink to="/register"  className="block py-2 px-4 text-gray-800 hover:text-gray-600" >Register</NavLink>
            </li>
            <li>
              <NavLink to="/login"  className="block py-2 px-4 text-gray-800 hover:text-gray-600" >Login</NavLink>
            </li>
            <li>
              <NavLink to="/cart"  className="block py-2 px-4 text-gray-800 hover:text-gray-600" >Cart (0)</NavLink>
            </li>
            
           
          </ul>
          
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
