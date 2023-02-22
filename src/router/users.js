'use strict';

const express = require('express');

const userController = require('../controller/users.js');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:userId', userController.getById);
router.post('/', userController.create);
router.delete('/:userId', userController.remove);
router.patch('/:userId', userController.update);

module.exports.router = router;