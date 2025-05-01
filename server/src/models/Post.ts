import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string; // Rich text/Markdown content
  slug: string; // URL-friendly identifier
  author: mongoose.Schema.Types.ObjectId | string; // Link to User model (optional if only one admin)
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // Generate this from title
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // If linking needed
}, { timestamps: true });

// Add pre-save hook to generate slug from title if needed

export default mongoose.model<IPost>('Post', PostSchema);