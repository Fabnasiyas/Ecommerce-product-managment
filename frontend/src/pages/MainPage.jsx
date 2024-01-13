// import React, { useState } from 'react'
// import img from '../assets/car3.jpg'
// import AddCategory from './AddcategoryModal';
// import AddSubCategory from './AddSubcategoryModal'
// import AddProductModal from './AddProductModal'
// const MainPage = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [issubcategoryaddModalOpen, setSubcategoryAddModalOpen] = useState(false);
//     const [isAddProductModal, setAddProductModalOpen] = useState(false);

//     const handleButtonClick = () => {
//       setModalOpen(true);
      
//     };
//     const handleAddSubcategoryButtonClick = () => {
//         setSubcategoryAddModalOpen(true);
//       };
//       const handleAddProductModalClick = () => {
//         setAddProductModalOpen(true);
//       };
//     const handleCloseModal = () => {
//       setModalOpen(false);
//       setSubcategoryAddModalOpen(false)
//       setAddProductModalOpen(false)
//     };
//   return (
//     <>
//     <div className="flex justify-end mr-12 mt-5 mb-7">
//       <button onClick={handleButtonClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add category</button>
//       <AddCategory isOpen={isModalOpen} onClose={handleCloseModal} />
//       <button onClick={handleAddSubcategoryButtonClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add sub category</button>
//       <AddSubCategory isOpen={issubcategoryaddModalOpen} onClose={handleCloseModal}/>
//       <button onClick={handleAddProductModalClick} className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">Add product</button>
// <AddProductModal isOpen={isAddProductModal} onClose={handleCloseModal}/>
//     </div>

//     <div>


// <div class="w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow ">
//         <img class="p-8 rounded-t-lg" src={img} alt="product image" />
    
//     <div class="p-5">
        
//             <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">AMD Rayzon</h5>
        
        
//         <div class="flex items-center justify-between">
           
//          <span class="text-xl font-semibold  text-gray-900 dark:text-white my-3">$599</span>
        
//          </div>
// <div class="flex ">
//     <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg class="w-4 h-4 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>


//         </div>
//     </div>
// </div>

//     </div>
//     </>
//   )
// }

// export default MainPage
import React, { useEffect, useState } from 'react'
import img from '../assets/car3.jpg'
import AddCategory from './AddcategoryModal';
import AddSubCategory from './AddSubcategoryModal'
import AddProductModal from './AddProductModal'
import axios from '../utils/axios'
import { Link } from 'react-router-dom';
const MainPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [issubcategoryaddModalOpen, setSubcategoryAddModalOpen] = useState(false);
    const [isAddProductModal, setAddProductModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const productsPerPage = 6; 
    const [currentPage, setCurrentPage] = useState(1);

    const handleButtonClick = () => {
      setModalOpen(true);
      
    };
    useEffect(() => {
      // Fetch product details from your API
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:4000/product/getAllProducts');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error.message);
        }
      };
  
      fetchProducts();
    }, []);
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    <div className="grid grid-cols-3 gap-14 mt-4">
  {currentProducts.map((product) => (
    <Link to={`/home/viewproductdetails/${product._id}`} key={product._id}>
      <div className="bg-white border border-gray-200 rounded-3xl shadow p-4">
        <img className="w-full h-32 object-cover rounded-t-lg mb-4" src={product.imageUrl} alt="product image" />

        <div>
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white mb-2">{product.title}</h5>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">${product.variants[0].price}</span>
          </div>

          <div className="flex mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className="w-3 h-3 text-gray-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      {/* Pagination */}
      <div className="mt-14 flex justify-center">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <button
          key={index}
          className={`mx-1 px-1  ${
            currentPage === index + 1
              ? 'rounded-full bg-customYellow text-white'
              : 'text-customYellow'
          }`}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
        ))}
      </div>
    </>
  )
}

export default MainPage
