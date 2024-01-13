// import React, { useEffect, useState } from 'react';

// const AddSubcategoryModal = ({ isOpen, onClose }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [subCategoryValue, setSubCategoryValue] = useState('');
//   useEffect(() => {
//     return () => {
//         setSelectedCategory('');
//         setSubCategoryValue('');
//     }
//   }, [])
//   // Dummy data for testing
//   const dummyCategories = [
//     { id: 1, name: 'Category 1' },
//     { id: 2, name: 'Category 2' },
//     { id: 3, name: 'Category 3' },
//     // Add more dummy data as needed
//   ];

//   const handleAdd = () => {
//     // Add your logic for handling the "Add" button click here
//     console.log('Adding Subcategory:', { category: selectedCategory, subcategory: subCategoryValue });
//     // Optionally, you can close the modal after handling the action
//     onClose();
//   };

//   const handleCancel = () => {
//     setSelectedCategory('');
//     setSubCategoryValue('');
//     onClose();
//   };

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
//       <div className="bg-white p-7 rounded-lg z-10">
//         <h1 className='text-xl text-center mb-7 mt-5'>Add Subcategory</h1>
        
//         <div className="mb-6">
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="border w-full py-4 px-7 rounded-xl text-gray-500 "
//           >
//             <option value="" className=''>Select a Category</option>
//             {dummyCategories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <input
//             type="text"
//             value={subCategoryValue}
//             onChange={(e) => setSubCategoryValue(e.target.value)}
//             className="border w-full py-4 px-7 rounded-xl"
//             placeholder='Enter subcategory Name'
//           />
//         </div>

//         <div className="flex justify-center">
//           <button onClick={handleAdd} className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl">
//             ADD
//           </button>
//           <button onClick={handleCancel} className="px-6 py-3 bg-gray-300 text-white rounded-xl">
//             DISCARD
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddSubcategoryModal;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddSubcategoryModal = ({ isOpen, onClose }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategoryValue, setSubCategoryValue] = useState('');

  useEffect(() => {
    // Fetch categories from the backend when the modal is opened
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/category/getallaategories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    if (isOpen) {
      fetchCategories();
    }
  }, [isOpen]);

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:4000/category/addsubcategory', {
        categoryId: selectedCategory,
        name: subCategoryValue,
      });

      console.log('Subcategory added:', response.data);
      onClose();
      setSelectedCategory('');
      setSubCategoryValue('');
    } catch (error) {
      console.error('Error adding subcategory:', error.message);
    }
  };

  const handleCancel = () => {
    setSelectedCategory('');
    setSubCategoryValue('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
      <div className="bg-white p-7 rounded-lg z-10">
        <h1 className='text-xl text-center mb-7 mt-5'>Add Subcategory</h1>

        <div className="mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border w-full py-4 px-7 rounded-xl text-gray-500 "
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={subCategoryValue}
            onChange={(e) => setSubCategoryValue(e.target.value)}
            className="border w-full py-4 px-7 rounded-xl"
            placeholder='Enter subcategory Name'
          />
        </div>

        <div className="flex justify-center">
          <button onClick={handleAdd} className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl">
            ADD
          </button>
          <button onClick={handleCancel} className="px-6 py-3 bg-gray-300 text-white rounded-xl">
            DISCARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSubcategoryModal;
