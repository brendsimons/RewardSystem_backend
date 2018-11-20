const mongoose = require('mongoose');
const config = require('config.json');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, required: true },
    rewardId: { type: String, required: true },
    status: {
        type: [{
            type: String,
            enum: config.rewardClaimStatusses
        }], default: config.rewardClaimStatusses[0], required: true
    },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('RewardClaim', schema);