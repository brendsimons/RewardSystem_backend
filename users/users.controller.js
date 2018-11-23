const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const permission = require('../_helpers/permission');

// routes
router.get('/resetscores', resetScore);
router.post('/login', login);
router.post('/register', create);
router.post('/', create);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function login(req, res, next) {
    userService.login(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function create(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    if (permission.check(req, "manage_users")) {
        return permission.throw(res);
    }

    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function resetScore(req, res, next) {
    if (permission.check(req, "reset_scores")) {
        return permission.throw(res);
    }

    userService.getAll()
        .then(users => {
            for (var i = 0; i < users.length; i++) {
                userService.update(users[i].id, {
                    score: 0
                });
            }
        })
        .catch(err => next(err));

    res.json({});
}