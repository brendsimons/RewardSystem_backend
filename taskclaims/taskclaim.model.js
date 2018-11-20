const mongoose = require('mongoose');
const config = require('config.json');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, required: true },
    taskId: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: [{
            type: String,
            enum: config.taskClaimStatusses
        }], default: config.taskClaimStatusses[0], required: true
    },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('TaskClaim', schema);