// import React, { useEffect, useState } from 'react';

// const AddProductModal = ({ isOpen, onClose, subcategories }) => {
//     const [productTitle, setProductTitle] = useState('');
//     const [variants, setVariants] = useState([
//       { id: 1, RAM: '', price: '', quantity: 0 },
//     ]);
//     const [selectedSubcategory, setSelectedSubcategory] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productImages, setProductImages] = useState([]);
  
//     // Dummy data for testing
//     const dummySubcategories = [
//       { id: 1, name: 'Subcategory 1' },
//       { id: 2, name: 'Subcategory 2' },
//       { id: 3, name: 'Subcategory 3' },
//       // Add more dummy data as needed
//     ];
  
//     useEffect(() => {
//       return () => {
//         setProductTitle('');
//         setVariants([{ id: 1, RAM: '', price: '', quantity: 0 }]);
//         setSelectedSubcategory('');
//         setProductDescription('');
//         setProductImages([]);
//       };
//     }, []);
  
//     const handleAddVariant = () => {
//       setVariants([...variants, { id: variants.length + 1, RAM: '', price: '', quantity: 0 }]);
//     };
  
//     const handleRemoveVariant = (id) => {
//       setVariants(variants.filter((variant) => variant.id !== id));
//     };
  
//     const handleAddProduct = () => {
//       // Add your logic for handling the "Add Product" button click here
//       console.log('Adding Product:', {
//         title: productTitle,
//         variants: variants,
//         subcategory: selectedSubcategory,
//         description: productDescription,
//         images: productImages,
//       });
//       // Optionally, you can close the modal after handling the action
//       onClose();
//     };
  
//     const handleCancel = () => {
//       onClose();
//     };
  
//     if (!isOpen) {
//       return null;
//     }
  
//     return (
//       <div className="fixed inset-0 flex items-center justify-center">
//         <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
//         <div className="bg-white p-7 rounded-lg z-10">
//           <h1 className='text-xl text-center mb-7 mt-5'>Add Product</h1>
//           <table>
//   <tr>
//     <td>Title:</td>
//     <td><input type="text" name="title"/></td>
//   </tr>
//   <tr>
//     <td>Name:</td>
//     <td><input type="text" name="name"/></td>
//   </tr></table>

//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Product Title</label>
//             <input
//               type="text"
//               value={productTitle}
//               onChange={(e) => setProductTitle(e.target.value)}
//               className="border w-full py-4 px-7 rounded-xl"
//               placeholder='Enter product title'
//             />
//           </div>
  
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Variants</label>
            // {variants.map((variant) => (
            //   <div key={variant.id} className="flex items-center mb-3">
            //     <label className="block text-gray-700 text-sm font-bold mb-2 mr-2">RAM</label>
            //     <input
            //       type="text"
            //       value={variant.RAM}
            //       onChange={(e) => {
            //         const updatedVariants = [...variants];
            //         const index = updatedVariants.findIndex((v) => v.id === variant.id);
            //         updatedVariants[index].RAM = e.target.value;
            //         setVariants(updatedVariants);
            //       }}
            //       className="border py-2 px-4 rounded-xl mr-2"
            //       placeholder='RAM'
            //     />
            //     <label className="block text-gray-700 text-sm font-bold mb-2 mr-2">Price</label>
            //     <input
            //       type="text"
            //       value={variant.price}
            //       onChange={(e) => {
            //         const updatedVariants = [...variants];
            //         const index = updatedVariants.findIndex((v) => v.id === variant.id);
            //         updatedVariants[index].price = e.target.value;
            //         setVariants(updatedVariants);
            //       }}
            //       className="border py-2 px-4 rounded-xl mr-2"
            //       placeholder='Price'
            //     />
            //     <label className="block text-gray-700 text-sm font-bold mb-2 mr-2">Quantity</label>
            //     <div className="flex items-center">
                  
            //       <span>{variant.quantity}</span>
            //       <button
            //         onClick={() => {
            //           const updatedVariants = [...variants];
            //           const index = updatedVariants.findIndex((v) => v.id === variant.id);
            //           updatedVariants[index].quantity += 1;
            //           setVariants(updatedVariants);
            //         }}
            //         className="bg-green-500 text-white px-3 py-2 rounded-md ml-2"
            //       >
            //         +
            //       </button>
            //       <button
            //         onClick={() => {
            //           const updatedVariants = [...variants];
            //           const index = updatedVariants.findIndex((v) => v.id === variant.id);
            //           updatedVariants[index].quantity = Math.max(0, updatedVariants[index].quantity - 1);
            //           setVariants(updatedVariants);
            //         }}
            //         className="bg-red-500 text-white px-3 py-2 rounded-md ml-2"
            //       >
            //         -
            //       </button>
            //     </div>
            //   </div>
            // ))}
//             <button onClick={handleAddVariant} className="bg-blue-500 text-white px-3 py-2 rounded-md">
//               Add Variant
//             </button>
//           </div>
  
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Select Subcategory</label>
//             <select
//               value={selectedSubcategory}
//               onChange={(e) => setSelectedSubcategory(e.target.value)}
//               className="border w-full py-4 px-7 rounded-xl text-gray-500"
//             >
//               <option value="">Select a Subcategory</option>
//               {dummySubcategories.map((subcategory) => (
//                 <option key={subcategory.id} value={subcategory.id}>
//                   {subcategory.name}
//                 </option>
//               ))}
//             </select>
//           </div>
  
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
//             <textarea
//               value={productDescription}
//               onChange={(e) => setProductDescription(e.target.value)}
//               className="border w-full py-4 px-7 rounded-xl"
//               placeholder='Enter product description'
//             />
//           </div>
  
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
            //   onChange={(e) => {
            //     const files = e.target.files;
            //     const uploadedImages = [];
            //     for (let i = 0; i < files.length; i++) {
            //       const file = files[i];
            //       uploadedImages.push({ id: i + 1, file });
            //     }
            //     setProductImages(uploadedImages);
            //   }}
//             />
//           </div>
  
//           <div className="flex justify-center">
//             <button onClick={handleAddProduct} className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl">
//               ADD PRODUCT
//             </button>
//             <button onClick={handleCancel} className="px-6 py-3 bg-gray-300 text-white rounded-xl">
//               DISCARD
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AddProductModal;

import React, { useEffect, useState } from 'react';
import  Upload from './ImageUpload'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AddProductModal = ({ isOpen, onClose, subcategories }) => {
  const [productTitle, setProductTitle] = useState('');
  const [variants, setVariants] = useState([
    { id: 1, RAM: '', price: '', quantity: 0 },
  ]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImages, setProductImages] = useState([]);

  // Dummy data for testing
  const dummySubcategories = [
    { id: 1, name: 'Subcategory 1' },
    { id: 2, name: 'Subcategory 2' },
    { id: 3, name: 'Subcategory 3' },
    // Add more dummy data as needed
  ];

  useEffect(() => {
    return () => {
      setProductTitle('');
      setVariants([{ id: 1, RAM: '', price: '', quantity: 0 }]);
      setSelectedSubcategory('');
      setProductDescription('');
      setProductImages([]);
    };
  }, []);

  const handleAddVariant = () => {
    setVariants([...variants, { id: variants.length + 1, RAM: '', price: '', quantity: 0 }]);
  };

 

  const handleAddProduct = () => {
    // Add your logic for handling the "Add Product" button click here
    console.log('Adding Product:', {
      title: productTitle,
      variants: variants,
      subcategory: selectedSubcategory,
      description: productDescription,
      images: productImages,
    });
    // Optionally, you can close the modal after handling the action
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
      <div className="bg-white p-7 rounded-lg z-10 w-2/4">
        <h1 className='text-xl text-center mb-7 mt-5'>Add Product</h1>

        {/* Table-Like Layout */}
        <table>
          <tbody>
            <tr  >
              <td>
                <label className="block text-gray-700 text-sm font-bold mb-10 px-7">Product Title</label>
              </td>
              <td>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="border w-full py-4 px-7 rounded-xl mb-10"
                  placeholder='Enter product title'
                />
              </td>
            </tr>

            {/* Variants */}
            <tr >
              <td >
                <label className="block px-7 text-gray-700 text-sm font-bold mb-10">Variants</label>
              </td>
              <td>
              {variants.map((variant) => (
  <div key={variant.id} className="flex items-center mb-3">
    <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">RAM</label>
    <input
      type="text"
      value={variant.RAM}
      onChange={(e) => {
        const updatedVariants = [...variants];
        const index = updatedVariants.findIndex((v) => v.id === variant.id);
        updatedVariants[index].RAM = e.target.value;
        setVariants(updatedVariants);
      }}
      className="border py-2 px-4 rounded-xl mb-10 mr-2 w-1/5" // Adjust the width as needed
      placeholder='RAM'
    />

    <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">Price</label>
    <input
      type="text"
      value={variant.price}
      onChange={(e) => {
        const updatedVariants = [...variants];
        const index = updatedVariants.findIndex((v) => v.id === variant.id);
        updatedVariants[index].price = e.target.value;
        setVariants(updatedVariants);
      }}
      className="border py-2 px-4 rounded-xl mb-10 mr-2 w-1/5" // Adjust the width as needed
      placeholder='Price'
    />

    <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">QTY</label>
    <div className="flex items-center ">
  <button
    onClick={() => {
      const updatedVariants = [...variants];
      const index = updatedVariants.findIndex((v) => v.id === variant.id);
      updatedVariants[index].quantity -= 1;
      setVariants(updatedVariants);
    }}
    className="text-gray-500 px-3 py-3 -mt-9 rounded-md ml-2 "
  >
    <IoIosArrowBack />
  </button>

  <span className="px-2 -mt-9">{variant.quantity}</span> {/* Adjust the padding as needed */}

  <button
    onClick={() => {
      const updatedVariants = [...variants];
      const index = updatedVariants.findIndex((v) => v.id === variant.id);
      updatedVariants[index].quantity = Math.max(0, updatedVariants[index].quantity + 1);
      setVariants(updatedVariants);
    }}
    className="  px-3 -mt-9 py-3 rounded-md ml-2 "
  >
        <IoIosArrowForward />

   
  </button>
</div>

  </div>
))}
  </td>
            </tr>
            <tr>
  <td></td>
  <td className="flex justify-end">
    <button onClick={handleAddVariant} className="bg-blue-500 text-white px-3 py-2 rounded-md mb-6 -mt-3 mr-5">
      Add Variant
    </button>
  </td>
</tr>

            

            {/* Select Subcategory */}
            <tr>
              <td>
                <label className="block px-7 text-gray-700 text-sm font-bold mb-10">Select Subcategory</label>
              </td>
              <td>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="border w-full py-4 px-7 rounded-xl text-gray-500 mb-10"
                >
                  <option value="">Select a Subcategory</option>
                  {dummySubcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            {/* Product Description */}
            <tr>
              <td>
                <label className="block px-7 text-gray-700 text-sm font-bold mb-10">Product Description</label>
              </td>
              <td>
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="border w-full py-4 px-7 rounded-xl mb-10"
                  placeholder='Enter product description'
                />
              </td>
            </tr>

            {/* Upload Images */}
            <tr>
              <td>
                <label className="block px-7 text-gray-700 text-sm font-bold mb-10">Upload Images</label>
              </td>
              <td>
                <Upload/>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center">
          <button onClick={handleAddProduct} className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl">
            ADD PRODUCT
          </button>
          <button onClick={handleCancel} className="px-6 py-3 bg-gray-300 text-white rounded-xl">
            DISCARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
