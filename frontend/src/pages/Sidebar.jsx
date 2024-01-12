import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [isCategory1Open, setCategory1Open] = useState(false);

  return (
    <>
      <div className="bg-white w-1/4 h-screen p-16">
        <h1 className="text-2xl mb-4">Categories</h1>
        <h1 className="text-xl mb-4">All Categories</h1>
        <ul className="list-none p-0">
          <li className="mb-2">
            <div>
              <a
                href="#"
                className=" cursor-pointer flex items-center"
                onClick={() => setCategory1Open(!isCategory1Open)}
              >
                <span className="mr-2">Category 1</span>
                <span className="ml-40">
                  {isCategory1Open ? (
                    <IoIosArrowDown
                      className="ml-2 cursor-pointer"
                      onClick={() => setCategory1Open(!isCategory1Open)}
                    />
                  ) : (
                    <IoIosArrowForward
                      className="cursor-pointer"
                      onClick={() => setCategory1Open(!isCategory1Open)}
                    />
                  )}
                </span>
              </a>
            </div>
            {isCategory1Open && (
              <ul className="list-none pl-3 mt-3">
                <li className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <a href="#" className="">
                      Subcategory 1
                    </a>
                  </label>
                </li>
                <li className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <a href="#" className="">
                      Subcategory 2
                    </a>
                  </label>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
