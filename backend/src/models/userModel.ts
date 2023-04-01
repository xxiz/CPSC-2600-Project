import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types';

interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>({
    username: { type: String, required: true },
    webhook_url: { type: String, required: false },
    ntfy_url: { type: String, required: false }
});

export default mongoose.model('User', userSchema);