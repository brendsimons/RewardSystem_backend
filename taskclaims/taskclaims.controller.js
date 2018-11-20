const express = require('express');
const router = express.Router();
const taskClaimService = require('./taskclaim.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    taskClaimService.create(req.user.sub, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    taskClaimService.getAll()
        .then(claims => res.json(claims))
        .catch(err => next(err));
}

function getById(req, res, next) {
    taskClaimService.getById(req.params.id)
        .then(claim => claim ? res.json(claim) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    taskClaimService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    taskClaimService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}