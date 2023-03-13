const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const Post = require('./Post');
const User = require('./User');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User
        }
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
          model: Post
        }
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;