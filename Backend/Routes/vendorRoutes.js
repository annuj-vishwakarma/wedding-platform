// backend/routes/vendorRoutes.js

import express from 'express';
import Vendor from '../Models/Vendor.js';

const router = express.Router();

// Create a new vendor
router.post('/', async (req, res) => {
  try {
    const { name, category, location, description, contact } = req.body;
    const newVendor = new Vendor({
      name,
      category,
      location,
      description,
      contact,
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

// Get a single vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a vendor
router.put('/:id', async (req, res) => {
  try {
    const { name, category, location, description, contact } = req.body;
    const updatedVendor = {
      name,
      category,
      location,
      description,
      contact,
    };
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, updatedVendor, { new: true });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a vendor
router.delete('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
