const { verifyToken, isAdmin, isUser } = require('../middlewares/authJwt');
const { getUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/user.controller');


module.exports = function (app) {
  app.get('/api/user', [verifyToken, isUser], getUser);
  app.get('/api/users', [verifyToken, isAdmin], getAllUsers);
  app.get('/api/users/:id', [verifyToken, isAdmin], getUserById);
  app.put('/api/users/:id', [verifyToken, isAdmin], updateUser);
  app.delete('/api/users/:id', [verifyToken, isAdmin], deleteUser);
};