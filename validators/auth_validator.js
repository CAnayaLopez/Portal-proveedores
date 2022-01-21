const { body } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const loginValidateRules = [
    body('user')
      .exists()
      .not()
      .isEmpty()
      .withMessage('El campo no debe estar vacío')
      .isEmail()
      .withMessage('No corresponde a un correo electrónico'),
    body('pass')
      .exists()
      .not()
      .isEmpty()
      .withMessage("El campo no debe estar vacío")
      .isLength({ min: 3})
      .withMessage("Longitud mínima de 3 caracteres"),
    (req, res, next) => {
      validateResult(req, res, next);
    }
]

module.exports = { loginValidateRules }