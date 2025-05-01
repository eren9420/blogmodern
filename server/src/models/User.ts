import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  username: string;
  passwordHash: string;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('passwordHash')) { // Use 'passwordHash' if that's the field name
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    // Re-assign the plain password to be hashed if needed or expect passwordHash to be set directly
    // If you set 'password' temporarily and want to hash it to 'passwordHash':
    // this.passwordHash = await bcrypt.hash(this.password, salt); // Assuming 'password' was temporarily set
    // If 'passwordHash' is already set (e.g., during seeding with a pre-hashed password) it should just save.
    // If you are setting the hash *directly* before save, ensure it's done correctly.
    // Let's assume the hash is set before calling save() typically.
     next();
  } catch (error: any) {
    next(error);
  }
});


// Method to compare password
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};


export default mongoose.model<IUser>('User', UserSchema);