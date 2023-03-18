import mongoose, { Schema } from 'mongoose';

const DealSchema = new Schema({
    title: { type: String, required: true },
    topic: { type: String, required: false },
    link: { type: String, required: true },
    description: { type: String, required: false },
    last_updated: { type: String, required: true },
    votes: { type: Number, required: true },
    raw: {
        last_updated: String,
        votes: String,
        description: String,
        link: String,
        topic: String,
        title: String
    }
});

export default mongoose.model('Deal', DealSchema);