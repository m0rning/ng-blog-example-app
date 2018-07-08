'use strict';

const express = require('express');
const controller = require('./post');
const router = express.Router();

router.get('/posts', controller.getAllPosts);
router.get('/post/:id', controller.getPost);

module.exports = router;