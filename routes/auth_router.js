const { Router } = require('express');
const { login, logout } = require('../controllers/auth_controller');
const { loginValidateRules } = require('../validators/auth_validator');

const router = Router();

router.post('/login', loginValidateRules,login);

router.post('/logout', logout);

module.exports = router;
