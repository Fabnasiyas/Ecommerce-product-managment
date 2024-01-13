import express from 'express';
import { getAllProducts, getProductData, handleAddProduct } from '../controllers/ProductController.js';
const router = express.Router();


router.post('/addProduct',handleAddProduct)
router.get('/getAllProducts',getAllProducts)
router.get('/getProductDetails/:productId',getProductData)
export default router;
