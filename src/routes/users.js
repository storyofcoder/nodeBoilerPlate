const express = require('express');
const user = require('../controllers/users');
const validate = require('../controllers/validator');
const { errorHandler } = require('../middlewares/errors');
const router = express.Router();
const jwt = require('../middlewares/jwt');

router.get('/:username', validate.getUser, user.getUser);
router.post('/register', validate.register, user.register);

router.post('/login', validate.login, user.login, jwt.sendToken);
router.put('/update', jwt.verifyToken, validate.updateUser, user.update);

router.use(errorHandler);

module.exports = router;
