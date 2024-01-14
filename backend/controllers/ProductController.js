import ProductModel from "../models/ProductModel.js";
import cloudinary from "../config/cloudinary.js";
export const handleAddProduct = async (req, res) => {
  try {
    const { title, variants, subcategory, description, images } = req.body;
    const Images = await Promise.all(
      images.map(async (image) => {
        return await uploadImage(image);
      })
    );

    async function uploadImage(image) {
      return (
        await cloudinary.uploader.upload(image, { folder: "ProductImage" })
      ).secure_url;
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

    res.status(201).json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getProductData = async (req, res) => {
  try {
    const productId = req.params.productId;

    const productDetails = await ProductModel.findById(productId);

    if (!productDetails) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(productDetails);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const EditProduct = async (req, res) => {
  const productId = req.params.productId;
  const { images } = req.body;
  const UploadImages = await Promise.all(
    images.map(async (image) => {
      return await uploadImage(image);
    })
  );

  async function uploadImage(image) {
    return (await cloudinary.uploader.upload(image, { folder: "ProductImage" }))
      .secure_url;
  }

  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      {
        title: req.body.title,
        variants: req.body.variants,
        subCategory: req.body.subcategory,
        description: req.body.description,
        imageUrl: UploadImages,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res
      .status(200)
      .json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
