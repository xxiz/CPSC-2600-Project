const connection = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

module.exports = connection;