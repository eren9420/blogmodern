import dotenv from 'dotenv';
dotenv.config(); // Load .env file

export const config = {
    port: process.env.PORT || 5001,
    mongoUri: process.env.MONGODB_URI || '',
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret',
    adminUsername: process.env.ADMIN_USERNAME || 'admin',
    adminPassword: process.env.ADMIN_PASSWORD || 'password',
};