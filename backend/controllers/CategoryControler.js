import CategoryModel from "../models/CategoryModel.js";

export const handleAddcategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = new CategoryModel({
      name: name,
    });

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error("Error adding category:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const handleAddSubcategory = async (req, res) => {
  const { categoryId, name } = req.body;

  try {
    const category = await CategoryModel.findById(categoryId);

    if (!category) {
      console.error("Category not found for ID:", categoryId);
      return res.status(404).json({ error: "Category not found" });
    }

    category.subcategories.push(name);

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error("Error adding subcategory:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await CategoryModel.find().distinct("subcategories");
    res.status(200).json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCategoryList = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
