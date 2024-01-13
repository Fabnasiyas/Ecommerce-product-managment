import express from 'express';
import {  getAllCategories, getAllSubCategories, handleAddSubcategory, handleAddcategory } from '../controllers/CategoryControler.js';
const router = express.Router();

router.post('/addcategory',handleAddcategory)
router.get('/getallaategories',getAllCategories)
router.post('/addsubcategory',handleAddSubcategory)
router.get('/getallsubcategories',getAllSubCategories)
export default router;
