const {verifyToken, isUser} = require('../middlewares/authJwt');
const {createPost, getAllPosts, getPostById, updatePost, deletePost} = require('../controllers/post.controller');

module.exports = function (app) {
  app.post('/api/posts', [verifyToken, isUser], createPost);
  app.get('/api/posts', [verifyToken, isUser], getAllPosts);
  app.get('/api/posts/:id', [verifyToken, isUser], getPostById);
  app.put('/api/posts/:id', [verifyToken, isUser], updatePost);
  app.delete('/api/posts/:id', [verifyToken, isUser], deletePost);
};
