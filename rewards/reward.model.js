const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    image: { type: String, default: 'https://www.babybedding.com/images/products/silver-gray-minky-cradle-sheet_large.jpg' },
    disabled: { type: Boolean, default: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Reward', schema);