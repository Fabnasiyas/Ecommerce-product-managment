import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import axios from "../utils/axios";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/category/categorieslisting"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((prevCategoryId) =>
      prevCategoryId === categoryId ? null : categoryId
    );
  };

  const isCategoryOpen = (categoryId) =>
    openCategoryId === categoryId ||
    (openCategoryId &&
      categories
        .find((category) => category.id === openCategoryId)
        ?.subcategories.includes(categoryId));

  return (
    <div className="bg-white w-1/4 h-screen p-16">
      <h1 className="text-2xl mb-4">Categories</h1>
      <h1 className="text-xl mb-4">All Categories</h1>
      <ul className="list-none p-0">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <div>
              <a
                href="#"
                className="cursor-pointer flex items-center"
                onClick={() => toggleCategory(category.id)}
              >
                <span className="mr-2">{category.name}</span>
                <span className="ml-40">
                  {isCategoryOpen(category.id) ? (
                    <IoIosArrowDown className="ml-2 cursor-pointer" />
                  ) : (
                    <IoIosArrowForward className="cursor-pointer" />
                  )}
                </span>
              </a>
            </div>
            {isCategoryOpen(category.id) && (
              <ul className="list-none pl-3 mt-3">
                {category.subcategories.map((subcategory, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox mr-2" />
                      <a href="#" className="">
                        {subcategory}
                      </a>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
