const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    score: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Task', schema);