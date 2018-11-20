const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    score: { type: Number, default: 0 },
    image: { type: String, default: 'https://www.babybedding.com/images/products/silver-gray-minky-cradle-sheet_large.jpg' }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Reward', schema);