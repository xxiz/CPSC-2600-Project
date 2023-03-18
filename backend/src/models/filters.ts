import mongoose, { Schema } from 'mongoose';

const FilterSchema = new Schema({
});

const Filter = mongoose.model('Filter', FilterSchema);

module.exports = Filter;