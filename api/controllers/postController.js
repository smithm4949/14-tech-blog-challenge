const Post = require('../models/Post');

exports.getAll = function (req, res) {
  return Post
  .findAll()
  .then(posts => res.status(200).json(posts))
  .catch(err => res.status(400).json(err))
}

exports.getOne = function (req, res) {
  return Post
  .findOne({
    where: { id: req.params.id }
  }
  )
  .then(posts => res.status(200).json(posts))
  .catch(err => res.status(400).json(err))
}

exports.create = function (req, res) {
  return Post
  .create(req.body)
  .then((post) => {
    res.status(200).json(post)
  })
  .catch(err => res.status(400).json(err))
}

exports.update = function (req, res) {
  return Post
  .update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((post) => {
    res.status(200).json(post);
  })
  .catch(err => res.status(400).json(err));
}

exports.delete = function (req, res) {
  return Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch(err => res.status(400).json(err));
}