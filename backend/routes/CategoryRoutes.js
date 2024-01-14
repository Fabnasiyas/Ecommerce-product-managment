import express from 'express';
import {  getAllCategories, getAllSubCategories, getCategoryList, handleAddSubcategory, handleAddcategory } from '../controllers/CategoryControler.js';
const router = express.Router();

router.post('/addcategory',handleAddcategory)
router.get('/getallaategories',getAllCategories)
router.post('/addsubcategory',handleAddSubcategory)
router.get('/getallsubcategories',getAllSubCategories)
router.get('/categorieslisting',getCategoryList)
export default router;
