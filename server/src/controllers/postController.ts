import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';
import slugify from 'slugify'; // You might need to install this: npm install slugify @types/slugify

interface AuthRequest extends Request {
    user?: { id: string }; // From authMiddleware
}

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }); // Sort by newest
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error fetching posts' });
    }
};

// @desc    Get single post by slug
// @route   GET /api/posts/:slug
// @access  Public
export const getPostBySlug = async (req: Request, res: Response) => {
     try {
        const post = await Post.findOne({ slug: req.params.slug });
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error fetching post' });
    }
};


// @desc    Create a post
// @route   POST /api/posts
// @access  Private (Admin)
export const createPost = async (req: AuthRequest, res: Response) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Please add a title and content' });
    }

     // Basic slug generation (consider more robust generation)
    const slug = slugify(title, { lower: true, strict: true });


    try {
         // Check if slug already exists
        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            // Handle slug collision, e.g., append a random string or count
            return res.status(400).json({ message: `Slug '${slug}' already exists. Please modify the title slightly.` });
        }


        const post = new Post({
            title,
            content,
            slug,
            // author: req.user?.id // If linking user
        });

        const createdPost = await post.save();
        res.status(201).json(createdPost);
    } catch (error) {
         console.error("Error creating post:", error);
         res.status(500).json({ message: 'Server Error creating post' });
    }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private (Admin)
export const updatePost = async (req: AuthRequest, res: Response) => {
    const { title, content } = req.body;
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Add authorization check if needed (e.g., ensure post author matches logged-in user)
        // if (post.author.toString() !== req.user?.id) {
        //     return res.status(401).json({ message: 'User not authorized' });
        // }

        post.title = title || post.title;
        post.content = content || post.content;
         // Optionally update slug if title changes, handle collisions
        if (title && post.title !== title) {
             post.slug = slugify(title, { lower: true, strict: true });
              // You MUST check for slug collisions again here before saving
             const existingSlug = await Post.findOne({ slug: post.slug, _id: { $ne: postId } });
             if (existingSlug) {
                 return res.status(400).json({ message: `Updated title creates slug '${post.slug}' which already exists.` });
             }
         }


        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ message: 'Server Error updating post' });
    }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private (Admin)
export const deletePost = async (req: AuthRequest, res: Response) => {
     const postId = req.params.id;
     try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

         // Add authorization check if needed

        await post.deleteOne(); // Use deleteOne() on the document instance
        res.json({ message: 'Post removed' });
    } catch (error) {
         console.error("Error deleting post:", error);
         res.status(500).json({ message: 'Server Error deleting post' });
    }
};