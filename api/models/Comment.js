const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

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
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id'
        }
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;