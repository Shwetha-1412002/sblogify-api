const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'All posts fetched successfully'
    }
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Post details for ID ${id}`
    }
  });
};

const createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: 'Title and content are required'
    });
  }

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: { title, content }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};
