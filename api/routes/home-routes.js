const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.renderAll);
router.get('/posts/:id', postController.renderOne);

module.exports = router;