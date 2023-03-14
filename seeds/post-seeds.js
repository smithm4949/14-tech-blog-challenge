const { Post } = require('../api/models');

const data = [
    {
      title: "Learned Express.js!",
      contents: "This is so cool now I can Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium laoreet erat et porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.",
      userId: "1"
    },
    {
      title: "Learned HTML!",
      contents: "This is so cool now I can Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium laoreet erat et porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.",
      userId: "1"
    },
    {
      title: "Struggling with web dev",
      contents: "Can anyone help me so I can Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium laoreet erat et porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.",
      userId: "2"
    }
];

const seedPost = () => Post.bulkCreate(data);

module.exports = seedPost;