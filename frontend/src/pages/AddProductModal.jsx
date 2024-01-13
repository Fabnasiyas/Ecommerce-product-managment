
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "../utils/axios";

import { PlusIcon } from "@heroicons/react/solid";
const AddProductModal = ({ isOpen, onClose }) => {
  const [productTitle, setProductTitle] = useState("");
  const [variants, setVariants] = useState([
    { id: 1, RAM: "", price: "", quantity: 0 },
  ]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [formErrors, setFormErrors] = useState({
    productTitle: "",
    selectedSubcategory: "",
    productDescription: "",
  });
  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/category/getallsubcategories"
        );

        setSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching subcategories:", error.message);
      }
    };
    fetchSubcategories();
  }, []);

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      { id: variants.length + 1, RAM: "", price: "", quantity: 0 },
    ]);
  };
  
  const readFileSync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };

      reader.readAsDataURL(file);
    });
  };
  const handleImageChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles.length > 0) {
      const promises = Array.from(selectedFiles).map((file) =>
        readFileSync(file)
      );

      Promise.all(promises)
        .then((base64Strings) => {
          // Update state or perform actions with the base64 strings
          setSelectedImages((prevImages) => [...prevImages, ...base64Strings]);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };
  console.log("....sekekcted from uplod");
  console.log(selectedImages);

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    let errors = {
      productTitle: "",
      selectedSubcategory: "",
      productDescription: "",
    };

    if (!productTitle.trim()) {
      errors.productTitle = "Product title is required";
    }

    if (!selectedSubcategory) {
      errors.selectedSubcategory = "Subcategory is required";
    }

    if (!productDescription.trim()) {
      errors.productDescription = "Product description is required";
    }

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }
    try {
    
      const response = await axios.post(
        "http://localhost:4000/product/addProduct",
        {
          title: productTitle,
          variants: variants,
          subcategory: selectedSubcategory,
          description: productDescription,
          images: selectedImages,
        }
      );

      if (response.status === 201) {
    
        setProductTitle("");
      setVariants([{ id: 1, RAM: "", price: "", quantity: 0 }]);
      setSelectedSubcategory("");
      setProductDescription("");
      setSelectedImages([]);

        onClose();
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
        <div className="bg-white p-7 rounded-lg z-10 w-2/4">
          <h1 className="text-xl text-center mb-7 mt-5">Add Product</h1>

          <table>
            <tbody>
            <tr>
                <td>
                  <label className="block text-gray-700 text-sm font-bold mb-10 px-7">
                    Product Title
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    className={`border w-full py-4 px-7 rounded-xl mb-10 ${
                      formErrors.productTitle && "border-red-500"
                    }`}
                    placeholder="Enter product title"
                  />
                  {formErrors.productTitle && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.productTitle}
                    </p>
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="block px-7 text-gray-700 text-sm font-bold mb-10">
                    Variants
                  </label>
                </td>
                <td>
                  {variants.map((variant) => (
                    <div key={variant.id} className="flex items-center mb-3">
                      <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">
                        RAM
                      </label>
                      <input
                        type="text"
                        value={variant.RAM}
                        onChange={(e) => {
                          const updatedVariants = [...variants];
                          const index = updatedVariants.findIndex(
                            (v) => v.id === variant.id
                          );
                          updatedVariants[index].RAM = e.target.value;
                          setVariants(updatedVariants);
                        }}
                        className="border py-2 px-4 rounded-xl mb-10 mr-2 w-1/5" // Adjust the width as needed
                        placeholder="RAM"
                      />

                      <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">
                        Price
                      </label>
                      <input
                        type="text"
                        value={variant.price}
                        onChange={(e) => {
                          const updatedVariants = [...variants];
                          const index = updatedVariants.findIndex(
                            (v) => v.id === variant.id
                          );
                          updatedVariants[index].price = e.target.value;
                          setVariants(updatedVariants);
                        }}
                        className="border py-2 px-4 rounded-xl mb-10 mr-2 w-1/5"
                        placeholder="Price"
                      />

                      <label className="block px-7 text-gray-700 text-sm font-bold mb-10 mr-2">
                        QTY
                      </label>
                      <div className="flex items-center ">
                        <button
                          onClick={() => {
                            const updatedVariants = [...variants];
                            const index = updatedVariants.findIndex(
                              (v) => v.id === variant.id
                            );
                            updatedVariants[index].quantity -= 1;
                            setVariants(updatedVariants);
                          }}
                          className="text-gray-500 px-3 py-3 -mt-9 rounded-md ml-2 "
                        >
                          <IoIosArrowBack />
                        </button>

                        <span className="px-2 -mt-9">{variant.quantity}</span>

                        <button
                          onClick={() => {
                            const updatedVariants = [...variants];
                            const index = updatedVariants.findIndex(
                              (v) => v.id === variant.id
                            );
                            updatedVariants[index].quantity = Math.max(
                              0,
                              updatedVariants[index].quantity + 1
                            );
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
                  <button
                    onClick={handleAddVariant}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md mb-6 -mt-3 mr-5"
                  >
                    Add Variant
                  </button>
                </td>
              </tr>
              {/* Select Subcategory */}
              <tr>
                <td>
                  <label className="block px-7 text-gray-700 text-sm font-bold mb-10">
                    Select Subcategory
                  </label>
                </td>
                <td>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className={`border w-full py-4 px-7 rounded-xl text-gray-500 mb-10 ${
                      formErrors.selectedSubcategory && "border-red-500"
                    }`}
                  >
                    <option value="">Select a Subcategory</option>
                    {subcategories.map((subcategory, index) => (
                      <option key={index} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </select>
                  {formErrors.selectedSubcategory && (
                    <p className="text-red-500 text-sm -mt-1 ">
                      {formErrors.selectedSubcategory}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label className="block px-7 text-gray-700 text-sm font-bold mb-10">
                    Product Description
                  </label>
                </td>
                <td>
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className={`border w-full py-4 px-7 rounded-xl mb-10 ${
                      formErrors.productDescription && "border-red-500"
                    }`}
                    placeholder="Enter product description"
                  />
                  {formErrors.productDescription && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.productDescription}
                    </p>
                  )}
                </td>
              </tr>

              {/* Upload Images */}
              <tr>
                <td>
                  <label className="block px-7 text-gray-700 text-sm font-bold mb-10">
                    Upload Images
                  </label>
                </td>
                <td>
                  <div className="flex items-center">
                    {selectedImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-20 h-20 mr-4 overflow-hidden rounded-md"
                      >
                        <img
                          src={image}
                          alt={`Selected ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                        <div
                          className="absolute top-0 right-0 cursor-pointer px-0.5 bg-customYellow text-white rounded-full"
                          onClick={() => removeImage(index)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                    <label
                      htmlFor="imageInput"
                      className="flex items-center justify-center w-20 h-20 mr-4 border-2 border-dashed rounded-md cursor-pointer"
                    >
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                        multiple
                      />
                      <PlusIcon className="w-6 h-6 text-gray-500" />
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl"
            >
              ADD PRODUCT
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-300 text-white rounded-xl"
            >
              DISCARD
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProductModal;
