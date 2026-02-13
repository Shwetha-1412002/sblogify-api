const Post = require('../models/post.model');

// Create Post
const createPost = async (data) => {
  return await Post.create(data);
};

// Get All Posts (with author populate)
const getAllPosts = async () => {
  return await Post.find().populate('author', 'username');
};

// Get Single Post
const getPostById = async (id) => {
  return await Post.findById(id).populate('author', 'username email');
};

// Update Post
const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

// Delete Post
const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
