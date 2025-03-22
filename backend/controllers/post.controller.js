const db = require('../models');
const Post = db.Post;
const User = db.User;

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.userId,
    });
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send({message: 'Post Not found.'});
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send({message: 'Post Not found.'});
    }

    const user = await User.findByPk(req.userId);
    if (post.userId != req.userId && user.role !== 'admin') {
      return res.status(403).send({message: 'You do not have permission to update this post.'});
    }

    await post.update(req.body);
    res.status(200).send({message: 'Post updated successfully!'});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send({message: 'Post Not found.'});
    }

    const user = await User.findByPk(req.userId);
    if (post.userId != req.userId && user.role !== 'admin') {
      return res.status(403).send({message: 'You do not have permission to delete this post.'});
    }

    await post.destroy();
    res.status(200).send({message: 'Post deleted successfully!'});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};
