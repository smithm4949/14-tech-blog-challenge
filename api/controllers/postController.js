const { User, Post, Comment } = require('../models');

exports.getAll = function (req, res) {
  return Post
  .findAll()
  .then(posts => res.status(200).json(posts))
  .catch(err => res.status(400).json(err))
}

exports.renderAll = function (req, res) {
  return Post
  .findAll({ include: {
    model: User,
    attributes: ['username']
  }})
  .then(posts => {
    const plainPosts = posts.map(post => {
      let plainPost = post.get({ plain: true });
      plainPost.postLink = `/posts/${plainPost.id}`;
      return plainPost;
    });
    console.log({posts: plainPosts});
    res.status(200).render('homepage', {posts: plainPosts, loggedIn: req.session.loggedIn, userId: req.session.userId})
  })
  .catch(err => res.status(400).json(err))
}

exports.renderOwned = function (req, res) {
  return Post
  .findAll({
    where: { userId: req.session.userId },
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(posts => {
    const plainPosts = posts.map(post => {
      let plainPost = post.get({ plain: true });
      plainPost.postLink = `/posts/${plainPost.id}`;
      return plainPost;
    });
    console.log({posts: plainPosts});
    res.status(200).render('dashboard', {posts: plainPosts, loggedIn: req.session.loggedIn, userId: req.session.userId});
  })
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

exports.renderOne = function (req, res) {
  return Post
  .findOne({
    where: { id: req.params.id },
    include: {
      model: Comment,
      include: {
        model: User,
        attributes: ['username']
      }
    }
  })
  .then(post => {
    const plainPost = post.get({plain: true});
    plainPost.userId = req.session.userId;
    plainPost.loggedIn = req.session.loggedIn;
    console.log({...plainPost});
    res.status(200).render('post', {...plainPost, loggedIn: req.session.loggedIn, userId: req.session.userId});
  })
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