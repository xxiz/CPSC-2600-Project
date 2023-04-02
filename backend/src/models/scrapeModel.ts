import mongoose, { Schema, Document } from 'mongoose';
import { IScrape } from '../types';

interface ScrapeDocuemnt extends IScrape, Document {}

const scrapeSchema = new Schema<ScrapeDocuemnt>({
    count: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    elapsed_ms: { type: Number, required: true },
    deals: [{ type: Schema.Types.ObjectId, ref: 'Deal' }]
});

export default mongoose.model('Scrape', scrapeSchema);