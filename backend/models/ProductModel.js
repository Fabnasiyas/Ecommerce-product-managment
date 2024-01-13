import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  variants: [{
    ram: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    qty: {
      type: Number,
      required: true
    }
  }],
  subCategory: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: [String],  
    required: true,
  },
});

const ProductModel = mongoose.model('Product', productSchema);

export default  ProductModel;