const { User, Post } = require("../models");

const createPost = async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ userId: user.id, body });

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: ["user"],
    });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
