// import React, { useState } from "react";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

// const Sidebar = () => {
//   const [isCategory1Open, setCategory1Open] = useState(false);

//   return (
//     <>
//       <div className="bg-white w-1/4 h-screen p-16">
//         <h1 className="text-2xl mb-4">Categories</h1>
//         <h1 className="text-xl mb-4">All Categories</h1>
//         <ul className="list-none p-0">
//           <li className="mb-2">
//             <div>
//               <a
//                 href="#"
//                 className=" cursor-pointer flex items-center"
//                 onClick={() => setCategory1Open(!isCategory1Open)}
//               >
//                 <span className="mr-2">Category 1</span>
//                 <span className="ml-40">
//                   {isCategory1Open ? (
//                     <IoIosArrowDown
//                       className="ml-2 cursor-pointer"
//                       onClick={() => setCategory1Open(!isCategory1Open)}
//                     />
//                   ) : (
//                     <IoIosArrowForward
//                       className="cursor-pointer"
//                       onClick={() => setCategory1Open(!isCategory1Open)}
//                     />
//                   )}
//                 </span>
//               </a>
//             </div>
//             {isCategory1Open && (
//               <ul className="list-none pl-3 mt-3">
//                 <li className="mb-2">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="form-checkbox mr-2" />
//                     <a href="#" className="">
//                       Subcategory 1
//                     </a>
//                   </label>
//                 </li>
//                 <li className="mb-2">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="form-checkbox mr-2" />
//                     <a href="#" className="">
//                       Subcategory 2
//                     </a>
//                   </label>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import axios from '../utils/axios';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/category/categorieslisting");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((prevCategoryId) => (prevCategoryId === categoryId ? null : categoryId));
  };

  const isCategoryOpen = (categoryId) => openCategoryId === categoryId || (openCategoryId && categories.find(category => category.id === openCategoryId)?.subcategories.includes(categoryId));

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

// import React, { useState, useEffect } from "react";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
// import axios from '../utils/axios';

// const Sidebar = () => {
//   const [categories, setCategories] = useState([]);
//   const [openCategory, setOpenCategory] = useState(null);

//   useEffect(() => {
//     // Fetch categories from the backend when the component mounts
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/category/categorieslisting");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error.message);
//       }
//     };

//     fetchCategories();
//   }, []); // The empty dependency array ensures this effect runs only once on mount

//   console.log('====================================');
//   console.log(categories);
//   console.log('====================================');

//   const toggleCategory = (categoryId) => {
//     setOpenCategory((prevOpenCategory) =>
//       prevOpenCategory === categoryId ? null : categoryId
//     );
//   };

//   return (
//     <>
//       <div className="bg-white w-1/4 h-screen p-16">
//         <h1 className="text-3xl mb-4">Categories</h1>
//         <h1 className="text-2xl mb-6">All Categories</h1>
//         <ul className="list-none p-0">
//           {categories.map((category) => (
//             <li key={category.id} className="mb-2">
//               <div>
//                 <a
//                   href="#"
//                   className=" cursor-pointer flex items-center "
//                   onClick={() => toggleCategory(category.id)}
//                 >
//                   <span className="mr-2">{category.name}</span>
//                   <span className="ml-40">
//                     {openCategory === category.id ? (
//                       <IoIosArrowDown
//                         className="ml-2 cursor-pointer"
//                       />
//                     ) : (
//                       <IoIosArrowForward
//                         className="cursor-pointer"
//                       />
//                     )}
//                   </span>
//                 </a>
//               </div>
//               {openCategory === category.id && (
//                 <ul className="list-none pl-3 mt-3 ml-3">
//                   {category.subcategories.map((subcategory) => (
//                     <li key={subcategory.id} className="mb-2">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="form-checkbox mr-2"
//                         />
//                         <a href="#" className="ml-2">
//                           {subcategory}
//                         </a>
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
