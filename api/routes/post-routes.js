const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAll);
router.post('/', postController.create);
router.get('/:id', postController.getOne);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);
