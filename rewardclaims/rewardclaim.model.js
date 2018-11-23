const mongoose = require('mongoose');
const config = require('config.json');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: 'User', global: 1, required: true },
    reward: { type: Schema.Types.ObjectId, ref: 'Reward', global: 1, required: true },
    status: {
        type: [{
            type: String,
            enum: config.rewardClaimStatusses
        }], default: config.rewardClaimStatusses[0], required: true
    },
    createdDate: { type: Date, default: Date.now },
    disabled: { type: Boolean, default: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('RewardClaim', schema);