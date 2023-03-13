const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;