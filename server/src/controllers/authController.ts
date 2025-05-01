import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import { config } from '../config';

// Generate JWT
const generateToken = (id: string) => {
    return jwt.sign({ id }, config.jwtSecret, {
        expiresIn: '30d', // Token expiration
    });
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.comparePassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id.toString()),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
         console.error("Login error:", error);
         res.status(500).json({ message: 'Server error during login' });
    }
};