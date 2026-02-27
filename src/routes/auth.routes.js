const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

// Register
router.post('/register', authController.registerUser);

// Login
router.post('/login', authController.loginUser);

// Logout
router.post('/logout', authController.logoutUser);

module.exports = router;
