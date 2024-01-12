import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
     <nav className="bg-customBlue p-5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1 flex ml-60">
            <div className="relative flex items-center">
              <input
                type="text"
                className="border rounded-2xl bg-white px-5 py-3.5 text-base font-normal  outline-none transition duration-200 ease-in-out focus:border-primary w-80"
                placeholder="Search here"
                aria-label="Search"
              />

              <button
                className="bg-customYellow px-10 py-4 m-25text-md font-medium text-white rounded-2xl -ml-10 transition duration-150 ease-in-out hover:bg-yellow-600 active:bg-yellow-700"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-white flex items-center">
              <FaRegHeart className="text-2xl" />
              <span className="ml-1 rounded-full bg-customYellow text-white px-1 text-xs">
                0
              </span>
            </div>

            <button className="text-white">Sign In</button>

            <div className="text-white flex items-center">
              <IoCartOutline className="text-2xl" />
              <span className="ml-1 rounded-full bg-customYellow text-white px-1 text-xs">
                0
              </span>
              <div className="ml-2 relative">Cart</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
