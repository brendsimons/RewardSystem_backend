const express = require('express');
const router = express.Router();
const claimService = require('./claim.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    claimService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    claimService.getAll()
        .then(claims => res.json(claims))
        .catch(err => next(err));
}

function getById(req, res, next) {
    claimService.getById(req.params.id)
        .then(claim => claim ? res.json(claim) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    claimService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    claimService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}