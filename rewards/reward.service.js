const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Reward = db.Reward;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Reward.find();
}

async function getById(id) {
    return await Reward.findById(id);
}

async function create(rewardParam) {
    const reward = new Reward(rewardParam);
    return await reward.save();
}

async function update(id, rewardParam) {
    const reward = await Reward.findById(id);

    // validate
    if (!reward) throw 'Reward not found';

    // copy userParam properties to user
    Object.assign(reward, rewardParam);

    await reward.save();
}

async function _delete(id) {
    await Reward.findByIdAndRemove(id);
}