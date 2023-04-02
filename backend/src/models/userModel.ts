import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types';

interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>({
    username: { type: String, required: true },
    webhook_url: { type: String, required: false },
    notification: { type: Boolean, required: true, default: true },
});

export default mongoose.model('User', userSchema);