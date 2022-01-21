const express = require('express');
const router = express.Router();


const indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/index', indexController.index2);

router.get('/master', indexController.master);

router.get('/login', indexController.login);

router.get('/Privacidad', indexController.privacidad);

router.get('/Terminos', indexController.terminos);

router.get('/products', indexController.getProducts);

router.post('/new-product', indexController.addProduct);

module.exports = router;
