import mongoose, { Schema, Document } from 'mongoose';
import { IScrapeResult } from '../types';

interface ScrapeResultDocument extends IScrapeResult, Document {}

const scrapeResultSchema = new Schema<ScrapeResultDocument>({
    count: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    elapsed_ms: { type: Number, required: true },
    deals: [{ type: Schema.Types.ObjectId, ref: 'Deal' }]
});

export default mongoose.model('ScrapeResult', scrapeResultSchema);