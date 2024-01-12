import React, { useState } from 'react'
import img from '../assets/car3.jpg'
import AddCategory from './AddcategoryModal';
import AddSubCategory from './AddSubcategoryModal'
import AddProductModal from './AddProductModal'
const MainPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [issubcategoryaddModalOpen, setSubcategoryAddModalOpen] = useState(false);
    const [isAddProductModal, setAddProductModalOpen] = useState(false);

    const handleButtonClick = () => {
      setModalOpen(true);
      
    };
    const handleAddSubcategoryButtonClick = () => {
        setSubcategoryAddModalOpen(true);
      };
      const handleAddProductModalClick = () => {
        setAddProductModalOpen(true);
      };
    const handleCloseModal = () => {
      setModalOpen(false);
      setSubcategoryAddModalOpen(false)
      setAddProductModalOpen(false)
    };
  return (
    <>
    <div className="flex justify-end mr-12 mt-5 mb-7">
      <button onClick={handleButtonClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add category</button>
      <AddCategory isOpen={isModalOpen} onClose={handleCloseModal} />
      <button onClick={handleAddSubcategoryButtonClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add sub category</button>
      <AddSubCategory isOpen={issubcategoryaddModalOpen} onClose={handleCloseModal}/>
      <button onClick={handleAddProductModalClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add product</button>
<AddProductModal isOpen={isAddProductModal} onClose={handleCloseModal}/>
    </div>

    <div>


<div class="w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow ">
        <img class="p-8 rounded-t-lg" src={img} alt="product image" />
    
    <div class="p-5">
        
            <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">AMD Rayzon</h5>
        
        
        <div class="flex items-center justify-between">
           
         <span class="text-xl font-semibold  text-gray-900 dark:text-white my-3">$599</span>
        
         </div>
<div class="flex ">
    <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>


        </div>
    </div>
</div>

    </div>
    </>
  )
}

export default MainPage
