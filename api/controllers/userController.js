const User = require('../models/User');

exports.getAll = function (req, res) {
  return User
  .findAll()
  .then(users => res.status(200).json(users))
  .catch(err => res.status(400).json(err))
}

exports.getOne = function (req, res) {
  return User
  .findOne({
    where: { id: req.params.id }
  }
  )
  .then(users => res.status(200).json(users))
  .catch(err => res.status(400).json(err))
}

exports.create = function (req, res) {
  return User
  .create(req.body)
  .then((user) => {
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.loggedIn = true;

      res.status(200).json(user);
    });
  })
  .catch(err => res.status(400).json(err))
}

exports.update = function (req, res) {
  return User
  .update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((user) => {
    res.status(200).json(user);
  })
  .catch(err => res.status(400).json(err));
}

exports.delete = function (req, res) {
  // delete a owner by its `id` value
  return User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch(err => res.status(400).json(err));
}