const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const mongoose = require('mongoose');
const Task = db.Task;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Task.find({
        disabled: false
    });
}

async function getById(id) {
    return await Task.findById(id);
}

async function create(taskParam) {

    const task = new Task(taskParam);
    task._id = new mongoose.Types.ObjectId();

    // save task
    await task.save();
}

async function update(id, taskParam) {
    const task = await Task.findById(id);

    // validate
    if (!task) throw 'Task not found';

    // copy taskParam properties to task
    Object.assign(task, taskParam);

    await task.save();
}

async function _delete(id) {
    await update(id, {
        disabled: true
    });
}