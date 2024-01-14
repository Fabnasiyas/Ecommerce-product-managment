import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subcategories: {
    type: [String], 
    default: [],   
  },
});

const CategoryModel = mongoose.model('Category', categorySchema);

export default CategoryModel;
