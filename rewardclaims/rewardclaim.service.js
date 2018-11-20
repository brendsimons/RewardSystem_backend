const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const RewardClaim = db.RewardClaim;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await RewardClaim.find();
}

async function getById(id) {
    return await RewardClaim.findById(id);
}

async function create(userId, rewardClaimParam) {
    rewardClaimParam.userId = userId;

    const rewardClaim = new RewardClaim(rewardClaimParam);

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