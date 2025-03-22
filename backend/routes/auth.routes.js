const { signup, signin, validateToken } = require('../controllers/auth.controller');

module.exports = function (app) {
  app.post('/api/auth/register', signup);
  app.post('/api/auth/login', signin);
  app.get('/api/auth/validate-token', validateToken);
};