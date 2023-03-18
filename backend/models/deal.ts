const DealSchema = new Schema({
    title: { type: String, required: true },
    topic: { type: String, required: false },
    link: { type: String, required: true },
    description: { type: String, required: false },
    last_updated: { type: Date, required: true },
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

module.exports = mongoose.model('Deal', DealSchema);