// backend/models/Vendor.js

import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    contact: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
