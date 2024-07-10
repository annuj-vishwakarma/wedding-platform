// backend/routes/vendorRoutes.js

import express from 'express';
import Vendor from '../Models/Vendor.js';
import { authenticateUser, authorizeAdmin, authorizeRole } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Create a new vendor (requires admin or vendor role)
router.post('/', authenticateUser, authorizeRole(['admin', 'vendor']), async (req, res) => {
  try {
    const { name, category, location, description, contact, email } = req.body;

    // Check if all required fields are provided
    if (!name || !category || !location || !contact || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newVendor = new Vendor({
      name,
      category,
      location,
      description,
      contact,
      email,
    });

    const savedVendor = await newVendor.save();
    res.status(201).json(savedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
