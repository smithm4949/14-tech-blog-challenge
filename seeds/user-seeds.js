const User = require('../api/models/User');

const data = [
    {
      username: "smithm4949",
      password: "password123"
    },
    {
      username: "johnny5",
      password: "pw4321"
    },
    {
      username: "suziii",
      password: "asdf"
    },
    {
      username: "charliii",
      password: "10101010"
    }
];

const seedUser = () => User.bulkCreate(data, {
  individualHooks: true
});

module.exports = seedUser;