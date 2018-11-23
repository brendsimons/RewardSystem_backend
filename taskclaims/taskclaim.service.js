const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const mongoose = require('mongoose');
const TaskClaim = db.TaskClaim;

module.exports = {
    getAll,
    getById,
    getByUser,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await TaskClaim.find({
        disabled: false
    })
        .populate('user', ['firstName', 'lastName', 'email', 'credits', 'score'])
        .populate('task');
}

async function getById(id) {
    return await TaskClaim.findById(id)
        .populate('user', ['firstName', 'lastName', 'email', 'credits', 'score'])
        .populate('task');
}

async function getByUser(id) {
    return await TaskClaim.find({
        user: id
    })
        .populate('user', ['firstName', 'lastName', 'email', 'credits', 'score'])
        .populate('task');
}

async function create(userId, taskClaimParam) {
    taskClaimParam.user = userId;

    const taskclaim = new TaskClaim(taskClaimParam);
    taskclaim._id = new mongoose.Types.ObjectId();
    taskclaim.status = config.taskClaimStatusses[0];

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
    await update(id, {
        disabled: true
    });
}