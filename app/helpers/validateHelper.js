const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        /* res.status(403)
        res.send({ errors: error.array() }); */
        console.log(req.route.path);
        let view = req.route.path;
        view = view.slice(1);
        res.render(view,{ errors: error.array() });
    }
}

module.exports = { validateResult }