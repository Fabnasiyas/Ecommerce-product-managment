import React, { useState } from 'react';

const AddcategoryModal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    // Add your logic for handling the "Add" button click here
    console.log('Adding:', inputValue);
    // Optionally, you can close the modal after handling the action
    onClose();
  };

  const handleCancel = () => {
    // Add your logic for handling the "Cancel" button click here
    // Optionally, you can close the modal after handling the action
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
      <div className="bg-white p-7 rounded-lg z-10">
<h1 className='text-xl text-center mb-7 mt-5'>Add Category</h1>        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border w-full py-4 px-7 rounded-xl mb-6   "
          placeholder='Enter category Name'
        />
        <div className="flex justify-center">
          <button onClick={handleAdd} className="mr-2 px-6 py-3 bg-customYellow text-white rounded-xl">
            ADD
          </button>
          <button onClick={handleCancel} className="px-6 py-3 bg-gray-300 text-white rounded-xl">
DISCARD        </button>
        </div>
      </div>
    </div>
  );
};

export default AddcategoryModal;