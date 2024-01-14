import express from 'express';
import {  handleAddToWishList, handleSigIn, handleSignup } from '../controllers/UserController.js';


const router = express.Router();

router.post('/signup', handleSignup);
router.post('/login',handleSigIn)
router.post('/addtowishlist/:productId/:userId',handleAddToWishList)
export default router;
