import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import { useParams } from "react-router-dom";
import EditProduct from "../pages/EditProductModal.jsx";
import axios from "../utils/axios";
import { FaRegHeart } from "react-icons/fa";
const ViewProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedRam, setSelectedRam] = useState(0);
  const [isEditProductModal, setEditProductModalOpen] = useState(false);
  const [productDataToEdit, setProductDataToEdit] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  const handleCloseModal = () => {
    setEditProductModalOpen(false);
  };
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };
  const handleEditProductModalClick = () => {
    console.log("Product data to edit:", product);
    setProductDataToEdit(product);
    setEditProductModalOpen(true);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/getProductDetails/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <Navbar />

      <div className="flex h-screen overflow-hidden">
        <div className="w-1/2 h-48 py-32 pl-28 pr-9">
          <div className="border border-gray-900 rounded-xl flex justify-center items-center">
            <div className="p-5 m-5 ">
              {product && (
                <img
                  src={product.imageUrl[selectedImageIndex]}
                  alt=""
                  className="h-20rem w-21rem rounded-lg object-contain"
                />
              )}{" "}
            </div>
          </div>
          <div>
            <div className="p-3 m-3 flex space-x-2">
              {product &&
                product.imageUrl.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    onClick={() => handleImageClick(index)}
                    alt={`Product Image ${index + 1}`}
                    className={`h-32 w-32 border border-gray-300 rounded-lg cursor-pointer ${
                      selectedImageIndex === index
                        ? "border-customBlue border-4"
                        : ""
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-4  flex flex-col  items-start">
          {product && (
            <div className="mt-32">
              <h1 className="mb-3 font-semibold text-2xl">{product.title}</h1>
              <h1 className="mb-3 font-bold text-2xl">
                ${product.variants[selectedRam].price}
              </h1>
              <h3 className="mb-3">Availability :</h3>

              <h3>
                Hurry up only {product.variants[selectedRam].qty} products left
                in stock!
              </h3>
            </div>
          )}
          <hr className="border-t border-gray-300 my-3 w-full " />
          <div>
            <div className="flex items-center mb-3">
              <h1 className="mb-3 mr-2">RAM:</h1>
              <div className="flex">
                <div className="flex space-x-2">
                  {product &&
                    product.variants.map((variant, index) => (
                      <button
                        key={index}
                        className={`bg-gray-300 px-4 py-1 rounded ${
                          selectedRam === index
                            ? "bg-blue-500 border border-gray-900 "
                            : ""
                        }`}
                        onClick={() => setSelectedRam(index)}
                      >
                        {variant.ram}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex items-center mb-3 ">
              <h1 className="mb-3 mr-2">Quantity:</h1>
              <div className="-mt-2">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-100 border px-2 ml-2"
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-100 border px-2"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleEditProductModalClick}
              className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl"
            >
              Edit Product
            </button>
            <EditProduct
              isOpen={isEditProductModal}
              onClose={handleCloseModal}
              productDataToEdit={productDataToEdit}
            />
            <button className="bg-customYellow text-white px-12 py-4 m-5 rounded-xl">
              But it Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetails;
