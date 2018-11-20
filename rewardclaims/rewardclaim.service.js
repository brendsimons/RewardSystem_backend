const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const mongoose = require('mongoose');
const RewardClaim = db.RewardClaim;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await RewardClaim.find()
        .populate('user', ['firstName', 'lastName', 'email', 'credits', 'score'])
        .populate('reward');
}

async function getById(id) {
    return await RewardClaim.findById(id)
        .populate('user', ['firstName', 'lastName', 'email', 'credits', 'score'])
        .populate('reward');
}

async function create(userId, rewardClaimParam) {
    rewardClaimParam.user = userId;

    const rewardClaim = new RewardClaim(rewardClaimParam);
    rewardClaim._id = new mongoose.Types.ObjectId();
    rewardClaim.status = config.rewardClaimStatusses[0];

    // save claim
    await rewardClaim.save();
}

async function update(id, rewardClaimParam) {
    const rewardClaim = await RewardClaim.findById(id);

    // validate
    if (!rewardClaim) throw 'Claim not found';

    // copy claimParam properties to claim
    Object.assign(rewardClaim, rewardClaimParam);

    await rewardClaim.save();
}

async function _delete(id) {
    await RewardClaim.findByIdAndRemove(id);
}