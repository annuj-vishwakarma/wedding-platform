// backend/routes/authRoutes.js

import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { authenticateUser, authorizeAdmin, authorizeRole } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Example of protected route
router.get('/admin', authenticateUser, authorizeAdmin, (req, res) => {
  res.send('Admin content');
});

router.get('/caterer', authenticateUser, authorizeRole('caterer'), (req, res) => {
  res.send('Caterer content');
});

export default router;
