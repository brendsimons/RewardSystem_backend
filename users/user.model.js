const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    score: { type: Number, default: 0 },
    credits: { type: Number, default: 0 },
    role: { type: String, default: "user" },
    createdDate: { type: Date, default: Date.now },
    image: { type: String, default: 'https://www.babybedding.com/images/products/silver-gray-minky-cradle-sheet_large.jpg' },
    disabled: { type: Boolean, default: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);