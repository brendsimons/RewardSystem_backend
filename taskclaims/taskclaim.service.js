const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const TaskClaim = db.TaskClaim;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await TaskClaim.find();
}

async function getById(id) {
    return await TaskClaim.findById(id);
}

async function create(userId, taskClaimParam) {
    taskClaimParam.userId = userId;

    const taskclaim = new TaskClaim(taskClaimParam);

    // save claim
    await taskclaim.save();
}

async function update(id, taskClaimParam) {
    const taskclaim = await TaskClaim.findById(id);

    // validate
    if (!taskclaim) throw 'Claim not found';

    // copy claimParam properties to claim
    Object.assign(taskclaim, taskClaimParam);

    await taskclaim.save();
}

async function _delete(id) {
    await TaskClaim.findByIdAndRemove(id);
}