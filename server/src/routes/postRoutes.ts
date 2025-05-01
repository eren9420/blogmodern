import express from 'express';
import {
    getPosts,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost
} from '../controllers/postController';
import { protect } from '../middleware/authMiddleware'; // Import protect middleware

const router = express.Router();

// Public routes
router.get('/', getPosts);
router.get('/:slug', getPostBySlug); // Use slug for public fetching

// Protected (Admin) routes - use protect middleware
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost); // Use ID for update/delete
router.delete('/:id', protect, deletePost); // Use ID for update/delete


export default router;