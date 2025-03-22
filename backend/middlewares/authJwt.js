const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.User;

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (user.role === 'admin') {
      next();
      return;
    }

    res.status(403).send({ message: 'Require Admin Role!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

isUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (user.role === 'user' || user.role === 'admin') {
      next();
      return;
    }

    res.status(403).send({ message: 'Require User Role!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  verifyToken,
  isAdmin,
  isUser,
};