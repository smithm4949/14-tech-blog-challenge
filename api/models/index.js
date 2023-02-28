const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = { User, Post, Comment }