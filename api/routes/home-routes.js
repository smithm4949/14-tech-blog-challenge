const router = require('express').Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

router.get('/', postController.renderAll);
router.get('/dashboard', postController.renderOwned);
router.get('/posts/:id', postController.renderOne);

router.get('/profile', userController.renderProfile);

router.get('/login', ((req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
}));

module.exports = router;