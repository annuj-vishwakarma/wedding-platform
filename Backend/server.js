import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import the connectDB function
import authRoutes from './Routes/authRoutes.js'; // Import your routes
import vendorRoutes from './Routes/vendorRoutes.js'

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/vendors', vendorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
