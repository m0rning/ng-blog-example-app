'use strict';

const express = require('express');
const controller = require('./post');
const router = express.Router();

router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPost);
router.post('/', controller.createPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.removePost);

module.exports = router;