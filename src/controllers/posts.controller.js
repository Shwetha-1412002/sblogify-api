const postService = require('../services/posts.service');

// Create Post
const createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost(req.body);

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    next(error);
  }
};

// Get All Posts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({
      success: true,
      data: posts
    });
  } catch (error) {
    next(error);
  }
};

// Get One Post
const getPostById = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    next(error);
  }
};

// Update Post
const updatePost = async (req, res, next) => {
  try {
    const post = await postService.updatePost(
      req.params.id,
      req.body
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    next(error);
  }
};

// Delete Post
const deletePost = async (req, res, next) => {
  try {
    const post = await postService.deletePost(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
