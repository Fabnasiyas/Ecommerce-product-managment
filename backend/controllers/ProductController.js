import ProductModel from "../models/ProductModel.js";
import cloudinary from "../config/cloudinary.js";
export const handleAddProduct=async(req,res)=>{
  try {
    const { title, variants, subcategory, description, images } = req.body;
    const Images = await Promise.all(
      images.map(async (image) => {
        return await uploadImage(image);
      })
    );

    async function uploadImage(image) {
      return (await cloudinary.uploader.upload(image, { folder: "ProductImage" }))
        .secure_url;
    }
    
    const formattedVariants = variants.map((variant) => ({
      ram: variant.RAM,
      price: parseFloat(variant.price), 
      qty: variant.quantity,
    }));
  
    const newProduct = new ProductModel({
      title: title,
      variants: formattedVariants,
      subCategory: subcategory,
      description: description,
      imageUrl: Images,
    });
  
    const savedProduct = await newProduct.save();
  
    res.status(201).json({ message: 'Product saved successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    
    // Assuming you want to send an error response
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export const getAllProducts=async(req,res)=>{
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export const getProductData = async (req, res) => {
  console.log('.............................');
  try {
    const productId = req.params.productId;
    const productDetails = await ProductModel.findById(productId);
console.log(productDetails);
    if (!productDetails) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Send the product details as JSON
    res.json(productDetails);
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
