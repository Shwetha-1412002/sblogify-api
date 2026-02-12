const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// Create Post
router.post('/', postController.createPost);

// Get All Posts
router.get('/', postController.getAllPosts);

// Get One Post
router.get('/:id', postController.getPostById);

// Update Post
router.patch('/:id', postController.updatePost);

// Delete Post
router.delete('/:id', postController.deletePost);

module.exports = router;
