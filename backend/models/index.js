const {Sequelize} = require('sequelize');
const config = require('../config/config');
const UserModel = require('./user.model');
const PostModel = require('./post.model');

const sequelize = new Sequelize(config.development);

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
  Post,
};
