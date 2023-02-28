const Comment = require('../api/models/Comment');

const data = [
    {
      contents: "WOW, good for you! Express is so useful!",
      userId: "3",
      postId: "1"
    },
    {
      contents: "Awesome, can't make sites without it.",
      userId: "3",
      postId: "2"
    },
    {
      contents: "Hm, I'm still a beginner but I'm down to try together!",
      userId: "3",
      postId: "3"
    },
];

const seedComment = () => Comment.bulkCreate(data);

module.exports = seedComment;