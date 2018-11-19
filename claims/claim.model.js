const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    message: { type: String, required: true },
    userId: { type: String, required: true },
    taskId: { type: String, required: true},
    status: {
        type: [{
            type: String,
            enum: ["pending", "rewarded", "not-rewarded"]
        }], required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Claim', schema);