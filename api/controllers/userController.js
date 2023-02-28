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

exports.login = function (req, res) {
  User.findOne({
    where: {username: req.body.username}
  })
  .then((user) => {
    let passwordMatch = user.checkPassword(req.body.password);

    if (passwordMatch) {
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.loggedIn = true;
  
        res.status(200).json({user, message: 'Succesfully logged in'});
      });
    } else {
      res.status(400).json({message: 'Invalid password or email'});
    }
  })
  .catch(err => res.status(400).json(err));
}

exports.logout = function (req, res) {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}