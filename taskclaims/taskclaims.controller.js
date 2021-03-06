const express = require('express');
const router = express.Router();
const taskClaimService = require('./taskclaim.service');
const permission = require('../_helpers/permission');

// routes
router.get('/myown', getMyOwn);
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

function getMyOwn(req, res, next) {
    taskClaimService.getByUser(req.user.sub)
        .then(claims => res.json(claims))
        .catch(err => next(err));
}

function update(req, res, next) {
    if (permission.check(req, "manage_task_claims")) {
        return permission.throw(res);
    }

    taskClaimService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    if (permission.check(req, "manage_task_claims")) {
        return permission.throw(res);
    }

    taskClaimService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}