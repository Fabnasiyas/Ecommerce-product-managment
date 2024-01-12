import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid'; // Import PlusIcon from Heroicons

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="flex items-center">
      {selectedImages.map((image, index) => (
        <div key={index} className="relative w-20 h-20 mr-4 overflow-hidden rounded-md">
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
    
      {/* Other content or functionality can be added here */}
    </div>
  );
};

export default ImageUpload;
