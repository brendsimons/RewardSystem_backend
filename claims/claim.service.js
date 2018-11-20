const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Claim = db.Claim;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Claim.find();
}

async function getById(id) {
    return await Claim.findById(id);
}

async function create(userId, claimParam) {
    claimParam.userId = userId;

    const claim = new Claim(claimParam);

    // save claim
    await claim.save();
}

async function update(id, claimParam) {
    const claim = await Claim.findById(id);

    // validate
    if (!claim) throw 'Claim not found';

    // copy claimParam properties to claim
    Object.assign(claim, claimParam);

    await claim.save();
}

async function _delete(id) {
    await Claim.findByIdAndRemove(id);
}