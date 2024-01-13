import express from 'express';
import {  handleSigIn, handleSignup } from '../controllers/UserController.js';


const router = express.Router();

router.post('/signup', handleSignup);
router.post('/login',handleSigIn)

export default router;
