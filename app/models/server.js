const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, '../views/'));
        this.app.set('port', this.port || 3000);
    }

    middlewares() {
        this.app.use((req, res, next) => {
            console.log(`${req.url} - ${req.method}`);
            next();
        });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        this.app.use(express.static(path.join(__dirname, '../../public/')));
    }

    routes() {
        this.app.use(require('../routes/index'));
        this.app.use('/user',require('../routes/user_router'));
        this.app.use('/auth',require('../routes/auth_router'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor Listo ${this.port}` );
        });
    }

}

module.exports = Server;