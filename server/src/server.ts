import 'dotenv/config';


import express from 'express';
import cors from 'cors';
import { config } from './config';
import connectDB from './config/db';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Body parser for JSON data

// Define Routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => res.send('API Running'));

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));