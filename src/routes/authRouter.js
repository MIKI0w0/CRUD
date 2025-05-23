import express from 'express';
import * as authController from '../controllers/authcontroller.js';

const router = express.Router();

//api/register
router.post('/register', authController.registerUser);

//api/login
router.post('/login', authController.loginUser);

export default router;